import * as React from "react";
const SvgLinearTrash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 6.94.75 11.12a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2L18 6.94M13.5 12.56v4.5M10.5 12.56v4.5M5 6.94h14M14.5 6.94v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2"
    />
  </svg>
);
export default SvgLinearTrash;
