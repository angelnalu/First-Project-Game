

window.onload = function(){

let newGameNalu;

this.document.getElementById("start-button").onclick = function(){
  startGame();
  if(document,getElementById("canvas").length === 0){
    resetGame();
  } else {
    startGame();
  };

  function startGame() {
    newGameNalu = new Game( "game-board", 1200, 300 );
    document.getElementById("start-button").innerText = "Reset Game";
  }

  function resetGame() {
    newGameNalu.stopGame();
    document.getElementById("start-button").innerText = "Start Game";
    document.getElementById("game-board").innerHTML = "";
  }
};

}




  function roadDraw () {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext){

      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(100, 200);
      ctx.lineTo(1000, 200);
      ctx.stroke(); 
  
    }

  }
  roadDraw();

  function stones() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext){

      var ctx = canvas.getContext("2d");


      for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 18; j++) {
          ctx.beginPath();
          
          // x coordinate
          var x = 130 + j * 50; 
          // y coordinate
          var y = 205 + i * 15; 
          // Arc radius
          var radius = 0.5; 
          // Starting point on circle
          var startAngle = 0; 
          // End point on circle
          var endAngle = Math.PI + (Math.PI * i) / 1; 
          // clockwise or anticlockwise
          var anticlockwise = i % 2 !== 0; 

          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

          ctx.stroke();
    
        }
      }
    }
    
    
  }

  stones();


