import * as React from "react";
const SvgLinearPercentCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#linearPercentCircle_svg__a)"
    >
      <path
        strokeWidth={1.5}
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M14.33 8.5l-4.66 7"
      />
      <path strokeWidth={2} d="M14.3 15.5zM9.7 8.3v.001" />
    </g>
    <defs>
      <clipPath id="linearPercentCircle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinearPercentCircle;
