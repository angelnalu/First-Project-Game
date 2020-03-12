
//Starting global variables
let
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext ('2d'),
  fillWhite = ctx.fillStyle = 'white'
  strokeWhite = ctx.strokeStyle = 'white'
;

let player = {
  positionY: 165,

  draw: function() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(65, this.positionY, 30, 40);
  },

  clear: function() {
    ctx.clearRect(65, this.positionY, 30, 40);
  },

  jump: function(e) {
    if (move == 0) return;

    if(e.keyCode === 32){
      player.clear();
      player.positionY = 90;
      player.draw();

      setTimeout(function(){
        player.clear();
        player.positionY = 165;
        player.draw();
      }, 600);
    }
  }
}

let obstacles = {
  positionX: 1000,
  position1: 1200,

  draw: function(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.positionX, 165, 15, 40);
    ctx.fillRect(this.position1, 165, 15, 40);
  },

  clear: function(){
    ctx.clearRect(this.positionX, 165, 15, 40);
    ctx.clearRect(this.position1, 165, 15, 40);
  },

  update: function(){
    obstacles.clear();
    obstacles.positionX -= 5;
    obstacles.position1 -= 5;
    obstacles.draw();
    obstacles.checkCrash();

    if(obstacles.positionX == -15) obstacles.positionX = 1000;
    if(obstacles.position1 == -15) obstacles.position1 = 1200;
  },

  stop: function(){
    clearInterval(move);
  },

  crash: function(){
    obstacles.stop();
    chronometer.stop();
    move = 0;
    if (move === 0){
      return  ctx.fillText("GAME OVER", 410, 100);
     }
  },

  checkCrash: function(){
    if(obstacles.positionX === 95 && player.positionY > 90) obstacles.crash();
    
    if(obstacles.position1 === 95 && player.positionY > 90) obstacles.crash();
 
  }
}


obstacles.draw();
obstacles.update();
let move = setInterval(obstacles.update, 40);

let chronometer = {
  time: 1,

  draw: function(){
    ctx.font = '24px time news roman';
    ctx.fillStyle = 'white';
    ctx.fillText(chronometer.time, 500, 50);
  },

  update: function(){
    chronometer.time ++;
    ctx.fillStyle = 'white';
    ctx.clearRect(450, 30, 100, 25);
    ctx.fillText(chronometer.time, 500, 50);
  },

  stop: function(){
    clearInterval(count);

  }
}

chronometer.draw();
let count = setInterval(chronometer.update, 1000 / 10);


let road = {
  draw: function() {
    ctx.beginPath();
    ctx.moveTo(0, 208);
    ctx.lineWidth = 1.5;
    ctx.lineTo(1000, 208);
    strokeWhite;
    ctx.stroke();
    ctx.closePath();
  },

}

let game = {
  
  
  startGame: function(){
    
    road.draw();
    
    player.draw();
    document.onkeydown = player.jump;
          
          }
}

game.startGame();







//STONES 

// let controller = {
//   randomStones:  function(l1, l2, t1, t2, w1, w2,){
//     let positionL = this.randomNumbers(l1, l2);
//     let positionT = this.randomNumbers(t1, t2);
//     let sizeW = this.randomNumbers(w1, w2);

//     return [positionL, positionT, sizeW];
//   },

//   randomNumbers: function(min, max){
//     return Math.floor(Math.random()*(max-min+1)+min);
//   }
// }

  // stones: function(){
  //   ctx.fillStyle = 'white';
  //   fillWhite;

  //   for(i = 1; i <= 100; i++){
  //     let varNum1 = controller.randomNumbers(1, 1000);
  //     let varNum2 = controller.randomNumbers(1, 10);

  //     ctx.fillRect(
  //       controller.randomStones(15 + varNum1, 19 + varNum1, 207 + varNum2, 210 + varNum2, 1, 5)[0],
  //       controller.randomStones(15 + varNum1, 19 + varNum1, 207 + varNum2, 210 + varNum2, 1, 5)[1],
  //       controller.randomStones(15 + varNum1, 19 + varNum1, 207 + varNum2, 210 + varNum2, 1, 5)[2],
  //       1
  //     );
  //   }
    
  // }
 