import * as React from "react";
const SvgLinearWallet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.1 5H5.9A2.9 2.9 0 0 0 3 7.9v8.2A2.9 2.9 0 0 0 5.9 19h12.2a2.9 2.9 0 0 0 2.9-2.9V7.9A2.9 2.9 0 0 0 18.1 5"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.25 9.75H21v4.5h-3.75a2.25 2.25 0 0 1 0-4.5M7 9h3"
    />
  </svg>
);
export default SvgLinearWallet;
