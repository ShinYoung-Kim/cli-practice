import * as React from "react";
const SvgLinearAsterisk = (props) => (
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
      d="m8.46 8.46 7.08 7.08M15.54 8.46l-7.08 7.08M17 12H7M12 17V7"
    />
  </svg>
);
export default SvgLinearAsterisk;
