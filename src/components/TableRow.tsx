import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  color: string;
  name: string;
  members: number;
  date: string;
}

export const TableRow = ({ color, name, members, date }: Props) => {
  return (
    <tr className="row">
      <td>
        <div className="nameContainer">
          <div className={color && `${color} nameBox`} />
          {name}
        </div>
      </td>
      <td>{members} members</td>
      <td>
        <div className="iconContainer" id="iconContainer">
          <span>{date}</span>
          <FontAwesomeIcon icon={faEllipsisVertical} className="optionsIcon" />
        </div>
      </td>
    </tr>
  );
};
