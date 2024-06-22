import * as React from "react";
const SvgLinearMicrophone = (props) => (
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
      d="M15.5 5.5a3.5 3.5 0 1 0-7 0v5a3.5 3.5 0 1 0 7 0z"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 10.5a6.5 6.5 0 1 1-13 0M12 17v5M11 5h2M11 8h2"
    />
  </svg>
);
export default SvgLinearMicrophone;
