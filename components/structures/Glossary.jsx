import React from "react";
import { GlossaryGrid } from "../data/GlossaryGrid.jsx";

/**
 * Glossary — SlideStructure STR-GLOSSARY. An abbreviations reference grid.
 * Render inside a <SlideFrame variant="content"> (plain serif title).
 */
export function Glossary({ terms = [], columns = 2, className = "", style = {} }) {
  return (
    <div className={className} style={{ height: "100%", ...style }}>
      <GlossaryGrid terms={terms} columns={columns} />
    </div>
  );
}
