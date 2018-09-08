import React, { Component } from 'react';
import Dice from './Dice';
import Scoring from './Scoring';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  state = {
    dice: Array.from({ length: NUM_DICE }),
    locked: Array(NUM_DICE).fill(false),
    rollsLeft: NUM_ROLLS,
    scores: {
      ones: undefined,
      twos: undefined,
      threes: undefined,
      fours: undefined,
      fives: undefined,
      sixes: undefined,
      threeOfKind: undefined,
      fourOfKind: undefined,
      fullHouse: undefined,
      smallStraight: undefined,
      largeStraight: undefined,
      yahtzee: undefined,
      chance: undefined
    }
  };

  componentDidMount() {
    this.roll();
  }

  roll = () => {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map(
        (d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6))
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1
    }));
  };

  toggleLocked = idx => {
    // toggle whether idx is in locked or not
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  };

  doScore = (rulename, ruleFn) => {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.roll();
  };

  render() {
    return (
      <section>
        <Dice
          dice={this.state.dice}
          locked={this.state.locked}
          handleClick={this.toggleLocked}
        />
        <button
          className="Game-reroll"
          disabled={this.state.rollsLeft < 1}
          onClick={this.roll}
        >
          {this.state.rollsLeft} Rerolls Left
        </button>
        <Scoring doScore={this.doScore} scores={this.state.scores} />
      </section>
    );
  }
}

export default Game;
