import * as React from "react";
const SvgLinearTicketPercent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#linearTicketPercent_svg__a)"
    >
      <path strokeWidth={1.5} d="m14 9-4 6" />
      <path strokeWidth={2} d="M14 15zM10 9z" />
      <path
        strokeWidth={1.5}
        d="M3 10V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2h-2a2 2 0 0 0 0 4h2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2h2a2 2 0 1 0 0-4z"
      />
    </g>
    <defs>
      <clipPath id="linearTicketPercent_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinearTicketPercent;
