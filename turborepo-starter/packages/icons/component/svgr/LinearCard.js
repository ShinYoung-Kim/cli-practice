import * as React from "react";
const SvgLinearCard = (props) => (
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
      d="M17.89 5H6.11A3.11 3.11 0 0 0 3 8.11v7.78A3.11 3.11 0 0 0 6.11 19h11.78A3.11 3.11 0 0 0 21 15.89V8.11A3.11 3.11 0 0 0 17.89 5"
    />
    <path
      stroke="#000D26"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 10h18"
    />
  </svg>
);
export default SvgLinearCard;
