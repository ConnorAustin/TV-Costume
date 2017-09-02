var times = [3000, 1500, 2000, 2000, 2900, 2900, 5000, 2000, 2200, 1900, 4900, 4900, 
  4900, 4000, 5000, 5000, 5000, 7500, 7500, 7500, 1500, 6500, 
  3000, 5000, 4000, 4000, 5000, 3000, 3000, 1800, 3400, 3400, 3400, 6000, 6000, 4000, 4000, 4000, 3200, 3200, 1500, 5500, 1500, 2500, 2300, 2300, 2700];
  
var channels = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeChannel() {
  document.body.style.backgroundImage = "url(images/static.gif)";
  setTimeout(randomChannel, 500);
}

function randomChannel() {
  if(channels.length == 0) {
    for(var i = 0; i < times.length; i++) {
      channels.push(i);
    }
    shuffle(channels);
  }

  var channel = channels.pop();
  document.body.style.backgroundImage = "url(images/" + channel + ".gif)";
  setTimeout(changeChannel, times[channel]);
}

randomChannel();
