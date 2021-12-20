const initialState = {
  contentLoading: false,
  modalLoading: false
};

export const loadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTENT_LOADING_TRUE_SET':
      return {
        ...state,
        contentLoading: true
      };
    case 'MODAL_LOADING_TRUE_SET':
      return {
        ...state,
        modalLoading: true
      };
    case 'CONTENT_LOADING_FALSE_SET':
      return {
        ...state,
        contentLoading: false
      };
    case 'MODAL_LOADING_FALSE_SET':
      return {
        ...state,
        modalLoading: false
      };
    default:
      return state;
  }
};
