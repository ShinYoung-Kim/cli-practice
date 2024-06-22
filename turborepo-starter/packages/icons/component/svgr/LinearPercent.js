import * as React from "react";
const SvgLinearPercent = (props) => (
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
      d="M15.33 7 8.67 17"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M15.3 17v.001M8.6 7v.001"
    />
  </svg>
);
export default SvgLinearPercent;
