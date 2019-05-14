import { combineReducers } from 'redux';
import boardReducer from './containers/Board/reducer';
import gameReducer from './containers/Game/reducer';

export default combineReducers({
  boardState: boardReducer,
  gameState: gameReducer,
})
