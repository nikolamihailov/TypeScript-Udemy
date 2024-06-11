import type { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

function InfoBox({ mode, children, severity }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <div className="infobox infobox-hint">
        <p>{children}</p>
      </div>
    );
  }

  return (
    <div className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning!</h2>
      <p>{children}</p>
    </div>
  );
}

export default InfoBox;
