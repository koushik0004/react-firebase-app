import React from 'react';
import ProjectSummeryComponent from './project-summery.component';

const ProjectListComponent = ({projects}) => {
  // const iterateObj = [
  //   {id: 1, title: 'Project title 1', content: 'bla bla bla'},
  //   {id: 2, title: 'Project title 2', content: 'bla bla bla'},
  //   {id: 3, title: 'Project title 3', content: 'bla bla bla'}
  // ];
  return (
    <div className="project-list section">
      {projects && projects.map((item) => (
        <ProjectSummeryComponent item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProjectListComponent