import React from 'react';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  name: string;
}

export const SidebarItem = ({ icon, name }: Props) => {
  return (
    <div className="itemContainer">
      <FontAwesomeIcon icon={icon} color="white" className="itemIcon" />
      <span className="itemText">{name}</span>
    </div>
  );
};
