import React from 'react';
import '../styles/Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectBox } from './ProjectBox';
import { TableRow } from './TableRow';

export const Main = () => {
  return (
    <div className="mainContainer">
      <div className="searchContainer">
        <div className="searchBar">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="gray"
            className="itemIcon"
          />
          <input type="text" className="searchInput" placeholder="Search..." />
        </div>
      </div>

      <div className="sectionBlock">
        <h2>Recently Used</h2>
        <div className="sectionIcon">
          <FontAwesomeIcon icon={faUpRightFromSquare} color="gray" />
        </div>
        <div className="boxContainer">
          <ProjectBox name="App Project" date="20/02/2020" options />
          <ProjectBox name="Project: fitbit" date="28/02/2020" options />
          <ProjectBox
            name="Client Documents"
            date="04/03/2020"
            circles={3}
            options
          />
        </div>
      </div>

      <div className="sectionBlock">
        <h2>Recent Files</h2>
        <h4>View All</h4>
        <table>
          <tr className="header">
            <th>Name</th>
            <th>Members</th>
            <th>Last Modified</th>
          </tr>
          <TableRow
            color="fullYellow"
            name="Travel Landing Page"
            members={5}
            date="Mar 8, 2020"
          />
          <TableRow
            color="fullGreen"
            name="True Photos"
            members={12}
            date="Mar 8, 2020"
          />
          <TableRow
            color="fullRed"
            name="Dashboard Structure"
            members={10}
            date="Mar 9, 2020"
          />
          <TableRow
            color="fullYellow"
            name="Character Illustration"
            members={3}
            date="Mar 10, 2020"
          />
        </table>
      </div>

      <div className="sectionBlock">
        <h2>Shared with me</h2>
        <h4>View All</h4>
        <div className="boxContainer">
          <ProjectBox
            name="Landing Page"
            date="20/02/2020"
            columns={2}
            shadow={false}
            color={true}
          />
          <ProjectBox
            name="Illustration Pack"
            date="28/02/2020"
            shadow={false}
            columns={2}
            circles={3}
            color={true}
          />
          <ProjectBox
            name="CV Design"
            date="04/03/2020"
            columns={2}
            shadow={false}
            color={true}
          />
        </div>
      </div>
    </div>
  );
};
