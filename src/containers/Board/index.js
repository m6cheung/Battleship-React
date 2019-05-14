import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import boardSelector from './selectors';
import {
  updateBoard,
  updateStats,
  gameOver
} from './actions';

import BoardTile from '../../components/BoardTile';

class Board extends React.Component {

  updateGameScore = (val) => {
    const {
      hits,
      scores,
      onUpdateStats
    } = this.props;

    const newHits = hits - 1;
    scores[val] -= 1;

    const newStats = {
      newHits,
      scores
    }

    onUpdateStats(newStats);
  }

  renderGameOver() {
    const { onGameOver } = this.props;
    return (
      <div style={{ textAlign: 'center', margin: '10% auto' }}>
        <h2>Game Over - You Win!</h2>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onGameOver}
        >
          RESTART GAME
        </Button>
      </div>
    )
  }

  handleClick = (row, col, val) => {
    const { gameBoard, onUpdateBoard } = this.props;
    if (isNaN(val)) {
      gameBoard[row][col] = '2';
      this.updateGameScore(val);
    } else if (val === '0') {
      gameBoard[row][col] = '1';
    }

    onUpdateBoard(gameBoard);
  }
  
  renderGrid() {
    const { gameBoard } = this.props;

    return (
      <React.Fragment>
        {gameBoard.map((row, i) => {
          return (
            <tr key={`row-${i}`}>
              {row.map((col, j) => {
                  return (<BoardTile
                    row={i}
                    key={`col-${j}`}
                    col={j}
                    val={gameBoard[i][j]}
                    handleClick={this.handleClick}
                  />)
                })
              }
            </tr>
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    const { hits } = this.props;
    return (
      <React.Fragment>
      {hits > 0
        ? <table style={{ borderSpacing: 0, margin: '7% auto' }}>
            <tbody>
              { this.renderGrid() }
            </tbody>
          </table>
        : this.renderGameOver()
      }
      </React.Fragment>
    )
  }
}

const mapStateToProps = boardSelector;
const mapDispatchToProps = dispatch => {
  return {
    onUpdateBoard: (newBoard) => dispatch(updateBoard(newBoard)),
    onUpdateStats: (payload) => dispatch(updateStats(payload)),
    onGameOver: () => dispatch(gameOver())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
