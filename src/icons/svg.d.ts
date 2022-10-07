declare module '*.svg' {
  import React = require('react');
  import { SvgIconProps } from '@mui/material';
  export const ReactComponent: React.FC<SvgIconProps>;
  const src: string;
  export default src;
}
