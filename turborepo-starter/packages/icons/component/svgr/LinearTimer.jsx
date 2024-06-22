import * as React from "react";
const SvgLinearTimer = (props) => (
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
      d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16M12 11.22V7.67M10 3h4"
    />
  </svg>
);
export default SvgLinearTimer;
