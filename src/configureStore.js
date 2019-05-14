import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import boardSaga from './containers/Board/sagas';
import gameSaga from './containers/Game/sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

export default (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware), devTools())
  )
  store.runSaga = sagaMiddleware.run;

  //run sagas
  
  boardSaga.map(store.runSaga);
  store.runSaga(gameSaga);
  return store;
}
