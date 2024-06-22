import * as React from "react";
const SvgLinearReceiveCircle = (props) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.46 15.54l7.08-7.08"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.71 15.54H8.46v-4.25"
    />
  </svg>
);
export default SvgLinearReceiveCircle;
