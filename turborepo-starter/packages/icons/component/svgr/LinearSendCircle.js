import * as React from "react";
const SvgLinearSendCircle = (props) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M15.54 8.46l-7.08 7.08"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.29 8.46h4.25v4.25"
    />
  </svg>
);
export default SvgLinearSendCircle;
