#!/usr/bin/env python3
"""Generate atlas/catalog.html from primitives.json + component-queue.json.
Re-run after each batch to refresh the visual catalog. Emits Artifact-ready
page content (a <style> + body content; no doctype/html/head/body)."""
import json, html, pathlib

HERE = pathlib.Path(__file__).parent
prims = json.load(open(HERE/"primitives.json"))
queue = json.load(open(HERE/"component-queue.json"))
E = html.escape

# ---- derived stats ----
P = prims["primitives"]
B = queue["batches"]
gaps = [p for p in P if "TBD" in p.get("component","")]
done = [b for b in B if b.get("status")=="done"]
g1 = [b for b in B if b["id"].startswith("G1")]
g1done = [b for b in g1 if b.get("status")=="done"]
roles = {}
for p in P: roles[p["role"]] = roles.get(p["role"],0)+1

def pill(txt, cls): return f'<span class="pill {cls}">{E(txt)}</span>'

# ---- primitive card ----
def card(p):
    sz = p.get("size_px",{})
    dim = f'{sz.get("w","?")}&times;{sz.get("h","?")}<span class="u">px</span>' if sz else "&mdash;"
    isgap = "TBD" in p.get("component","")
    comp = p.get("component","")
    comp_html = (f'<span class="gap-badge">GAP &middot; no component</span>' if isgap
                 else f'<code class="comp">{E(comp)}</code>')
    toks = "".join(f'<code class="tok">{E(t)}</code>' for t in p.get("tokens",[]))
    var = ""
    if p.get("variants"):
        vs = ", ".join(E(v.get("label","")) for v in p["variants"])
        var = f'<div class="row"><span class="k">variants</span><span class="v">{vs}</span></div>'
    prov = []
    if p.get("fromBlocks"): prov.append(f'{len(p["fromBlocks"])} block{"s" if len(p["fromBlocks"])!=1 else ""}')
    if p.get("seenOn"): prov.append(f'{len(p["seenOn"])} slide{"s" if len(p["seenOn"])!=1 else ""}')
    seen = ", ".join(E(s) for s in p.get("seenOn",[])[:4])
    return f'''
    <article class="card{' card--gap' if isgap else ''}">
      <header class="card-h">
        <code class="pid">{E(p["id"])}</code>
        <span class="role role--{E(p["role"])}">{E(p["role"])}</span>
      </header>
      <h3 class="card-name">{E(p["name"])}</h3>
      <div class="spec">
        <span class="dim">{dim}</span>
        <span class="anchor">&#9711; {E(p.get("anchor",""))}</span>
      </div>
      {var}
      <p class="recipe">{E(p.get("recipe",""))}</p>
      <div class="exitw"><span class="k">exit</span><span class="v">{E(p.get("exit_width",""))}</span></div>
      <div class="toks">{toks}</div>
      <footer class="card-f">
        {comp_html}
        <span class="prov" title="{E(seen)}">{' &middot; '.join(prov) if prov else 'new'}</span>
      </footer>
    </article>'''

# group primitives by producing batch
batch_of = {}
for b in B:
    for pid in b.get("primitivesProduced",[]): batch_of[pid]=b["id"]
groups = {}
for p in P:
    groups.setdefault(batch_of.get(p["id"],"—"), []).append(p)

def batch_title(bid):
    b = next((x for x in B if x["id"]==bid), None)
    return b["title"] if b else bid

cat_html = ""
for bid in sorted(groups):
    b = next((x for x in B if x["id"]==bid), None)
    cat_html += f'''
    <section class="famgroup">
      <div class="fam-h">
        <span class="fam-id">{E(bid)}</span>
        <h2>{E(batch_title(bid))}</h2>
        <span class="fam-count">{len(groups[bid])} primitives</span>
      </div>
      <div class="grid">{"".join(card(p) for p in groups[bid])}</div>
    </section>'''

# ---- queue board ----
STAGE_LABEL = {"G1-primitives":"G1 &middot; Primitives","G2-structures":"G2 &middot; Structure specs",
               "G3-skeleton-components":"G3 &middot; Skeleton components","G4-wire-enforce":"G4 &middot; Wire + enforce"}
stages = {}
for b in B: stages.setdefault(b["stage"], []).append(b)
board = ""
for st in ["G1-primitives","G2-structures","G3-skeleton-components","G4-wire-enforce"]:
    if st not in stages: continue
    chips = ""
    for b in stages[st]:
        s = b.get("status","pending")
        n = f' &middot; {b["primitiveCount"]}' if b.get("primitiveCount") else ""
        chips += f'<div class="qchip qchip--{s}" title="{E(b["title"])}"><b>{E(b["id"])}</b><span>{E(b["title"])}</span><i>{s}{n}</i></div>'
    board += f'<div class="qstage"><div class="qstage-h">{STAGE_LABEL.get(st,st)}</div><div class="qchips">{chips}</div></div>'

STYLE = """
<style>
:root{
  --paper:#F6F5F1; --surface:#FFFFFF; --surface-2:#FBFAF7;
  --ink:#0F1C39; --muted:#5A6478; --line:#E5E3DC;
  --navy:#1C3D73; --gold:#C8951A; --teal:#1B8F86; --warn:#A6492F;
  --shadow:0 1px 2px rgba(15,28,57,.06),0 8px 24px rgba(15,28,57,.05);
  --serif:Georgia,"Times New Roman",serif;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
@media (prefers-color-scheme:dark){:root{
  --paper:#0B1424; --surface:#111D34; --surface-2:#0E1830;
  --ink:#E9ECF3; --muted:#93A0B9; --line:#233149;
  --navy:#7DA2DE; --gold:#E4B54A; --teal:#4FC5BB; --warn:#DB8A57;
  --shadow:0 1px 2px rgba(0,0,0,.3),0 10px 30px rgba(0,0,0,.28);
}}
:root[data-theme="dark"]{
  --paper:#0B1424; --surface:#111D34; --surface-2:#0E1830;
  --ink:#E9ECF3; --muted:#93A0B9; --line:#233149;
  --navy:#7DA2DE; --gold:#E4B54A; --teal:#4FC5BB; --warn:#DB8A57;
  --shadow:0 1px 2px rgba(0,0,0,.3),0 10px 30px rgba(0,0,0,.28);
}
:root[data-theme="light"]{
  --paper:#F6F5F1; --surface:#FFFFFF; --surface-2:#FBFAF7;
  --ink:#0F1C39; --muted:#5A6478; --line:#E5E3DC;
  --navy:#1C3D73; --gold:#C8951A; --teal:#1B8F86; --warn:#A6492F;
  --shadow:0 1px 2px rgba(15,28,57,.06),0 8px 24px rgba(15,28,57,.05);
}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);
  line-height:1.5;-webkit-font-smoothing:antialiased}
.wrap{max-width:1120px;margin:0 auto;padding:clamp(20px,4vw,56px) clamp(16px,4vw,40px) 80px}
a{color:var(--navy)}
code{font-family:var(--mono)}
.eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;
  color:var(--teal);margin:0 0 10px}
h1{font-family:var(--serif);font-weight:600;font-size:clamp(28px,5vw,44px);line-height:1.08;
  margin:0 0 12px;letter-spacing:.005em;text-wrap:balance}
.lede{color:var(--muted);font-size:16px;max-width:64ch;margin:0 0 28px}
.lede b{color:var(--ink);font-weight:600}
/* stat strip */
.stats{display:flex;flex-wrap:wrap;gap:1px;background:var(--line);border:1px solid var(--line);
  border-radius:10px;overflow:hidden;margin:0 0 40px}
.stat{flex:1 1 130px;background:var(--surface);padding:16px 18px}
.stat .n{font-family:var(--serif);font-size:28px;font-weight:600;font-variant-numeric:tabular-nums;line-height:1}
.stat .n small{font-size:15px;color:var(--muted)}
.stat .l{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--muted);margin-top:6px}
.stat--gold .n{color:var(--gold)} .stat--teal .n{color:var(--teal)} .stat--warn .n{color:var(--warn)}
/* section heads */
.shead{display:flex;align-items:baseline;gap:12px;margin:44px 0 16px;
  border-bottom:1px solid var(--line);padding-bottom:8px}
.shead h2{font-family:var(--serif);font-weight:600;font-size:20px;margin:0}
.shead .hint{font-size:13px;color:var(--muted);margin-left:auto}
/* queue board */
.qstage{margin:0 0 18px}
.qstage-h{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--muted);margin:0 0 8px}
.qchips{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}
.qchip{border:1px solid var(--line);border-radius:8px;padding:9px 11px;background:var(--surface);
  display:flex;flex-direction:column;gap:2px;position:relative;overflow:hidden}
.qchip b{font-family:var(--mono);font-size:12px}
.qchip span{font-size:12.5px;color:var(--muted);line-height:1.3}
.qchip i{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;
  font-style:normal;color:var(--muted);margin-top:2px}
.qchip::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--line)}
.qchip--done::before{background:var(--gold)}
.qchip--done b{color:var(--ink)} .qchip--done i{color:var(--gold)}
.qchip--pending{opacity:.72}
.qchip--in-progress::before{background:var(--teal)}
/* schema table */
.schema{background:var(--surface);border:1px solid var(--line);border-radius:10px;overflow:hidden}
.schema table{border-collapse:collapse;width:100%;font-size:13.5px}
.schema td{padding:9px 14px;border-top:1px solid var(--line);vertical-align:top}
.schema tr:first-child td{border-top:0}
.schema td:first-child{font-family:var(--mono);color:var(--navy);white-space:nowrap;width:150px}
.schema td:last-child{color:var(--muted)}
/* catalog */
.famgroup{margin:0 0 34px}
.fam-h{display:flex;align-items:baseline;gap:12px;margin:0 0 14px}
.fam-h .fam-id{font-family:var(--mono);font-size:12px;color:var(--gold);
  border:1px solid var(--line);border-radius:5px;padding:2px 7px}
.fam-h h2{font-family:var(--serif);font-weight:600;font-size:19px;margin:0}
.fam-h .fam-count{font-size:12.5px;color:var(--muted);margin-left:auto;
  font-variant-numeric:tabular-nums}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:14px}
.card{background:var(--surface);border:1px solid var(--line);border-radius:11px;
  padding:15px 16px 13px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:9px}
.card--gap{border-color:color-mix(in srgb,var(--warn) 40%,var(--line))}
.card-h{display:flex;align-items:center;gap:8px;justify-content:space-between}
.pid{font-size:12px;color:var(--ink);font-weight:600}
.role{font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;
  padding:2px 7px;border-radius:20px;background:color-mix(in srgb,var(--navy) 12%,transparent);
  color:var(--navy)}
.card-name{font-family:var(--serif);font-weight:600;font-size:15.5px;margin:0;line-height:1.25}
.spec{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12.5px;color:var(--muted);align-items:center}
.dim{font-family:var(--mono);color:var(--ink);font-variant-numeric:tabular-nums}
.dim .u{color:var(--muted);font-size:10px;margin-left:1px}
.anchor{font-size:12px}
.row,.exitw{font-size:12.5px;display:flex;gap:8px}
.k{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;
  color:var(--muted);flex:0 0 auto;padding-top:2px}
.v{color:var(--muted)}
.recipe{font-size:13px;color:var(--ink);margin:2px 0 0;line-height:1.5}
.exitw .v{color:var(--muted)}
.toks{display:flex;flex-wrap:wrap;gap:5px}
.tok{font-size:10.5px;color:var(--teal);background:color-mix(in srgb,var(--teal) 10%,transparent);
  border-radius:4px;padding:2px 6px}
.card-f{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;
  margin-top:auto;padding-top:10px;border-top:1px solid var(--line)}
.comp{font-size:11px;color:var(--muted);word-break:break-all}
.gap-badge{font-family:var(--mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;
  color:var(--warn);border:1px solid color-mix(in srgb,var(--warn) 45%,var(--line));
  border-radius:5px;padding:2px 7px}
.prov{font-size:11.5px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}
.foot{margin-top:56px;padding-top:18px;border-top:1px solid var(--line);
  font-size:12.5px;color:var(--muted);font-family:var(--mono)}
.foot b{color:var(--ink)}
:focus-visible{outline:2px solid var(--teal);outline-offset:2px;border-radius:4px}
@media (prefers-reduced-motion:no-preference){.card{transition:border-color .15s}}
.card:hover{border-color:color-mix(in srgb,var(--navy) 35%,var(--line))}
</style>"""

HTML = f"""{STYLE}
<div class="wrap">
  <p class="eyebrow">Kumulus IM &middot; Design System &middot; Phase B</p>
  <h1>Primitive Catalog &amp; Componentisation Board</h1>
  <p class="lede">Turning <b>255 indexed blocks</b> into a working slide-building tool.
  Whole-slide observations are being factored into atomic, fixed-size, corner-anchored
  <b>primitives</b> &rarr; <b>structure skeletons</b> &rarr; code. This page is generated from
  <code>primitives.json</code> and <code>component-queue.json</code> &mdash; it refreshes each batch.</p>

  <div class="stats">
    <div class="stat"><div class="n">{len(P)}</div><div class="l">primitives catalogued</div></div>
    <div class="stat stat--gold"><div class="n">{len(g1done)}<small>/{len(g1)}</small></div><div class="l">G1 batches done</div></div>
    <div class="stat stat--teal"><div class="n">{len(done)}<small>/{len(B)}</small></div><div class="l">total batches</div></div>
    <div class="stat stat--warn"><div class="n">{len(gaps)}</div><div class="l">component gaps</div></div>
    <div class="stat"><div class="n">255</div><div class="l">source blocks</div></div>
  </div>

  <div class="shead"><h2>Build queue</h2><span class="hint">one batch &middot; commit &middot; review</span></div>
  {board}

  <div class="shead"><h2>Primitive record schema</h2><span class="hint">every brick carries all of these</span></div>
  <div class="schema"><table>
    <tr><td>id</td><td>PRIM-&lt;FAMILY&gt;-&lt;NAME&gt; &mdash; structural, never statement-named</td></tr>
    <tr><td>role</td><td>one of chrome / kpi / chart / table / panel / narrative / process / timeline / matrix / diagram / media / logo</td></tr>
    <tr><td>size_px (+variants)</td><td>fixed dimensions at 1280&times;720 &mdash; the anti-stretch guarantee</td></tr>
    <tr><td>anchor</td><td>which corner it docks to (never centred)</td></tr>
    <tr><td>exit_width</td><td>the leftover slot it leaves for a neighbouring brick</td></tr>
    <tr><td>grid</td><td>internal sub-cells; all text 9.5pt</td></tr>
    <tr><td>tokens</td><td>CSS tokens it must reference &mdash; no px font literals</td></tr>
    <tr><td>recipe</td><td>exact copy-recipe: px, gaps, fills, borders</td></tr>
    <tr><td>component</td><td>the real code file, or a GAP if none exists yet</td></tr>
    <tr><td>fromBlocks / seenOn</td><td>provenance back to block-library.json + real slides</td></tr>
  </table></div>

  <div class="shead"><h2>Catalogued primitives</h2><span class="hint">{len(P)} bricks &middot; {len(gaps)} gaps</span></div>
  {cat_html}

  <p class="foot">Generated from <b>primitives.json</b> ({len(P)}) + <b>component-queue.json</b> ({len(done)}/{len(B)} batches).
  Roles: {", ".join(f"{k} {v}" for k,v in sorted(roles.items(), key=lambda x:-x[1]))}.</p>
</div>"""

(HERE/"catalog.html").write_text(HTML, encoding="utf-8")
print(f"wrote catalog.html — {len(P)} primitives, {len(done)}/{len(B)} batches, {len(gaps)} gaps")
