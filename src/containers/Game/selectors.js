import { createSelector } from 'reselect';

export const getGameDomainSelector = state => state.gameState;

export const gameStartSelector = createSelector(
  getGameDomainSelector,
  gameState => gameState.get('gameStart')
);

export default createSelector(
  gameStartSelector,
  (gameStart) => ({
    gameStart
  })
);
