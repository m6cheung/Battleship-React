import { createSelector } from 'reselect';

export const getBoardDomainSelector = state => state.boardState;

export const boardScoresSelector = createSelector(
  getBoardDomainSelector,
  board => board.get('scores')
);

export const gameBoardSelector = createSelector(
  getBoardDomainSelector,
  boardState => boardState.get('gameBoard')
);

export const hitsSelector = createSelector(
  getBoardDomainSelector,
  boardState => boardState.get('hits')
);

export default createSelector(
  boardScoresSelector,
  gameBoardSelector,
  hitsSelector,
  (scores, gameBoard, hits) => ({
    scores: scores.toJS(),
    gameBoard: gameBoard.toJS(),
    hits
  })
);
