import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/StorageBar.css';

interface Props {
  firstIcon: IconProp;
  secondIcon: IconProp;
  thirdIcon: IconProp;
}

export const UserBar = ({ firstIcon, secondIcon, thirdIcon }: Props) => {
  return (
    <div className="userBarContainer">
      <div>
        <FontAwesomeIcon icon={firstIcon} color="gray" className="itemIcon" />
        <FontAwesomeIcon icon={secondIcon} color="gray" className="itemIcon" />
      </div>
      <div className="userInfoContainer">
        <span>Name</span>
        <div className="userIconContainer">
          <FontAwesomeIcon icon={thirdIcon} color="gray" className="itemIcon" />
        </div>
      </div>
    </div>
  );
};
