import * as React from "react";
const SvgLinearMoon = (props) => (
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
      d="M19.5 14.62A7.78 7.78 0 1 1 9.38 4.5 7.78 7.78 0 0 0 19.5 14.62"
    />
  </svg>
);
export default SvgLinearMoon;
