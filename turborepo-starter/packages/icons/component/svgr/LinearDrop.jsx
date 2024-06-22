import * as React from "react";
const SvgLinearDrop = (props) => (
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
      d="M17 14.73a5 5 0 0 1-10 0C7 12 12 4.27 12 4.27s5 7.73 5 10.46"
    />
  </svg>
);
export default SvgLinearDrop;
