import * as React from "react";
const SvgLinearClipboard = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.12 4.25H16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3h.9"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.5 2.75h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 0 0 0-3Z"
    />
  </svg>
);
export default SvgLinearClipboard;
