import Game from './game.js'

document.addEventListener('DOMContentLoaded', function(){

const newGame=document.querySelector('#start')
newGame.addEventListener('click', function(){
    const game = new Game();
    const score=document.querySelector('#score');
    //score.classList.remove('invisible')
    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    })
    game.startGame()

})

})