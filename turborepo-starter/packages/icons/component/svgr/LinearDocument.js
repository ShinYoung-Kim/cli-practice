import * as React from "react";
const SvgLinearDocument = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18 10.41V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.59a1 1 0 0 1 .7.29l5.42 5.42a1 1 0 0 1 .29.7Z"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.48V9a1 1 0 0 0 1 1h4.52a.2.2 0 0 0 .14-.34l-5.32-5.32a.2.2 0 0 0-.34.14"
    />
  </svg>
);
export default SvgLinearDocument;
