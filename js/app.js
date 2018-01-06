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
       
        this.furry=new Furry();
        this.coin= new Coin ();
        this.score=0;
        this.index=function(x,y){
            return  x + (y * 10)
        }
    }

    showFurry(){
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    } 

    showCoin(){
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');    
    }

    startGame(){
        this.showCoin()
        this.showFurry()
        const self=this;
        this.idSetInterval=setInterval(function(){
           
           self.moveFurry()
        }, 250)
    }

    moveFurry(){
        if (this.furry.direction==='right'){
            this.furry.x++
            
        }else if (this.furry.direction==='left'){
            this.furry.x=this.furry.x-1;
        }else if (this.furry.direction==='up'){
            this.furry.y=this.furry.y-1;
        }else{
            this.furry.y=this.furry.y+1;
        }
if ((this.furry.x < 0 || this.furry.x > 9) || (this.furry.y < 0 || this.furry.y > 9)) {
          this.gameOver();
 }else{
        this.showFurry();
        this.checkCollision();
 }   
    }
    hideVisibleFurry(){
        let visFurry=document.querySelector('.furry');
        console.log ('vizible', visFurry)
        if (visFurry!=null){
            visFurry.classList.remove('furry')
        }

    }
    turnFurry(event){
        console.log(event.which)
        switch(event.which){
            
            case 37:
                this.furry.direction='left';
                
                break;
            case 38: 
                this.furry.direction='up';
                
                break;
            case 39:
                this.furry.direction='right';
               
                break;
            case 40:
                this.furry.direction='down';
                
                break;

        }
    }
    checkCollision(){
        if (this.furry.x===this.coin.x && this.furry.y===this.coin.y){
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            this.score++;
            document.querySelector('#score div strong').innerText=this.score;
            this.coin = new Coin();
            this.showCoin()
             
        }
    }
    gameOver(){
            clearInterval(this.idSetInterval)
            this.hideVisibleFurry()
    }

}

const game= new Game()
document.addEventListener('keydown', function (event) {
        game.turnFurry(event)
    })


//game.showFurry()
//game.showCoin()
game.startGame()


})