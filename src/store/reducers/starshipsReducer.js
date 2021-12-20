const initialState = {
  starship: null,
  starships: [],
  starshipPilots: []
};

export const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STARSHIPS_LIST_SET':
      return {
        ...state,
        starships: {
          ...action.payload,
          results: state.starships.results ? [...state.starships.results, ...action.payload.results] : [...action.payload.results]
        },
      };
    case 'STARSHIP_SET':
      return Object.assign({}, state, {
        starship: action.payload,
      });
    case 'STARSHIP_PILOTS_SET':
      return {
        ...state,
        starshipPilots: action.payload
      };
    case 'STARSHIP_REMOVE':
      return Object.assign({}, state, {
        starship: null,
      });
    case 'STARSHIP_PILOTS_REMOVE':
      return Object.assign({}, state, {
        starshipPilots: [],
      });
    default:
      return state;
  }
};
