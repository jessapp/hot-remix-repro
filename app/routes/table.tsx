import React from "react";
import Handsontable from "handsontable";

export default function Index() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const hot = new Handsontable(ref.current, {});
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div ref={ref} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}
