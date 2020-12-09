var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
var elem = document.getElementById("image");
var posVer = 0
var posHor = 0
var hitOrMiss = [0, 0, 0]; // hits, misses, total

setInterval(function func(){
  i = Math.floor(Math.random() * 7);

  switch(directions[i]){
    case "N":
      posVer -= 75;
      elem.style.top = posVer + "px";
      break;
    case "NE":
      posVer -= 75;
      posHor += 75;
      elem.style.top = posVer + "px";
      elem.style.left = posHor + "px";
      break;
    case "E":
      posHor += 75;
      elem.style.left = posHor + "px";
      break;
    case "SE":
      posVer += 75;
      posHor += 75;
      elem.style.top = posVer + "px";
      elem.style.left = posHor + "px";
    case "S":
      posVer += 75;
      elem.style.left = posHor + "px";
      break;
    case "SW":
      posVer += 75;
      posHor -= 75;
      elem.style.top = posVer + "px";
      elem.style.left = posHor + "px";
      break;
    case "W":
      posHor -= 75;
      elem.style.left = posHor + "px";
      break;
    case "NW":
      posVer -= 75;
      posHor -= 75;
      elem.style.top = posVer + "px";
      elem.style.left = posHor + "px";
      break;
  }
}, 500)

function shootMiss(){
  hitOrMiss[1] += 1;
  hitOrMiss[2] += 1;
  event.stopPropagation()
  if(hitOrMiss[2] == 10){
    alert("Hits: " + hitOrMiss[0] + "\nMisses: " + hitOrMiss[1]);
    location.reload();
  }
}

function shootHit(){
  hitOrMiss[0] += 1;
  hitOrMiss[2] += 1;
  event.stopPropagation()
  if(hitOrMiss[2] == 10){
    alert("Hits: " + hitOrMiss[0] + "\nMisses: " + hitOrMiss[1]);
    location.reload();
  }
}

