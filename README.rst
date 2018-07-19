============
Yahtzee Game
============

Setup
=====

1) Clone this repository.

2) Install required npm libraries::

     $ npm install

3) Start WebPack::

     $ npm start

The Game
========

Yahtzee is a chance-and-strategy dice rolling game. A game is played over 13 rounds.

Each round, the player rolls five 6-sided dice. They make click on any number of dice
to "freeze" or "unfreeze" them (frozen dice are colored darker). They may re-roll the unfrozen dice
up to 2 times.

Each round, they must assign their dice to any unclaimed scoring category. Each category
scores differently.

After 13 rounds, the game is over, and the player's score is the total of each scoring category.

Scoring Categories
------------------

Ones 
  The player scores 1 for every 1 in their dice

Twos
  The player scores 2 for every 2 in their dice

Threes
  The player scores 3 for every 3 in their dice

Fours
  The player scores 4 for every 4 in their dice

Fives
  The player scores 5 for every 5 in their dice

Sixes
  The player scores 6 for every 6 in their dice

Three of a Kind
  If there are three of the same values in the dice,
  the player scores the sum of all dice values. If there
  are not 3 of a kind, the player scores 0.

Four of a Kind
  Same as Three of a Kind, but Four.

Full House
  If the player has a full house (3 of one value, 2
  of another), they score 25.

Small Straight
  If the player has 4 values in a row, they score 30.

Large Straight
  If the player has 5 values in a row, they score 40.

Yahtzee
  If the player has all dice with the same value, they
  score 50.

Chance
  The player scores the sum of all dice.
  

tasks:

- read code and understand

- it would be nice if the game started with the dice already rolled (rather than having to click the button). implement this.

- show total score for each section & overall score

- replace dice numbers with images of dice

- add a "play again feature"

- add a new scoring category for "two pair" (scoring 15)

other ideas:

- implement more complex scoring: you can find more
  complex rules to try out at https://en.wikipedia.org/wiki/Yahtzee#Yahtzee_bonuses_and_Joker_rules

