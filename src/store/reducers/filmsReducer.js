const initialState = {
  film: null,
  films: [],
  filmCharacters: [],
  filmPlanets: [],
  filmStarships: [],
  filmVehicles: [],
  filmSpecies: []
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILMS_LIST_SET':
      return {
        ...state,
        films: action.payload
      };
    case 'FILM_CHARACTERS_LIST_SET':
      return {
        ...state,
        filmCharacters: action.payload
      };
    case 'FILM_PLANETS_LIST_SET':
      return {
        ...state,
        filmPlanets: action.payload
      };
    case 'FILM_STARSHIPS_LIST_SET':
      return {
        ...state,
        filmStarships: action.payload
      };
    case 'FILM_VEHICLES_LIST_SET':
      return {
        ...state,
        filmVehicles: action.payload
      };
    case 'FILM_SPECIES_LIST_SET':
      return {
        ...state,
        filmSpecies: action.payload
      };
    case 'FILM_SET':
      return Object.assign({}, state, {
        film: action.payload
      });
    case 'FILMS_LIST_REMOVE':
      return {
        ...state,
        films: []
      };
    case 'FILM_CHARACTERS_LIST_REMOVE':
      return {
        ...state,
        filmCharacters: []
      };
    case 'FILM_PLANETS_LIST_REMOVE':
      return {
        ...state,
        filmPlanets: []
      };
    case 'FILM_STARSHIPS_LIST_REMOVE':
      return {
        ...state,
        filmStarships: []
      };
    case 'FILM_VEHICLES_LIST_REMOVE':
      return {
        ...state,
        filmVehicles: []
      };
    case 'FILM_SPECIES_LIST_REMOVE':
      return {
        ...state,
        filmSpecies: []
      };
    case 'FILM_REMOVE':
      return Object.assign({}, state, {
        film: null,
      });
    default:
      return state;
  }
};
