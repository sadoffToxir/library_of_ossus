const initialState = {
  character: null,
  characters: [],
  characterFilms: [],
  characterVehicles: [],
  characterStarships: []
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHARACTERS_LIST_SET':
      return {
        ...state,
        characters: {
          ...action.payload,
          results: state.characters.results ? [...state.characters.results, ...action.payload.results] : [...action.payload.results]
        }
      };
    case 'CHARACTER_SET':
      return Object.assign({}, state, {
        character: action.payload
      });
    case 'CHARACTER_VEHICLES_SET':
      return {
        ...state,
        characterVehicles: action.payload
      };
    case 'CHARACTER_STARSHIPS_SET':
      return {
        ...state,
        characterStarships: action.payload
      };
    case 'CHARACTER_REMOVE':
      return Object.assign({}, state, {
        character: null,
      });
    case 'CHARACTER_VEHICLES_REMOVE':
      return Object.assign({}, state, {
        characterVehicles: [],
      });
    case 'CHARACTER_STARSHIPS_REMOVE':
      return Object.assign({}, state, {
        characterStarships: [],
      });
    default:
      return state;
  }
};
