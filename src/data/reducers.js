import {
  GET_COLLEAGUES,
  POPOVER_OPEN,
  POPOVER_CLOSE,
  FORM_OPEN,
} from './actions';

const initialState = {
  colleagues: [],
  popoverOpen: false,
  popoverContent: {},
  popoverType: '',
};

export default (state = initialState, action) => {
  const {
    type, colleagues, popoverOpen, popoverContent, popoverType,
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
        popoverType,
      };
    }
    case POPOVER_CLOSE: {
      return {
        ...state,
        popoverOpen,
        popoverContent: {},
        popoverType: '',
      };
    }
    case FORM_OPEN: {
      return {
        ...state,
        popoverOpen,
        popoverType,
      };
    }
    default:
      return state;
  }
};
