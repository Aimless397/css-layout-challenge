import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Sidebar.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  name: string;
}

export const OptionItem = ({ icon, name }: Props) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} color="white" className="itemIcon" />
      <span className="optionsItemText">{name}</span>
    </>
  );
};
