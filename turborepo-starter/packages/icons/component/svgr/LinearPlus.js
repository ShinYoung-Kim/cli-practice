import * as React from "react";
const SvgLinearPlus = (props) => (
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
      d="M7 12h10M12 7v10"
    />
  </svg>
);
export default SvgLinearPlus;
