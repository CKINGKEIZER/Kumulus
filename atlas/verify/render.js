// Reusable Kumulus component render harness (Phase C verification).
//   npm i react@18 react-dom@18 @babel/core @babel/preset-env @babel/preset-react @babel/register
//   node render.js <demo> <theme>   -> writes slide.html
//   <chromium> --headless --screenshot=shot.png --window-size=1280,720 file://$PWD/slide.html
const path = require("path");
const fs = require("fs");

const HARNESS = __dirname;
const REPO = path.resolve(__dirname, "..", "..");

process.env.NODE_PATH = path.join(HARNESS, "node_modules");
require("module").Module._initPaths();
require("@babel/register")({
  extensions: [".js", ".jsx"],
  cwd: HARNESS,
  presets: [["@babel/preset-env", { targets: { node: "current" } }], ["@babel/preset-react", { runtime: "classic" }]],
  only: [new RegExp(REPO.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))],
  cache: false,
});

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { SlideFrame } = require(path.join(REPO, "components/layout/SlideFrame.jsx"));
const { FinancialStatement } = require(path.join(REPO, "components/structures/FinancialStatement.jsx"));

const demos = {
  "fin-statement": () =>
    React.createElement(
      SlideFrame,
      { variant: "content", title: "Historical – reported profit & loss statement",
        projectName: "Project Torino | June 2022", confidential: "Strictly private & confidential",
        pageNumber: "64", sectionTabs: [{ n: 1 }, { n: 2 }, { n: 3 }, { n: "A" }], activeTab: 3, activeLabel: "Transaction financials" },
      React.createElement(FinancialStatement, {
        table: {
          columns: [{ label: "FY19A" }, { label: "FY20A" }, { label: "FY21A" }, { label: "CAGR" }], rowLabelHead: "€k",
          rows: [
            { label: "Consulting (ISMA)", values: ["389", "382", "453", "7.9%"], marker: 1 },
            { label: "Projects", values: ["3,853", "2,577", "3,315", "(7.2%)"], indent: true, italic: true, marker: 2 },
            { label: "Installed base", values: ["2,236", "2,726", "3,340", "22.2%"], indent: true, italic: true, marker: 3 },
            { label: "Explosion protection (StuvEx)", values: ["7,807", "10,158", "8,503", "4.4%"] },
            { label: "Trading (IExT)", values: ["778", "769", "808", "1.9%"], marker: 6 },
            { label: "Revenue", values: ["8,973", "11,310", "9,760", "4.3%"], subtotal: true },
            { label: "Direct costs", values: ["(4,551)", "(5,586)", "(4,421)", "(1.4%)"], marker: 7 },
            { label: "Gross profit", values: ["4,422", "5,724", "5,339", "9.9%"], subtotal: true },
            { label: "Personnel expenses", values: ["(2,667)", "(2,867)", "(3,306)", "11.3%"], marker: 9 },
            { label: "EBITDA", values: ["474", "1,865", "1,103", "52.5%"], subtotal: true },
          ],
          kpis: [{ label: "Gross margin (%)", values: ["49.3%", "50.6%", "54.7%", ""] }, { label: "EBITDA margin (%)", values: ["5.3%", "16.5%", "11.3%", ""] }],
          note: "Note: (1) technical sales, limited engineering required",
        },
        commentary: [
          { n: 1, body: "Increase in consulting services (ISMA) in FY21A in line with increased demand for which ISMA plans to grow its employee base and geographical reach." },
          { n: 2, body: "Large project sales due to a large project in FY19A cause negative growth over the historical period but expected to be positive going forward. Drop in FY20A linked to Covid." },
          { n: 3, body: "Key driver for growth, growing at a CAGR of 22%, mainly driven by service and Ventex." },
          { n: 6, body: "Stable revenues for trading (IExT) over the historical period with same expectation going forward." },
          { n: 7, body: "Mainly includes purchases, subcontracting, and inbound & outbound transport and minor services." },
          { n: 9, body: "Includes both employee costs and management fees; increases due to more FTEs and an additional management FTE." },
        ],
      })
    ),
};

const name = process.argv[2] || "fin-statement";
const theme = process.argv[3] || "theme-irmaco";
const body = ReactDOMServer.renderToStaticMarkup(demos[name]());
const cssFiles = ["tokens/typography.css", "tokens/spacing.css", "tokens/colors.css", "tokens/canvas.css", "tokens/deal-theme.css", "tokens/fonts.css", "styles.css"];
const css = cssFiles.map((f) => { try { return fs.readFileSync(path.join(REPO, f), "utf8"); } catch { return ""; } }).join("\n");
const html = `<!doctype html><html><head><meta charset="utf-8"><style>\n${css}\nhtml,body{margin:0;padding:0;background:#666}\n.stage{width:1280px;height:720px;overflow:hidden;background:#fff}\n</style></head><body><div class="stage ${theme}">${body}</div></body></html>`;
fs.writeFileSync(path.join(HARNESS, "slide.html"), html);
console.log("wrote slide.html (demo=" + name + ", theme=" + theme + ")");
