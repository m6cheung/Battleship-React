import { fromJS } from 'immutable';
import {
  SET_GAME_START,
} from './constants';

const initialState = fromJS({
  gameStart: false,
});

const gameReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_GAME_START:
      return state.set('gameStart', action.start);

    default:
      return state;
  }
}

export default gameReducer;
