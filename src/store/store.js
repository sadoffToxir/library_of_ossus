import {
  applyMiddleware, combineReducers, compose, createStore
} from 'redux';
import { planetsReducer } from './reducers/planetsReducer';
import { charactersReducer } from './reducers/charactersReducer';
import { starshipsReducer } from './reducers/starshipsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { filmsReducer } from './reducers/filmsReducer';
import { vehiclesReducer } from './reducers/vehiclesReducer';
import { loadersReducer } from './reducers/loadersReducer';
import { themeReducer } from './reducers/themeReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  theme: themeReducer,
  loaders: loadersReducer,
  films: filmsReducer,
  vehicles: vehiclesReducer,
  planets: planetsReducer,
  characters: charactersReducer,
  starships: starshipsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
