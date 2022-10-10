import React from 'react';

interface Props {
  height: string;
  width: string;
}

export const Gradient = ({ height, width }: Props) => {
  return (
    <div
      className="rectangleGradient"
      style={{ height: `${height}em`, width: `${width}em` }}
    ></div>
  );
};
