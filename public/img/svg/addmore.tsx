import * as React from 'react';
const SvgComponent = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={2000}
    height={2000}
    {...props}
  >
    <path
      fill='none'
      stroke='#000'
      strokeMiterlimit={10}
      strokeWidth={123.448}
      d='M1000 1613.234V386.766M1880.5 936.5v988h-1752v-988M1613.234 1000.001H386.765'
    />
  </svg>
);
export default SvgComponent;
