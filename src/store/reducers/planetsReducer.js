const initialState = {
  planet: null,
  planets: [],
  planetResidents: []
};

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLANETS_LIST_SET':
      return {
        ...state,
        planets: {
          ...action.payload,
          results: state.planets.results ? [...state.planets.results, ...action.payload.results] : [...action.payload.results]
        },
      };
    case 'PLANET_SET':
      return Object.assign({}, state, {
        planet: action.payload,
      });
    case 'PLANET_RESIDENTS_SET':
      return {
        ...state,
        planetResidents: action.payload
      };
    case 'PLANET_REMOVE':
      return Object.assign({}, state, {
        planet: null,
      });
    case 'PLANET_RESIDENTS_REMOVE':
      return Object.assign({}, state, {
        planetResidents: [],
      });
    default:
      return state;
  }
};
