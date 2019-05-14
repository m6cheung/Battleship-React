import { takeEvery, put } from 'redux-saga/effects';
import {
  UPDATE_STATS,
  GAME_OVER,
} from './constants';
import { updateScores, updateHits, restartGame } from './actions';
import { setGameStart } from '../Game/actions';

export function* updateStats(actions) {
  const { payload: { scores, newHits } } = actions;
  yield put(updateScores(scores));
  yield put(updateHits(newHits));
}

export function* updateStatsWatcher() {
  yield takeEvery(UPDATE_STATS, updateStats)
}

export function* gameOver() {
  yield put(restartGame());
  yield put(setGameStart(false));
}

export function* gameOverWatcher() {
  yield takeEvery(GAME_OVER, gameOver)
}

export default [
  updateStatsWatcher,
  gameOverWatcher
];
