import React from "react";
import { FinancialTable } from "../data/FinancialTable.jsx";
import { NumberedCommentary } from "../data/NumberedCommentary.jsx";

/**
 * FinancialStatement — SlideStructure skeleton (STR-FIN-STATEMENT-COMMENTARY).
 * The Torino / BeMedico financial workhorse (P&L, balance sheet, net-debt
 * bridge, business-plan P&L): a FinancialTable docked left and a
 * NumberedCommentary rail docked right, tiling the content region edge to edge.
 *
 * Render it as the child of a <SlideFrame variant="content"> — the frame owns
 * the title, footer chrome and 0.53 cm margins; this skeleton owns the body
 * grid. Both slots are required (density contract): the table's row `marker`s
 * key to the commentary's numbers, so an empty commentary is an invalid slide.
 */
export function FinancialStatement({
  table,
  commentary = [],
  boxedCommentary = true,
  commentaryColumns = 1,
  /** Body split: table | commentary. */
  ratio = "1.5fr 1fr",
  className = "",
  style = {},
}) {
  if (process.env.NODE_ENV !== "production" && (!commentary || commentary.length === 0)) {
    // Density contract: this skeleton is the table + commentary pair.
    console.warn("FinancialStatement: `commentary` is empty — the numbered rail slot must be filled.");
  }
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: ratio,
        gap: "var(--col-gap)",
        height: "100%",
        alignItems: "start",
        ...style,
      }}
    >
      <FinancialTable {...table} />
      <NumberedCommentary items={commentary} boxed={boxedCommentary} columns={commentaryColumns} />
    </div>
  );
}
