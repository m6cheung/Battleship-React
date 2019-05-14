import { takeEvery, put } from 'redux-saga/effects';
import { GAME_START } from './constants'
import { setGameStart } from './actions';
import { updateBoard } from '../Board/actions';
import { fromJS } from 'immutable';

export function* startGame(action) {
  const { newBoard } = action;
  yield put(updateBoard(fromJS(newBoard)));
  yield put(setGameStart(true));
}

export function* startGameWatcher() {
  yield takeEvery(GAME_START, startGame);
}

export default startGameWatcher;
