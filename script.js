var randomNumber = 0;
var elem = document.getElementById("image");
var posVer = elem.style.top;
var posHor = elem.style.left;
var hitOrMiss = [0, 0, 0]; // hits, misses, total

setInterval(function func(){
  randomNumber = Math.floor(Math.random() * 7);

  switch(randomNumber){
    case 0: //North
      for(i = 0; i < 15; i++){
        posVer -= 5;
        elem.style.top = posVer + "px";
      }
      break;
    case 1: //North-east
      for(i = 0; i < 15; i++){
        posVer -= 5;
        posHor += 5;
        elem.style.top = posVer + "px";
        elem.style.left = posHor + "px";
      }
      break;
    case 2: //East
      for(i = 0; i < 15; i++){
        posHor += 5;
        elem.style.left = posHor + "px";
      }
      break;
    case 3: //South-east
      for(i = 0; i < 15; i++){
        posVer += 5;
        posHor += 5;
        elem.style.top = posVer + "px";
        elem.style.left = posHor + "px";
      }
    case 4: //South
      for(i = 0; i < 15; i++){
        posVer += 5;
        elem.style.left = posHor + "px";
      }
      break;
    case 5: //South-west
      for(i = 0; i < 15; i++){
        posVer += 5;
        posHor -= 5;
        elem.style.top = posVer + "px";
        elem.style.left = posHor + "px";
      }
      break;
    case 6: //West
      for(i = 0; i < 15; i++){
        posHor -= 5;
        elem.style.left = posHor + "px";
      }
      break;
    case 7: //North-west
      for(i = 0; i < 15; i++){
        posVer -= 5;
        posHor -= 5;
        elem.style.top = posVer + "px";
        elem.style.left = posHor + "px";
      }
      break;
  }
}, 500000000000)

function shootMiss(){
  hitOrMiss[1] += 1;
  hitOrMiss[2] += 1;
  if(hitOrMiss[2] == 10){
    alert("Hits: " + hitOrMiss[0] + "\nMisses: " + hitOrMiss[1]);
    location.reload();
  }
}

function shootHit(){
  hitOrMiss[0] += 1;
  hitOrMiss[2] += 1;
  if(hitOrMiss[2] == 10){
    alert("Hits: " + hitOrMiss[0] + "\nMisses: " + hitOrMiss[1]);
    location.reload();
  }
}

