import * as React from "react";
const SvgLinearCrossCircle = (props) => (
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
      d="m9.5 9.5 5 5M14.5 9.5l-5 5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
  </svg>
);
export default SvgLinearCrossCircle;
