import type { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <div className="infobox infobox-hint">
        <p>{children}</p>
      </div>
    );
  }

  return (
    <div className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning!</h2>
      <p>{children}</p>
    </div>
  );
}

export default InfoBox;
