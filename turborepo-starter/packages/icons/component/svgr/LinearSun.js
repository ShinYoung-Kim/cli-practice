import * as React from "react";
const SvgLinearSun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000D26"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 4V2M6.34 6.34 4.93 4.93M4 12H2M6.34 17.66l-1.41 1.41M12 20v2M17.66 17.66l1.41 1.41M20 12h2M17.66 6.34l1.41-1.41"
    />
  </svg>
);
export default SvgLinearSun;
