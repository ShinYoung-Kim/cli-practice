import * as React from "react";
const SvgLinearActivity = (props) => (
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
      d="m5 15 3.09-4a2 2 0 0 1 3.16 0l1.5 2a2 2 0 0 0 3.16 0L19 9"
    />
  </svg>
);
export default SvgLinearActivity;
