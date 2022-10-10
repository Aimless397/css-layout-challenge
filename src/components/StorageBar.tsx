import {
  faCircleHalfStroke,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../styles/StorageBar.css';
import { Gradient } from './Gradient';
import { StorageItem } from './StorageItem';
import { UserBar } from './UserBar';
import { Button } from './Button';

export const StorageBar = () => {
  return (
    <div className="storage">
      <div className="userBar">
        <UserBar
          firstIcon={faCircleHalfStroke}
          secondIcon={faGear}
          thirdIcon={faUser}
        />
      </div>
      <div>
        <h2>Storage</h2>
        <div className="containerGraphic">
          <div className="circularOutline">
            <div className="circularGraphic">
              <span className="percent">85%</span>
              <span className="usedText">
                <br />
                Used
              </span>
            </div>
          </div>
          <span className="detailText">420.2 GB of 500 GB used</span>
        </div>

        <div className="storageItem">
          <StorageItem color="fullYellow" size={200} separator />
          <StorageItem color="fullBlue" size={200} separator />
          <StorageItem color="fullGreen" size={200} separator />
          <StorageItem color="fullGray" size={200} />
        </div>
      </div>
      <div className="upgradeSection">
        <div className="upgradeContainer">
          <Gradient height="4" width="7" />
          <span className="buyText">Buy more space now!</span>
          <span className="upgradeText">Upgrade to cloud premium</span>
          <Button text="Upgrade Account!" plusButton={false} />
        </div>
      </div>
    </div>
  );
};
