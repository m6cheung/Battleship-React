import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class Start extends React.Component {

  render() {
    const { classes, onStartGame } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image="../../BattleshipLogo.png"
            title="Battleship Game"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Battleship Game
            </Typography>
            <Typography component="p">
              Welcome to the Battleship game! Press Start Game to play a randomly generated Battleship board.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={onStartGame} className={classes.startButton} size="medium" color="primary">
            Start Game
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Start);
