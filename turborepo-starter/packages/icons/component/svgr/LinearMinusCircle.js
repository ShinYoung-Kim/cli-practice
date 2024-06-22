import * as React from "react";
const SvgLinearMinusCircle = (props) => (
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
      d="M8.5 12h7M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
  </svg>
);
export default SvgLinearMinusCircle;
