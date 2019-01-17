import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectSummeryComponent = (props) => {
  const {title, authorFirstName, authorLastName, createdAt, id} = props.item;
  return (
    <div className="card z-depth-0 project-summery">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          <Link to={`/project/${id}`}>{title}</Link>
        </span>
        <p>{`Posted by ${authorFirstName.charAt(0).toUpperCase()}${authorFirstName.slice(1)} 
          ${authorLastName.charAt(0).toUpperCase()}${authorLastName.slice(1)}`}</p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
};

export default React.memo(ProjectSummeryComponent);