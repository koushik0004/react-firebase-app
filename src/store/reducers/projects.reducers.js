const initState = {
  projects: [
    {id: 1, title: 'Project title 1', content: 'bla bla bla'},
    {id: 2, title: 'Project title 2', content: 'bla bla bla'},
    {id: 3, title: 'Project title 3', content: 'bla bla bla'}
  ]
};

const projectsReducers = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('Project created ', action.payload);
      return state;
    case 'CREATE_PROJECT_ERR':
      console.log('erro in operation', action.payload);
      return state;
    default:
      return state;
  }
};

export default projectsReducers;