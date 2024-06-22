import * as React from "react";
const SvgLinearCalendar = (props) => (
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
      d="M17 4.75H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.75a4 4 0 0 0-4-4M8 3.25v3M17 3.25v3M3 9.75h18"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 13.99V14M12 13.99V14M16 13.99V14M16 17.99V18M12 17.99V18M8 17.99V18"
    />
  </svg>
);
export default SvgLinearCalendar;
