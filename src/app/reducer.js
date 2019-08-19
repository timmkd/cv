import jobs from './jobs.json';

const initialState = {
  jobs,
  keywords: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return {
        ...state,
        jobs: action.jobs,
      };
    case 'SET_KEYWORDS':
      return {
        ...state,
        keywords: action.keywords,
    };
    default:
      return state;
  }
};
