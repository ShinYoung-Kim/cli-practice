import * as React from "react";
const SvgLinearBasketTick = (props) => (
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
      d="M9.33 14.93 11 16.6l3.67-3.66"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.53 9.55 5.93 18A2.1 2.1 0 0 0 8 19.71h8A2.1 2.1 0 0 0 18.07 18l1.4-8.4a2.1 2.1 0 0 0-2.07-2.5H6.6a2.1 2.1 0 0 0-2.07 2.45M4.69 10.25h14.62M7.78 7.1l1.88-2.81M16.22 7.1l-1.88-2.81"
    />
  </svg>
);
export default SvgLinearBasketTick;
