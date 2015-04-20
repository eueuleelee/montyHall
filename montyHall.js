function montyhall() {

  //randomly pick prize door from 3
  var pick = function() {
    return Math.floor(Math.random() * 3);
  }

  var switchWin = 0, stayWin = 0;

  // if door 1 = prize
  // player selects any door
  // show doors not selected (shownDoor != prize)
  // 2 doors remain (selected, other)
  var game = function () {
    var prize, select, show;

    prize = pick();
    select = pick();
    do {
      show = pick();
    } while (show == prize || show == select);

    // can choose to switch to "other" or stay at "selected"
    //switch strategy:
    if (select == prize) {
      stayWin ++;
    }else{
      switchWin ++;
    }
  }

  //run 1000 times
  for (var i=0; i < 1000; i++) {
    game();
  }

  //console.log -> winning/losing %
  console.log("switch strategy: " + "winning percentage: " + (switchWin/1000)*100 + "% | no-switch strategy: "+ "winning percentage: " + (stayWin/1000)*100 + "%");

}

//P(W) = 2/3  (if initial pick is wrong, always switch -> always WIN )
// (there is 2/3 chance that u will pick wrong at first. then switch, then win)
//P(L) = 1/3 (if initial pick is right (1/3 chance to pick right initially), then switch, then lose)

//dont switch strategy:
//P(w) = 1/3
//P(L) = 2/3
