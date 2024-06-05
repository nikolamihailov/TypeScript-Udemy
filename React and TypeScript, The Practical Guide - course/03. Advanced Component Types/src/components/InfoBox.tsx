import type { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <div className="infobox infobox-hint">
        <p>{children}</p>
      </div>
    );
  }

  return (
    <div className="infobox infobox-warning warning--medium">
      <h2>Warning!</h2>
      <p>{children}</p>
    </div>
  );
}

export default InfoBox;
