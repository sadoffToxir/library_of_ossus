import {
  applyMiddleware, combineReducers, compose, createStore
} from 'redux';
import thunk from 'redux-thunk';
import { planetsReducer } from './reducers/planetsReducer';
import { charactersReducer } from './reducers/charactersReducer';
import { starshipsReducer } from './reducers/starshipsReducer';

const rootReducers = combineReducers({
  planets: planetsReducer,
  characters: charactersReducer,
  starships: starshipsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
