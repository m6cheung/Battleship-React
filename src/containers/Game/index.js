import React from 'react';
import { connect } from 'react-redux';
import gameSelector from './selectors';
import Start from '../../components/Start';
import Board from '../Board';
import {
  gameStart,
} from './actions';

import { createBoard } from './utils'; 

class Game extends React.Component {

  onStartGame = () => {
    const newBoard = createBoard();
    const { onGameStart } = this.props;
    onGameStart(newBoard);
  }

  render() {
    //from redux store
    const { gameStart } = this.props;

    return (
      <React.Fragment>
        {gameStart
          ? <Board />
          : <Start onStartGame={this.onStartGame} />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = gameSelector;
const mapDispatchToProps = dispatch => {
  return {
    onGameStart: (newBoard) => dispatch(gameStart(newBoard)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
