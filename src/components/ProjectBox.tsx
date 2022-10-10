import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  shadow?: boolean;
  columns?: number;
  circles?: number;
  color?: boolean;
  options?: boolean;
  name: string;
  date: string;
}

export const ProjectBox = ({
  shadow = true,
  columns = 3,
  circles = 2,
  options = false,
  color = false,
  name,
  date,
}: Props) => {
  return (
    <div
      className={
        columns === 3 ? 'projectBox box-col-3' : 'projectBox box-col-2'
      }
    >
      {/* FIRST ROW */}
      <div className={shadow ? 'orangeBox shadowBox' : 'orangeBox'} />
      <div className="circleContainer">
        <span className={color ? 'circle blue' : 'circle'}></span>
        <span
          className={color ? 'circle circle2 red' : 'circle circle2'}
        ></span>
        {circles === 3 && (
          <span className={color ? 'circle circle3 yellow' : 'circle circle3'}>
            {circles === 3 && !color && '+3'}
          </span>
        )}
      </div>
      {options && (
        <div className="iconContainer">
          <FontAwesomeIcon icon={faEllipsisVertical} className="optionsIcon" />
        </div>
      )}

      {/* SECOND ROW */}
      <div className="nameProject">{name}</div>
      <div className="dateProject">Created: {date}</div>
    </div>
  );
};
