import * as React from "react";
const SvgLinearRefresh = (props) => (
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
      d="M3.85 15.48a8.71 8.71 0 0 1 14-9.92"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.56 3.51v2.74h-2.74M20.15 8.52a8.71 8.71 0 0 1-14 9.92"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.44 20.49v-2.74h2.74"
    />
  </svg>
);
export default SvgLinearRefresh;
