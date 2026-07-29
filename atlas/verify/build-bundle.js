// Regenerate _ds_bundle.js (format:4) + _ds_manifest.json component list from
// all components/*/*.jsx (existing + new skeletons/primitives). Two-pass Babel:
//   pass 1: preset-react (JSX -> React.createElement, imports intact)
//   pass 2: strip `import React`, rewrite sibling imports to __ds_scope.<name>,
//           strip `export`, collect exported names.
// Run from atlas/verify (has @babel/core): node build-bundle.js
const babel = require("@babel/core");
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const REPO = path.resolve(__dirname, "..", "..");
const NS = "KumulusPartnersDesignSystem_533273";

// enumerate components in the existing bundle's directory order, then any new dirs
const DIR_ORDER = ["brand", "charts", "content", "data", "diagrams", "feature", "layout", "media", "structures"];
const files = [];
for (const d of DIR_ORDER) {
  const dir = path.join(REPO, "components", d);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".jsx")).sort()) {
    files.push(`components/${d}/${f}`);
  }
}

function rewritePlugin({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(p, state) {
        const src = p.node.source.value;
        if (src === "react") { p.remove(); return; }
        if (/^\.\.?\//.test(src)) {
          for (const spec of p.node.specifiers) {
            const local = spec.local.name;
            const imported = spec.imported ? spec.imported.name : local;
            const binding = p.scope.getBinding(local);
            if (binding) for (const ref of binding.referencePaths) {
              ref.replaceWith(t.memberExpression(t.identifier("__ds_scope"), t.identifier(imported)));
            }
          }
          p.remove();
        }
      },
      ExportNamedDeclaration(p, state) {
        const ex = (state.file.metadata.exps = state.file.metadata.exps || []);
        if (p.node.declaration) {
          const d = p.node.declaration;
          if (d.type === "FunctionDeclaration") { ex.push(d.id.name); p.replaceWith(d); }
          else if (d.type === "VariableDeclaration") { for (const dc of d.declarations) ex.push(dc.id.name); p.replaceWith(d); }
        } else { for (const s of p.node.specifiers) ex.push(s.exported.name); p.remove(); }
      },
      ExportDefaultDeclaration(p) { p.remove(); },
    },
  };
}

const manifestComponents = [], sourceHashes = {}, allExports = [];
let body = "";
for (const rel of files) {
  const abs = path.join(REPO, rel);
  const src = fs.readFileSync(abs, "utf8");
  sourceHashes[rel] = crypto.createHash("sha256").update(src).digest("hex").slice(0, 12);
  const pass1 = babel.transform(src, { filename: abs, babelrc: false, configFile: false, presets: [["@babel/preset-react", { runtime: "classic" }]] }).code;
  const res = babel.transform(pass1, { filename: abs, babelrc: false, configFile: false, plugins: [rewritePlugin] });
  const exps = res.metadata.exps || [];
  for (const n of exps) { manifestComponents.push({ name: n, sourcePath: rel }); allExports.push(n); }
  const assign = exps.length ? `\nObject.assign(__ds_scope, { ${exps.join(", ")} });` : "";
  body += `\n// ${rel}\ntry { (() => {\n${res.code}${assign}\n})(); } catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: String((e && e.message) || e) }); }\n`;
}

const manifestComment = { format: 4, namespace: NS, components: manifestComponents, sourceHashes, inlinedExternals: [], unexposedExports: [] };
let out = `/* @ds-bundle: ${JSON.stringify(manifestComment)} */\n\n(() => {\n\n`;
out += `const __ds_ns = (window.${NS} = window.${NS} || {});\n\nconst __ds_scope = {};\n\n(__ds_ns.__errors = __ds_ns.__errors || []);\n`;
out += body;
out += "\n";
for (const n of allExports) out += `\n__ds_ns.${n} = __ds_scope.${n};\n`;
out += "\n})();\n";

fs.writeFileSync(path.join(REPO, "_ds_bundle.js"), out);

// update _ds_manifest.json component list (names only, in the same shape it already uses)
const man = JSON.parse(fs.readFileSync(path.join(REPO, "_ds_manifest.json"), "utf8"));
man.components = manifestComponents;
fs.writeFileSync(path.join(REPO, "_ds_manifest.json"), JSON.stringify(man, null, 2) + "\n");

console.log(`bundle: ${files.length} files -> ${allExports.length} exported components`);
console.log(`new since old (31): +${allExports.length - 31}`);
