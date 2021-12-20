const initialState = {
  theme: 'light'
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'THEME_CHANGE':
      return Object.assign({}, state, {
        theme: action.payload,
      });
    default: return state;
  }
};

export { themeReducer };
