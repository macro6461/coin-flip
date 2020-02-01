var heads_wins = [];
var tails_wins = [];

function play(){
       var audio = document.getElementById("audio");
       audio.play();
}

function coinFlip() {
		function flip(){
				return Math.floor((Math.random() * 2) + 1)
		}
		var result = flip();
		if (result === 1){
				document.getElementById("coin").src="images/heads.png";
				winner = `HEADS`;
				head_win = heads_wins.push(result);
        document.getElementById("head_win").innerText = head_win;
		} else if (result === 2) {
				document.getElementById("coin").src="images/tails.png";
				winner = `TAILS`;
			  tail_win = `${tails_wins.push(result)}`;
        document.getElementById("tail_win").innerText = tail_win;
		}
		document.getElementById("winner").innerText = winner;
	}

	function score(){
		if (heads_wins.length + tails_wins.length === 9){
			if (heads_wins.length > tails_wins.length){
				document.getElementById("coin").src="images/heads.png";
				final_winner = `The winner is HEADS with ${heads_wins.length} wins!`;
        print_winner();
			} else if (tails_wins.length > heads_wins.length) {
				document.getElementById("coin").src="images/tails.png";
				final_winner = `The winner is TAILS with ${tails_wins.length} wins!`;
        print_winner();
			}
		}
	}

  function print_winner(){
    winner = ''
    document.getElementById("final_winner").innerHTML = final_winner;
    // debugger;
    fallingCoins()
    // setTimeout(playAgain, 4000);
  }

  function playAgain(){
    alert("Play again?");
    window['location'].reload();
  }

  function addCoin() {
    var coin_div = document.getElementById('coin_fall')
    var rand = Math.floor(Math.random() * 1000) + 1
    coin_div.style.position = "fixed";
    coin_div.style.top = '-120px';
    coin_div.style.left = rand +'px';
    var clone = coin_div.cloneNode(true);
    document.body.appendChild(clone);
  }

  function fallingCoins(){
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    if (heads_wins.length > tails_wins.length){
      document.getElementById("damn").innerHTML += "<div id='coin_fall'><img id='falling_coin' src='images/heads.png'/></div>"
    } else {
      document.getElementById("damn").innerHTML += "<div id='coin_fall'><img id='falling_coin' src='images/tails.png'/></div>"
    }
     // true means clone all childNodes and all event handlers
    for (var i = 0; i < arr.length; i++) {
      var rand = Math.floor(Math.random() * 3) + 2;
      setTimeout(addCoin, (i * rand) * 300);
    }

  }
