Game.prototype.PAIRS = {
  rock:     { beats: 'scissors' },
  paper:    { beats: 'rock' },
  scissors: { beats: 'paper' }
};

function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
  if(this.samePick()) { return null; }
  else if(this.player1.picks === this.player2.picks) {
    return this.player1;
  } else {
    return this.player2;
  }
};

console.log(PAIRS.rock.beats)
if (pick === PAIRS.paper.beats) {
  console.log('draw');
};

Game.prototype.samePick = function() {
  return this.player1.pick === this.player2.pick;
};