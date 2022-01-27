const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemeies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    // Enemy array
    this.enemeies.push(new Enemy('goblin', 'sword'));
    this.enemeies.push(new Enemy('orc', 'baseball bat'));
    this.enemeies.push(new Enemy('skeleton', 'axe'));
    // keep track of which Enemy object is currently fighting the player
    this.currentEnemy = this.enemies[0];
};

//promopt user for their name (will beocome player name)
inquirer 
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })

    //destructure name from the prompt object; arrow shorthand for all inquire callbacks to avoid creating a new lexical scope where (this.) no longer references (Game) object
    .then(({ name }) => {
        this.player = new Player(name);

        //test the object creation
        console.log(this.currentEnemey, this.player);
    });


module.exports = Game;