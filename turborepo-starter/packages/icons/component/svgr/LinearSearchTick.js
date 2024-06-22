import * as React from "react";
const SvgLinearSearchTick = (props) => (
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
      d="M11.5 18.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14M16.5 16.5l3 3"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.5 12.18 1.88 1.88 4.12-4.12"
    />
  </svg>
);
export default SvgLinearSearchTick;
