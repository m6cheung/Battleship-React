import {
  SET_GAME_START,
  GAME_START
} from './constants';


export const setGameStart = (start) => {
  return {
    type: SET_GAME_START,
    start
  }
};

export const gameStart = (newBoard) => {
  return {
    type: GAME_START,
    newBoard
  }
};
