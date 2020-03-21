import React from 'react';

const files = require.context('!svg-sprite-loader!../img/icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className, width, height }) => (

<svg className={`dib v-mid ${type}`} width={width} height={height}>
  <use xlinkHref={`#${type}`}></use>
</svg>
);

export default Icon;