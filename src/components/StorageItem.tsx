import React from 'react';

interface Props {
  color: string;
  size: number;
  separator?: boolean;
}

export const StorageItem = ({ color, size, separator }: Props) => {
  return (
    <div
      className={
        separator ? 'separator storageItemContainer' : 'storageItemContainer'
      }
    >
      <div className="nameContainer">
        <div className={color && `${color} nameBox`} />
        <div className="descriptionContainer">
          <span className="nameText">Documents</span>
          <span className="fileText">720 files</span>
        </div>
      </div>
      <div className="sizeContainer">
        <div className="size">{size} GB</div>
      </div>
    </div>
  );
};
