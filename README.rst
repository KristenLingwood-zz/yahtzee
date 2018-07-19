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

Each round, the player rolls five 6-sided dice. They may click on any number of dice
to "freeze" or "unfreeze" them (frozen dice are colored darker). They may re-roll the unfrozen dice
up to 2 times.

Each round, they must assign their dice to any unclaimed scoring category. Each category
scores differently.

After 13 rounds, the game is over, and the player's score is the total of each scoring category.

Scoring Categories
------------------

==================== ======================================= ==================
Category             Description                             Example Score
=================== ======================================= ==================
**Ones**            Score 1 for every 1                     ``1 1 2 3 4`` = 2
------------------- --------------------------------------- ------------------
**Twos**            Score 2 for every 2                     ``1 2 2 3 4`` = 4
------------------- --------------------------------------- ------------------
**Threes**          Score 3 for every 3                     ``1 2 3 3 3`` = 9
------------------- --------------------------------------- ------------------
**Fours**           Score 4 for every 4                     ``1 2 4 4 5`` = 8
------------------- --------------------------------------- ------------------
**Fives**           Score 5 for every 5                     ``1 2 5 5 5`` = 15
------------------- --------------------------------------- ------------------
**Sixes**           Score 6 for every 6                     ``1 2 3 6 6`` = 12
------------------- --------------------------------------- ------------------
**3 of Kind**       If 3+ of one value, score sum of all    ``1 2 3 3 3`` = 12
                    dice (otherwise, score 0)               
------------------- --------------------------------------- ------------------
**4 of Kind**       If 4+ of one value, score sum of all    ``1 2 2 2 2`` = 8
                    dice (else 0)
------------------- --------------------------------------- ------------------
**Full House**      If 3 of one value and 2 of another,     ``2 2 3 3 3`` = 25
                    score 25 (else 0)
------------------- --------------------------------------- ------------------
**Small Straight**  If 4+ values in a row, score 30         ``1 2 3 4 6`` = 30
                    (else 0)
------------------- --------------------------------------- ------------------
**Large Straight**  If 5 values in a row, score 40          ``1 2 3 4 5`` = 40
                    (else 0)
------------------- --------------------------------------- ------------------
**Yahtzee**         If all values match, score 50 (else 0)  ``2 2 2 2 2`` = 50
------------------- --------------------------------------- ------------------
**Chance**          Score sum of all dice                   ``1 2 3 4 6`` = 16
=================== ======================================= ==================

Example Round
-------------

The initial roll is: ``2 4 3 2 5``.

The player decides to try to get as many twos as possible, and clicks to
freeze both twos, then re-rolls. They now have: ``2 2 3 2 5``.

The player decides to try for a full house, and freezes all of their
twos and their three (hoping to roll another 3 to get a full house). They
re-roll the die showing five and get ``2 2 3 2 6``.

Sadly, they didn't get their full house. They could score this as:

- *Twos*: for 6 points

- *Threes* for 3 points

- *Sixes*: for 6 points

- *Three of Kind:* (twos) for 15 points

- *Chance*: for 15 points

Any other category they claimed on this round would score 0.

Tasks
=====

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

