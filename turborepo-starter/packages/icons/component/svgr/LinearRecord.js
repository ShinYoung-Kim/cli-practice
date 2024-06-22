import * as React from "react";
const SvgLinearRecord = (props) => (
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
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
    />
  </svg>
);
export default SvgLinearRecord;
