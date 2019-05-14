import { fromJS } from 'immutable';
import {
  UPDATE_GAME_BOARD,
  UPDATE_HITS,
  UPDATE_SCORES,
  RESTART_GAME,
} from './constants';

const initialState = fromJS({
  scores: {
    'B': 4,
    'C': 3,
    'S': 3,
    'D': 2,
    'X': 5,
  },
  hits: 17,
  gameBoard: [],
});

const boardReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_GAME_BOARD:
      return state.set('gameBoard', fromJS(action.board));

    case UPDATE_SCORES:
      return state.set('scores', fromJS(action.newScores));

    case UPDATE_HITS:
      return state.set('hits', fromJS(action.newHits));

    case RESTART_GAME:
      return initialState

    default:
      return state;
  }
}

export default boardReducer;
