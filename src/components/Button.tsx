import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  text: string;
  plusButton: boolean;
}

export const Button = ({ text, plusButton }: Props) => {
  return (
    <div className="buttonContainer">
      <span>{text}</span>
      {plusButton && (
        <div className="linkItem">
          <a href="#">
            <FontAwesomeIcon icon={faPlus} color="white" className="itemIcon" />
          </a>
        </div>
      )}
    </div>
  );
};
