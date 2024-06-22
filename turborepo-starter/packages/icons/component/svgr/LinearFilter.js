import * as React from "react";
const SvgLinearFilter = (props) => (
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
      d="m9.75 12.24-3-3.43a1 1 0 0 1-.25-.66V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2.15a1 1 0 0 1-.25.66l-3 3.43a1 1 0 0 0-.25.66v3.57a1 1 0 0 1-.4.8l-2 1.5A1 1 0 0 1 10 18v-5.1a1 1 0 0 0-.25-.66"
    />
  </svg>
);
export default SvgLinearFilter;
