document.addEventListener('DOMContentLoaded', function(){
class Furry{
    constructor(){
        this.x=0;
        this.y=0;
        this.direction='right';
    }
}
class Coin{
    constructor(){
        this.x=Math.floor(Math.random() *10);
        this.y=Math.floor(Math.random() *10);
    }
}
class Game{
    constructor(){
        this.board=document.querySelectorAll('section#board div');
        console.log ('board:', this.board);
        this.furry=new Furry();
        this.coin= new Coin ();
        this.score=0;
        this.index=function(x,y){
            return  x + (y * 10)
        }
    }

    showFurry(){
       if (this.furry.x>0){
           this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        console.log (this.board)
       }else{
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
       } 
        
       
         
        
    }
    showCoin(){
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        console.log(this.board)
    }
    startGame(){
        const self=this;
        this.idSetInterval=setInterval(function(){
           
           self.moveFurry()
        }, 1000)
    }
    moveFurry(){
        if (this.furry.direction==='right'){
            this.furry.x=this.furry.x+1;
            console.log ('x', this.furry.x)
        }else if (this.furry.direction==='left'){
            this.furry.x=this.furry.x-1;
        }else if (this.furry.direction==='up'){
            this.furry.y=this.furry.y-1;
        }else{
            this.furry.y=this.furry.y+1;
        }
        this.showFurry()
    }
    hideVisibleFurry(){
        const visFurry=document.querySelector('.furry');
        visFurry.classList.remove('furry')

    }


}
const game= new Game()
game.showFurry()
game.showCoin()
game.startGame()


})