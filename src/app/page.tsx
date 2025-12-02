"use client";

import { useEffect } from "react";
import { person } from "@/resources";

export default function Home() {
  useEffect(() => {
    // Disable page scrolling while homepage overlay is present
    const prevOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      // restore previous overflow values when leaving the homepage
      document.documentElement.style.overflow = prevOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        textAlign: "center",
        zIndex: 50,
        // Let clicks pass through this overlay so the rest of the app (header/footer)
        // beneath the overlay remains interactive. Heading/subtitle will still be
        // selectable/clickable if needed because they're explicitly set to pointerEvents: 'auto'.
        pointerEvents: "none"
      }}
    >
      {/* top decorative line removed */}
      <h1
        style={{
          padding: "0.875rem 0.125rem",
          zIndex: 60,
          fontSize: "clamp(3rem, 16vw, 9.5rem)",
          color: "transparent",
          transition: "all 1s",
          background: "white",
          cursor: "default",
          whiteSpace: "nowrap",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontWeight: 800,
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(255,255,255,0.25)",
          // allow pointer interaction on the headline itself (select/copy) while
          // overlay lets clicks pass through to underlying page
          pointerEvents: "auto"
        }}
      >
        eXocriador
      </h1>

      {/* bottom decorative line removed */}
      <div
        style={{
          marginTop: "3.5rem",
          marginBottom: "3.5rem",
          textAlign: "center",
          pointerEvents: "auto"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)",
            color: "rgba(212,212,216,0.95)",
            margin: 0
          }}
        >
          Forging ideas, crafting solutions
        </h2>
      </div>
    </div>
  );
}
