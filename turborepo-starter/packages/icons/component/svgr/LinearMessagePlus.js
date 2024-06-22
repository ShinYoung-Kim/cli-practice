import * as React from "react";
const SvgLinearMessagePlus = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.8 10.5v3.71a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.3l-2.84 2.84A.5.5 0 0 1 6.2 20v-1.93a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V8.35a3 3 0 0 1 3-3h7.6"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.8 3.5v4M20.8 5.5h-4"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11.2v.01M11 11.2v.01M14 11.2v.01"
    />
  </svg>
);
export default SvgLinearMessagePlus;
