import * as React from "react";
const SvgLinearSheildTick = (props) => (
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
      d="m9 11.62 2.19 2.19L16 9"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 20.52-1 .57-1-.57A14 14 0 0 1 4 8.39a2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L19 6.66a2 2 0 0 1 1 1.73 14 14 0 0 1-7 12.13"
    />
  </svg>
);
export default SvgLinearSheildTick;
