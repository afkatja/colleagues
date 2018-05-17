import { GET_COLLEAGUES, POPOVER_OPEN, POPOVER_CLOSE } from './actions';

const initialState = {
  colleagues: [],
  popoverOpen: false,
  popoverContent: {},
};

export default (state = initialState, action) => {
  const {
    type, colleagues, popoverOpen, popoverContent,
  } = action;
  switch (type) {
    case GET_COLLEAGUES: {
      return {
        ...state,
        colleagues,
      };
    }
    case POPOVER_OPEN: {
      return {
        ...state,
        popoverOpen,
        popoverContent,
      };
    }
    case POPOVER_CLOSE: {
      return {
        ...state,
        popoverOpen,
        popoverContent: {},
      };
    }
    default:
      return state;
  }
};
