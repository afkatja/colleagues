import { GET_COLLEAGUES } from './actions';
const initialState = {
  colleagues: [],
};

export default (state = initialState, action) => {
  const { type, colleagues } = action;
  switch (type) {
    case GET_COLLEAGUES: {
      return {
        ...state,
        colleagues,
      };
    }
    default:
      return state;
  }
};
