import * as React from "react";
const SvgLinearLocationTick = (props) => (
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
      d="M14.49 18.79a3 3 0 0 1-5 0c-4-5.87-3.69-8.71-3.69-8.71a6.18 6.18 0 1 1 12.36 0s.37 2.84-3.67 8.71"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.87 11.11 1.96 1.96 4.3-4.3"
    />
  </svg>
);
export default SvgLinearLocationTick;
