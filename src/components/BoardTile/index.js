import React from 'react';

const boardTile = ({ val, row, col, handleClick }) => {
  const styles = {
    boxStyle: {
      width: '3em',
      height: '3em',
      border: '2px solid black'
    },
    clickedMiss: {
      backgroundColor: 'gray'
    },
    clickedHit: {
      backgroundColor: 'red'
    },
    sunk: {
      backgroundColor: 'black'
    }
  }

  const renderTile = () => {
    if (val === '1') {
      return (<td 
        style={{ ...styles.boxStyle, ...styles.clickedMiss }}
      >
      </td>)
    } else if (val === '2') {
      return (<td 
        style={{ ...styles.boxStyle, ...styles.clickedHit }}
      >
      </td>)
    } else {
      return (<td 
        style={styles.boxStyle}
        onClick={() => handleClick(row, col, val)}
      >
      </td>)
    }
  }

  return (
    renderTile()
  )
}

export default boardTile
