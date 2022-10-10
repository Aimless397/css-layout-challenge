import React from 'react';
import '../styles/Sidebar.css';
import { Gradient } from './Gradient';
import { SidebarItem } from './SidebarItem';
import { OptionItem } from './OptionItem';
import { Button } from './Button';
import {
  faHouseChimney,
  faFolderClosed,
  faClockRotateLeft,
  faFileExport,
  faFileImport,
  faTrashCan,
  faFolderPlus,
  faFileCirclePlus,
  faFolderOpen,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="gradientContainer">
        <Gradient height="1.8" width="6" />
      </div>

      <div className="sidebarItemContainer">
        <SidebarItem icon={faHouseChimney} name="Home" />
        <SidebarItem icon={faFolderClosed} name="My Files" />
        <SidebarItem icon={faClockRotateLeft} name="Recent Files" />
        <SidebarItem icon={faFileExport} name="Shared Files" />
        <SidebarItem icon={faFileImport} name="File Request" />
        <SidebarItem icon={faTrashCan} name="Trash" />
      </div>

      <div className="optionsContainer">
        <div className="optionsGroup">
          <OptionItem icon={faFileCirclePlus} name="Upload Files" />
          <OptionItem icon={faFolderPlus} name="Upload Folder" />
          <OptionItem icon={faFolderOpen} name="New Folder" />
          <OptionItem icon={faCommentDots} name="More" />
        </div>
        <Button text="Create New" plusButton={true} />
      </div>
    </div>
  );
};
