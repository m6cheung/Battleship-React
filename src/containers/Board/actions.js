import {
  UPDATE_GAME_BOARD,
  UPDATE_HITS,
  UPDATE_SCORES,
  UPDATE_STATS,

  GAME_OVER,
  RESTART_GAME
} from './constants';

export const updateBoard = (board) => {
  return {
    type: UPDATE_GAME_BOARD,
    board
  }
}

export const updateHits = (newHits) => {
  return {
    type: UPDATE_HITS,
    newHits
  }
}

export const updateScores = (newScores) => {
  return {
    type: UPDATE_SCORES,
    newScores
  }
}

export const updateStats = (payload) => {
  return {
    type: UPDATE_STATS,
    payload
  }
}

export const gameOver = () => {
  return {
    type: GAME_OVER
  }
}

export const restartGame = () => {
  return {
    type: RESTART_GAME
  }
}
