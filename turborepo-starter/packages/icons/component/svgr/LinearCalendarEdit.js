import * as React from "react";
const SvgLinearCalendarEdit = (props) => (
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
      d="M11 22H6.84a4 4 0 0 1-4-4V8.75a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3M7.84 3.25v3M16.84 3.25v3M2.84 9.75h18M14.15 19.72l5.08-5.08a.51.51 0 0 1 .71 0l1.42 1.42a.51.51 0 0 1 0 .71l-5.08 5.08a.5.5 0 0 1-.36.15H14.5a.5.5 0 0 1-.5-.5v-1.42a.5.5 0 0 1 .15-.36M18 15.86 20.14 18"
    />
    <path
      stroke="#000D26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.84 13.99V14M11.84 13.99V14M7.84 17.99V18"
    />
  </svg>
);
export default SvgLinearCalendarEdit;
