function draw_all_plots(matchname){
	document.getElementById("container1").innerHTML = '';
	// document.getElementById("multi_playersChart").innerHTML = ""
	draw_multi_lines(matchname)
	draw_multi_players_chart(matchname)
	draw_barplot_sentiments(matchname)
	draw_pitch_buzz(matchname)
	draw_map_countries(matchname)
}

/**************************
*													*
*					FINAL						*
*													*
**************************/

function show_final(){
	let matchname = "#BELJPN"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '4';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/france.png";
	document.getElementById("picture1").src = "./img/flags/croatia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Sunday, July 15th - 17:00';

	document.getElementById("fav_tweet").innerHTML = '';
	document.getElementById("goal_tweet").innerHTML = '';
	document.getElementById("rnn_tweet").innerHTML = '';

	draw_all_plots(matchname)
}


/**************************
*													*
*					THIRD						*
*													*
**************************/


function show_beleng(){
	let matchname = "#BELENG"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/belgium.png";
	document.getElementById("picture1").src = "./img/flags/england.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, July 14th - 16:00';

	document.getElementById("fav_tweet").innerHTML = '';
	document.getElementById("goal_tweet").innerHTML = '';
	document.getElementById("rnn_tweet").innerHTML = '';

	draw_all_plots(matchname)
}


/**************************
*													*
*					SEMI						*
*													*
**************************/

function show_croeng(){
	let matchname = "#CROENG"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '2';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/croatia.png";
	document.getElementById("picture1").src = "./img/flags/england.png";
	document.getElementById("match").innerHTML = matchname + '<br>Wednesday, July 11th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Me deleting all my &quot;it&#39;s coming home&quot; tweets... <a href='https://t.co/tEF6Wc65es'>pic.twitter.com/tEF6Wc65es</a></p>&mdash; Mike Sanz (@mikesanz19) <a href='https://twitter.com/mikesanz19/status/1017145907979128834?ref_src=twsrc%5Etfw'>July 11, 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Umtiti puts <a href='https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw'>#FRA</a> on the board, nails the post-goal dance! <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/PYTT1PVZ7X'>pic.twitter.com/PYTT1PVZ7X</a></p>&mdash; Marcus Gilmer (@marcusgilmer) <a href='https://twitter.com/marcusgilmer/status/1016762181067722753?ref_src=twsrc%5Etfw'>July 10, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>Lloris fait un match incroyable le meilleur gardien de la compétition <a href='https://twitter.com/hashtag/FRABEL?src=hash&amp;ref_src=twsrc%5Etfw'>#FRABEL</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/CEK692y26T'>https://t.co/CEK692y26T</a> <a href='https://t.co/yXfZWpWbMy'>pic.twitter.com/yXfZWpWbMy</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1017347626600226816?ref_src=twsrc%5Etfw'>July 12, 2018</a></blockquote>";

	draw_all_plots(matchname)
}

function show_frabel(){
	let matchname = "#FRABEL"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/france.png";
	document.getElementById("picture1").src = "./img/flags/belgium.png";
	document.getElementById("match").innerHTML = matchname + '<br>Tuesday, July 10th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>Plus qu’un match !!! 🇫🇷 <a href='https://t.co/VxyFIyYVUD'>pic.twitter.com/VxyFIyYVUD</a></p>&mdash; Antoine Griezmann (@AntoGriezmann) <a href='https://twitter.com/AntoGriezmann/status/1016797824531525640?ref_src=twsrc%5Etfw'>July 10, 2018</a></blockquote>";
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Umtiti puts <a href='https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw'>#FRA</a> on the board, nails the post-goal dance! <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/PYTT1PVZ7X'>pic.twitter.com/PYTT1PVZ7X</a></p>&mdash; Marcus Gilmer (@marcusgilmer) <a href='https://twitter.com/marcusgilmer/status/1016762181067722753?ref_src=twsrc%5Etfw'>July 10, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>Lloris fait un match incroyable le meilleur gardien de la compétition <a href='https://twitter.com/hashtag/FRABEL?src=hash&amp;ref_src=twsrc%5Etfw'>#FRABEL</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/CEK692y26T'>https://t.co/CEK692y26T</a> <a href='https://t.co/yXfZWpWbMy'>pic.twitter.com/yXfZWpWbMy</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1017347626600226816?ref_src=twsrc%5Etfw'>July 12, 2018</a></blockquote>"

	draw_all_plots(matchname)
}


/**************************
*													*
*				QUARTER						*
*													*
**************************/

function show_ruscro(){
	let matchname = "#RUSCRO"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/russia.png";
	document.getElementById("picture1").src = "./img/flags/croatia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, July 7th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Encore un petit bijou signé <a href='https://twitter.com/zekiel79?ref_src=twsrc%5Etfw'>@zekiel79</a>. 😂😂😂 <a href='https://t.co/wPKuDWFlcu'>pic.twitter.com/wPKuDWFlcu</a></p>&mdash; Thierry Hubac (@ThierryHubac) <a href='https://twitter.com/ThierryHubac/status/1016044284603240449?ref_src=twsrc%5Etfw'>8 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>The hosts exit at the quarter-finals, but Denis <a href='https://twitter.com/Cheryshev?ref_src=twsrc%5Etfw'>@Cheryshev</a> signs off Russia 2018 with another fantastic goal 🚀<br><br>Do you think it should win <a href='https://twitter.com/Hyundai_Global?ref_src=twsrc%5Etfw'>@Hyundai_Global</a> <a href='https://twitter.com/hashtag/WorldCupGOT?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCupGOT</a>?<br><br>👀 TV listings 👉 <a href='https://t.co/xliHcxWvEO'>https://t.co/xliHcxWvEO</a>  <br>📺 Highlights 👉 <a href='https://t.co/LOdKDX2Cwn'>https://t.co/LOdKDX2Cwn</a> <a href='https://t.co/VEm9OnTCZS'>pic.twitter.com/VEm9OnTCZS</a></p>&mdash; FIFA World Cup 🏆 (@FIFAWorldCup) <a href='https://twitter.com/FIFAWorldCup/status/1015718629281796098?ref_src=twsrc%5Etfw'>7 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Vida heads in like a bad guy that haircut <a href='https://twitter.com/hashtag/RUSCRO?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSCRO</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/wR1Nws2Lvb'>https://t.co/wR1Nws2Lvb</a> <a href='https://t.co/TLIXBw63i3'>pic.twitter.com/TLIXBw63i3</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1017341330102603776?ref_src=twsrc%5Etfw'>July 12, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_sweeng(){
	let matchname = "#SWEENG"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/sweden.png";
	document.getElementById("picture1").src = "./img/flags/england.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, July 7th - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'><a href='https://twitter.com/hashtag/SWEENG?src=hash&amp;ref_src=twsrc%5Etfw'>#SWEENG</a><a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a><br><br>The Floor is scoring goals<br><br>Raheem Sterling: <a href='https://t.co/pLaQSCSCfI'>pic.twitter.com/pLaQSCSCfI</a></p>&mdash; Lerato (@AndImLee) <a href='https://twitter.com/AndImLee/status/1015608749686513664?ref_src=twsrc%5Etfw'>7 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'><a href='https://twitter.com/hashtag/England?src=hash&amp;ref_src=twsrc%5Etfw'>#England</a> actually score a goal from the run of play. Not a set piece, but yet another header as an unmarked Dele Alli nods in Jesse Lingard&#39;s cross at the back post. <a href='https://twitter.com/hashtag/Sweden?src=hash&amp;ref_src=twsrc%5Etfw'>#Sweden</a> in real trouble now, down 2-0.<a href='https://twitter.com/hashtag/SWEENG?src=hash&amp;ref_src=twsrc%5Etfw'>#SWEENG</a> <a href='https://twitter.com/hashtag/SWE?src=hash&amp;ref_src=twsrc%5Etfw'>#SWE</a> <a href='https://twitter.com/hashtag/ENG?src=hash&amp;ref_src=twsrc%5Etfw'>#ENG</a> <a href='https://t.co/1dE8f0zoBS'>pic.twitter.com/1dE8f0zoBS</a></p>&mdash; Jason Foster (@JogaBonito_USA) <a href='https://twitter.com/JogaBonito_USA/status/1015616124434644992?ref_src=twsrc%5Etfw'>7 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Maguire scores with first international goal from a corner <a href='https://twitter.com/hashtag/SWEENG?src=hash&amp;ref_src=twsrc%5Etfw'>#SWEENG</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/jfolxlxIIk'>https://t.co/jfolxlxIIk</a> <a href='https://t.co/r3jMYqOide'>pic.twitter.com/r3jMYqOide</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1017337135106576385?ref_src=twsrc%5Etfw'>July 12, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_brabel(){
	let matchname = "#BRABEL"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/brazil.png";
	document.getElementById("picture1").src = "./img/flags/belgium.png";
	document.getElementById("match").innerHTML = matchname + '<br>Friday, July 6th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>&quot;Faute sur Neymar&quot; 😭😂🤣 Voilà bon. OK bye bye. <a href='https://twitter.com/hashtag/NeymarChallenge?src=hash&amp;ref_src=twsrc%5Etfw'>#NeymarChallenge</a> <a href='https://twitter.com/hashtag/BRABEL?src=hash&amp;ref_src=twsrc%5Etfw'>#BRABEL</a> 🇧🇪💪🏾⚽ <a href='https://t.co/1ilIXdztg4'>pic.twitter.com/1ilIXdztg4</a></p>&mdash; Vinz ⚽🏆🇧🇪🇸🇳🇫🇷 (@vinzradio) <a href='https://twitter.com/vinzradio/status/1015355200868093953?ref_src=twsrc%5Etfw'>6 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'><a href='https://twitter.com/hashtag/Bra?src=hash&amp;ref_src=twsrc%5Etfw'>#Bra</a> 0-2 <a href='https://twitter.com/hashtag/Bel?src=hash&amp;ref_src=twsrc%5Etfw'>#Bel</a> <br>Kevin De Bruyne 31&#39; <br>RT &amp; follow✔💥<a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/WorldCupRussia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCupRussia2018</a> <a href='https://twitter.com/hashtag/WorldCup2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup2018</a> <a href='https://t.co/jalhsTSqHG'>pic.twitter.com/jalhsTSqHG</a></p>&mdash; World Cup Goals🏆 (@WCgoalsHD) <a href='https://twitter.com/WCgoalsHD/status/1015304429229281280?ref_src=twsrc%5Etfw'>6 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Neymar is rolling home the World Cup like <a href='https://twitter.com/hashtag/BRABEL?src=hash&amp;ref_src=twsrc%5Etfw'>#BRABEL</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/0tlJ2BcPfh'>https://t.co/0tlJ2BcPfh</a> <a href='https://t.co/5mhLhJnYys'>pic.twitter.com/5mhLhJnYys</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1017173197387640838?ref_src=twsrc%5Etfw'>July 11, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_urufra(){
	let matchname = "#URUFRA"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/uruguay.png";
	document.getElementById("picture1").src = "./img/flags/france.png";
	document.getElementById("match").innerHTML = matchname + '<br>Friday, July 6th - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='und' dir='ltr'><a href='https://twitter.com/hashtag/FRAURU?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAURU</a> <a href='https://t.co/SKd5aYiSlQ'>pic.twitter.com/SKd5aYiSlQ</a></p>&mdash; Shanta 🇨🇲🤪 (@mcrs_10) <a href='https://twitter.com/mcrs_10/status/1015250314310627330?ref_src=twsrc%5Etfw'>6 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Homme du match <a href='https://twitter.com/hashtag/Lloris?src=hash&amp;ref_src=twsrc%5Etfw'>#Lloris</a>. <a href='https://twitter.com/hashtag/URUFRA?src=hash&amp;ref_src=twsrc%5Etfw'>#URUFRA</a> <a href='https://t.co/oE8Ly66RLP'>pic.twitter.com/oE8Ly66RLP</a></p>&mdash; Axel Failla (@faillaaxel) <a href='https://twitter.com/faillaaxel/status/1015263237351395333?ref_src=twsrc%5Etfw'>6 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>Mbappe tombe tout sur l&#39;action absolument seul ! <a href='https://twitter.com/hashtag/URUFRA?src=hash&amp;ref_src=twsrc%5Etfw'>#URUFRA</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/kXNB2e5ATo'>https://t.co/kXNB2e5ATo</a> <a href='https://t.co/LBb29jK4ai'>pic.twitter.com/LBb29jK4ai</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1017169785807831040?ref_src=twsrc%5Etfw'>July 11, 2018</a></blockquote>"

	draw_all_plots(matchname)
}


/**************************
*													*
*				ROUND 16					*
*													*
**************************/

function show_coleng(){
	let matchname = "#COLENG"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/colombia.png";
	document.getElementById("picture1").src = "./img/flags/england.png";
	document.getElementById("match").innerHTML = matchname + '<br>Tuesday, July 3rd - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>My favourite scene ever from Friends. <a href='https://t.co/i8irgHuECi'>pic.twitter.com/i8irgHuECi</a></p>&mdash; Mike Sanz (@mikesanz19) <a href='https://twitter.com/mikesanz19/status/1014275339000967171?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>World class save from Pickford<br> <a href='https://t.co/js8K5KoJE6'>pic.twitter.com/js8K5KoJE6</a></p>&mdash; ً (@KMbappe7) <a href='https://twitter.com/KMbappe7/status/1014524824285147136?ref_src=twsrc%5Etfw'>July 4, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML  = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Mina scores his third consecutive head goal for Colombia. <a href='https://twitter.com/hashtag/COLENG?src=hash&amp;ref_src=twsrc%5Etfw'>#COLENG</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/AZnjXW7SZK'>https://t.co/AZnjXW7SZK</a> <a href='https://t.co/n7pkE3bQdB'>pic.twitter.com/n7pkE3bQdB</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014930073911267328?ref_src=twsrc%5Etfw'>5 juillet 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_sweswi(){
	let matchname = "#SWESWI"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/sweden.png";
	document.getElementById("picture1").src = "./img/flags/switzerland.png";
	document.getElementById("match").innerHTML = matchname + '<br>Tuesday, July 3rd - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Sweden fans 😍😂 <a href='https://t.co/BYDrbz8XHV'>pic.twitter.com/BYDrbz8XHV</a></p>&mdash; Football Obsession (@Footy_Obsession) <a href='https://twitter.com/Footy_Obsession/status/1014185516374228992?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Forsberg chuta, a bola desvia em Akanji e entra <a href='https://twitter.com/hashtag/SWE?src=hash&amp;ref_src=twsrc%5Etfw'>#SWE</a> 1⃣✖️0⃣ <a href='https://twitter.com/hashtag/SUI?src=hash&amp;ref_src=twsrc%5Etfw'>#SUI</a> <a href='https://twitter.com/hashtag/Copa2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Copa2018</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/OjaPAbdgGj'>pic.twitter.com/OjaPAbdgGj</a></p>&mdash; gifsdacopa (@gifsdacopa) <a href='https://twitter.com/gifsdacopa/status/1014168783185948674?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML  = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Forsberg&#39;s shot takes deflection and finally a goal to quarter-finals. <a href='https://twitter.com/hashtag/SWESWI?src=hash&amp;ref_src=twsrc%5Etfw'>#SWESWI</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/cR6fEwtBIU'>https://t.co/cR6fEwtBIU</a> <a href='https://t.co/MzsFysi88y'>pic.twitter.com/MzsFysi88y</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014925704939687936?ref_src=twsrc%5Etfw'>5 juillet 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_beljpn(){
	let matchname = "#BELJPN"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '3';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/belgium.png";
	document.getElementById("picture1").src = "./img/flags/japan.png";
	document.getElementById("match").innerHTML = matchname + '<br>Monday, July 2nd - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Knocked out of the World Cup and the Japanese fans are still staying behind after the game and tidying up the mess in the stadium, Japanese fans you are incredible. <a href='https://twitter.com/hashtag/JAP?src=hash&amp;ref_src=twsrc%5Etfw'>#JAP</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/9Xg4qggURh'>pic.twitter.com/9Xg4qggURh</a></p>&mdash; FutbolBible |WorldCup (@FutbolBible) <a href='https://twitter.com/FutbolBible/status/1013880182711734272?ref_src=twsrc%5Etfw'>2 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Watch Lukaku&#39;s run. Drags the defender inside to create space for Meunier and then dummies it brilliantly for Chadli. Brilliant work. <a href='https://t.co/RKseQLdX7q'>pic.twitter.com/RKseQLdX7q</a></p>&mdash; Jake. (@YedIin) <a href='https://twitter.com/YedIin/status/1013877023046078471?ref_src=twsrc%5Etfw'>2 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Japan team on fire won hearts after a thrilling comeback <a href='https://twitter.com/hashtag/BELJPN?src=hash&amp;ref_src=twsrc%5Etfw'>#BELJPN</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/gmuwUh5YyH'>https://t.co/gmuwUh5YyH</a> <a href='https://t.co/rrVa3WKGSk'>pic.twitter.com/rrVa3WKGSk</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014142685077213185?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"
	draw_all_plots(matchname)
}

function show_bramex(){
	let matchname = "#BRAMEX"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '2';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/brazil.png";
	document.getElementById("picture1").src = "./img/flags/mexico.png";
	document.getElementById("match").innerHTML = matchname + '<br>Monday, July 2nd - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>If Neymar was a dog <a href='https://t.co/PPL9YIBsjo'>pic.twitter.com/PPL9YIBsjo</a></p>&mdash; Kevin J. Malingkas (@malingkas_kevin) <a href='https://twitter.com/malingkas_kevin/status/1013885070925369344?ref_src=twsrc%5Etfw'>2 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Neymar back heel, Willian cross, Neymar goal <a href='https://twitter.com/hashtag/BRAMEX?src=hash&amp;ref_src=twsrc%5Etfw'>#BRAMEX</a> <a href='https://t.co/RcOTSUl0fT'>pic.twitter.com/RcOTSUl0fT</a></p>&mdash; David Kappel (@kappilinho) <a href='https://twitter.com/kappilinho/status/1013802612515377153?ref_src=twsrc%5Etfw'>2 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Neymar is hilarious actor somebody touches him <a href='https://twitter.com/hashtag/BRAMEX?src=hash&amp;ref_src=twsrc%5Etfw'>#BRAMEX</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/y2h16TJTOD'>https://t.co/y2h16TJTOD</a> <a href='https://t.co/Cn9gg4fjTp'>pic.twitter.com/Cn9gg4fjTp</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014136479998795776?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_croden(){
	let matchname = "#CRODEN"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/croatia.png";
	document.getElementById("picture1").src = "./img/flags/denmark.png";
	document.getElementById("match").innerHTML = matchname + '<br>Sunday, July 1st - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Les longues rentrées du joueur danois <a href='https://twitter.com/hashtag/DENCRO?src=hash&amp;ref_src=twsrc%5Etfw'>#DENCRO</a> <a href='https://twitter.com/hashtag/rtbfsport?src=hash&amp;ref_src=twsrc%5Etfw'>#rtbfsport</a> <a href='https://twitter.com/hashtag/CFootRTBF?src=hash&amp;ref_src=twsrc%5Etfw'>#CFootRTBF</a> <a href='https://t.co/dy4ajvf5Nu'>pic.twitter.com/dy4ajvf5Nu</a></p>&mdash; AmirLove🇧🇪🇧🇦 (@AmirDdrja) <a href='https://twitter.com/AmirDdrja/status/1013497058857189376?ref_src=twsrc%5Etfw'>1 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'><a href='https://twitter.com/hashtag/DEN?src=hash&amp;ref_src=twsrc%5Etfw'>#DEN</a>&#39;s Kasper Schmeichel saved an incredible three penalties today.<br><br>Here&#39;s his <a href='https://twitter.com/Budweiser?ref_src=twsrc%5Etfw'>@Budweiser</a> <a href='https://twitter.com/hashtag/ManoftheMatch?src=hash&amp;ref_src=twsrc%5Etfw'>#ManoftheMatch</a> interview following <a href='https://twitter.com/hashtag/CRODEN?src=hash&amp;ref_src=twsrc%5Etfw'>#CRODEN</a>… <a href='https://t.co/7zC77udICw'>pic.twitter.com/7zC77udICw</a></p>&mdash; FIFA World Cup 🏆 (@FIFAWorldCup) <a href='https://twitter.com/FIFAWorldCup/status/1013542545106796544?ref_src=twsrc%5Etfw'>1 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Kasper Schmeichel with fabulous save a penalty again <a href='https://twitter.com/hashtag/CRODEN?src=hash&amp;ref_src=twsrc%5Etfw'>#CRODEN</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/YnfwH8ucFv'>https://t.co/YnfwH8ucFv</a> <a href='https://t.co/mmUntoEyEQ'>pic.twitter.com/mmUntoEyEQ</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014132263271960577?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_sparus(){
	let matchname = "#SPARUS"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/spain.png";
	document.getElementById("picture1").src = "./img/flags/russia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Sunday, July 1st - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>&quot;De Gea  has delivered,  you can release his family now&quot; <a href='https://t.co/gBRVcraTO6'>pic.twitter.com/gBRVcraTO6</a></p>&mdash; Danny WelBeast (@WelBeast) <a href='https://twitter.com/WelBeast/status/1013464407408508929?ref_src=twsrc%5Etfw'>1 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Akinfeev saving that penalty with his feet like a BOSS <a href='https://twitter.com/hashtag/ESPRUS?src=hash&amp;ref_src=twsrc%5Etfw'>#ESPRUS</a> <a href='https://t.co/6yBK3r6N8f'>pic.twitter.com/6yBK3r6N8f</a></p>&mdash; Aman The World Cup🏆Fan (@AmanTsays) <a href='https://twitter.com/AmanTsays/status/1013463207179104256?ref_src=twsrc%5Etfw'>1 juillet 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Ramos crying picture on the pitch made my day <a href='https://twitter.com/hashtag/SPARUS?src=hash&amp;ref_src=twsrc%5Etfw'>#SPARUS</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/nrNipqbEEc'>https://t.co/nrNipqbEEc</a> <a href='https://t.co/OTKNpa2JcE'>pic.twitter.com/OTKNpa2JcE</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014125006404620288?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_urupor(){
	let matchname = "#URUPOR"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '2';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/uruguay.png";
	document.getElementById("picture1").src = "./img/flags/portugal.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, June 30th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>When Ronaldo bumps into Messi at the airport. <a href='https://t.co/4Dhd5KfUyI'>pic.twitter.com/4Dhd5KfUyI</a></p>&mdash; Footy Humour (@FootyHumour) <a href='https://twitter.com/FootyHumour/status/1013148027870154753?ref_src=twsrc%5Etfw'>30 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'><a href='https://twitter.com/hashtag/Portugal?src=hash&amp;ref_src=twsrc%5Etfw'>#Portugal</a> conceding an early goal was the worst possible situation. Now <a href='https://twitter.com/hashtag/Uruguay?src=hash&amp;ref_src=twsrc%5Etfw'>#Uruguay</a> can sit back even more, rely on very strong defense, and threaten on the counter through Suarez/Cavani. <a href='https://twitter.com/hashtag/POR?src=hash&amp;ref_src=twsrc%5Etfw'>#POR</a> often struggle when they have to break down defenses from possession. <a href='https://twitter.com/hashtag/URUPOR?src=hash&amp;ref_src=twsrc%5Etfw'>#URUPOR</a> <a href='https://twitter.com/hashtag/URU?src=hash&amp;ref_src=twsrc%5Etfw'>#URU</a> <a href='https://t.co/vaBIPTXQfa'>pic.twitter.com/vaBIPTXQfa</a></p>&mdash; Jason Foster (@JogaBonito_USA) <a href='https://twitter.com/JogaBonito_USA/status/1013123404046749697?ref_src=twsrc%5Etfw'>June 30, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML  = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Cristiano Ronaldo meet Messi back home at the airport <a href='https://twitter.com/hashtag/URUPOR?src=hash&amp;ref_src=twsrc%5Etfw'>#URUPOR</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/7rabfLPY9Z'>https://t.co/7rabfLPY9Z</a> <a href='https://t.co/KRb5h6CrD0'>pic.twitter.com/KRb5h6CrD0</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1014122694932094978?ref_src=twsrc%5Etfw'>July 3, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_fraarg(){
	let matchname = "#FRAARG"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '4';
	document.getElementById("score1").innerHTML = '3';
	document.getElementById("picture0").src = "./img/flags/france.png";
	document.getElementById("picture1").src = "./img/flags/argentina.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, June 30th - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Kylian Mbappe, aged 13, in his bedroom - a shrine to his hero Ronaldo. Now, just 6yrs later, HE’S the new king of world football. The hero-worshipper becomes the hero. Amazing. <a href='https://t.co/eRfzjBnMBc'>pic.twitter.com/eRfzjBnMBc</a></p>&mdash; Piers Morgan (@piersmorgan) <a href='https://twitter.com/piersmorgan/status/1013321586496110593?ref_src=twsrc%5Etfw'>1 juillet 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Pavard’s goal is best appreciated from this angle <a href='https://twitter.com/hashtag/FRAARG?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAARG</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/exRdHYpe6c'>pic.twitter.com/exRdHYpe6c</a></p>&mdash; FIFA WORLD CUP 2018⚽ (@_WorldCupStats) <a href='https://twitter.com/_WorldCupStats/status/1013084154550943745?ref_src=twsrc%5Etfw'>June 30, 2018</a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Benjamin Pavard avant de sortir du but incroyable vraiment qui égalise. <a href='https://twitter.com/hashtag/FRAARG?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAARG</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/ZuXjlMZPlu'>https://t.co/ZuXjlMZPlu</a> <a href='https://t.co/xbTA77nLjj'>pic.twitter.com/xbTA77nLjj</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1013899940249120768?ref_src=twsrc%5Etfw'>2 juillet 2018</a></blockquote>"

	draw_all_plots(matchname)
}


/**************************
*													*
*					GROUP 					*
*													*
**************************/

function show_engbel(){
	let matchname = "#ENGBEL"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/england.png";
	document.getElementById("picture1").src = "./img/flags/belgium.png";
	document.getElementById("match").innerHTML = matchname + '<br>Tuesday, June 28th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>The second just before I knew I f*cked up <a href='https://twitter.com/hashtag/InternetUndefeated?src=hash&amp;ref_src=twsrc%5Etfw'>#InternetUndefeated</a> 😂 <a href='https://t.co/wAf5Wt6QvK'>pic.twitter.com/wAf5Wt6QvK</a></p>&mdash; Michy Batshuayi (@mbatshuayi) <a href='https://twitter.com/mbatshuayi/status/1012433791040794625?ref_src=twsrc%5Etfw'>28 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Januzaj with a great goal but look at Michy Batshuayi stealing the limelight 😂😅 <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/BEL?src=hash&amp;ref_src=twsrc%5Etfw'>#BEL</a> <a href='https://twitter.com/hashtag/Eng?src=hash&amp;ref_src=twsrc%5Etfw'>#Eng</a> <a href='https://t.co/8rXzPD6XE7'>pic.twitter.com/8rXzPD6XE7</a></p>&mdash; kishore. (@KishoreGSundar) <a href='https://twitter.com/KishoreGSundar/status/1012414604427874306?ref_src=twsrc%5Etfw'>28 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Batshuayi after the goal best goal celebration fail <a href='https://twitter.com/hashtag/ENGBEL?src=hash&amp;ref_src=twsrc%5Etfw'>#ENGBEL</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/W092o94jVq'>pic.twitter.com/W092o94jVq</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1013373014468120576?ref_src=twsrc%5Etfw'>July 1, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_serbra(){
	let matchname = "#SERBRA"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/serbia.png";
	document.getElementById("picture1").src = "./img/flags/brazil.png";
	document.getElementById("match").innerHTML = matchname + '<br>Wednesday, June 27th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Sympa le nouveau clip de soprano<a href='https://twitter.com/hashtag/SERBRA?src=hash&amp;ref_src=twsrc%5Etfw'>#SERBRA</a> <a href='https://t.co/5BfAqKMFFO'>pic.twitter.com/5BfAqKMFFO</a></p>&mdash; Maxime (@adamaxime) <a href='https://twitter.com/adamaxime/status/1012054569847787520?ref_src=twsrc%5Etfw'>27 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>first goal of Brazil a typical Coutinho assist and good Penetration run behinde to defense from Paulinho. <a href='https://twitter.com/KlipDraw?ref_src=twsrc%5Etfw'>@KlipDraw</a>  <a href='https://twitter.com/hashtag/BRA?src=hash&amp;ref_src=twsrc%5Etfw'>#BRA</a> <a href='https://twitter.com/hashtag/SRB?src=hash&amp;ref_src=twsrc%5Etfw'>#SRB</a> <a href='https://t.co/xFUUzlJTp0'>pic.twitter.com/xFUUzlJTp0</a></p>&mdash; Cüneyt ALİBEYOĞULLARI (@CAlibeyogullari) <a href='https://twitter.com/CAlibeyogullari/status/1012121881225416705?ref_src=twsrc%5Etfw'>27 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Paulinho with the goal in front his touch show Barcelona player. <a href='https://twitter.com/hashtag/SERBRA?src=hash&amp;ref_src=twsrc%5Etfw'>#SERBRA</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/3WOSps5nJA'>https://t.co/3WOSps5nJA</a> <a href='https://t.co/ozehjiY1EC'>pic.twitter.com/ozehjiY1EC</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1013380171066470401?ref_src=twsrc%5Etfw'>July 1, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_denfra(){
	let matchname = "#DENFRA"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/denmark.png";
	document.getElementById("picture1").src = "./img/flags/france.png";
	document.getElementById("match").innerHTML = matchname + '<br>Tuesday, June 26th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Résumé de la première mi-temps. <a href='https://twitter.com/hashtag/FRADAN?src=hash&amp;ref_src=twsrc%5Etfw'>#FRADAN</a> <a href='https://t.co/WBrXbsPN2d'>pic.twitter.com/WBrXbsPN2d</a></p>&mdash; Betclic France (@Betclic) <a href='https://twitter.com/Betclic/status/1011622541025267712?ref_src=twsrc%5Etfw'>26 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Top 10 des trucs à retenir de ce match Danemark-France, quel ennui <a href='https://t.co/TTO8MJlhLF'>https://t.co/TTO8MJlhLF</a> <a href='https://t.co/08tyHc6IZC'>pic.twitter.com/08tyHc6IZC</a></p>&mdash; Topito (@topito_com) <a href='https://twitter.com/topito_com/status/1011650314561380352?ref_src=twsrc%5Etfw'>26 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>La France termine sans marquer du match plus nul de la Coupe du Monde  <a href='https://twitter.com/hashtag/DENFRA?src=hash&amp;ref_src=twsrc%5Etfw'>#DENFRA</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/Ah47yp65fN'>pic.twitter.com/Ah47yp65fN</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1013370222684835840?ref_src=twsrc%5Etfw'>July 1, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_ururus(){
	let matchname = "#URURUS"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '3';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/uruguay.png";
	document.getElementById("picture1").src = "./img/flags/russia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Monday, June 25th - 16:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Poutine avant chaque début de match dans le vestiaire Russe <br>- <a href='https://t.co/hUDYzmY1IB'>pic.twitter.com/hUDYzmY1IB</a></p>&mdash; LHR (@Taylorlhrmdy) <a href='https://twitter.com/Taylorlhrmdy/status/1009378839225688065?ref_src=twsrc%5Etfw'>20 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Still laughing 😂😂😂😂😂 அடேய் 😂😂😂😂😂 <a href='https://twitter.com/hashtag/URURUS?src=hash&amp;ref_src=twsrc%5Etfw'>#URURUS</a> <a href='https://t.co/KtSwyS7W82'>pic.twitter.com/KtSwyS7W82</a></p>&mdash; No one (@KammiNaughty) <a href='https://twitter.com/KammiNaughty/status/1011427584100392960?ref_src=twsrc%5Etfw'>June 26, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Cavani get his goal this World Cup beat Russia down to 10 men. <a href='https://twitter.com/hashtag/URURUS?src=hash&amp;ref_src=twsrc%5Etfw'>#URURUS</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/Lf6AvgHOnK'>pic.twitter.com/Lf6AvgHOnK</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1013365617724985345?ref_src=twsrc%5Etfw'>1 juillet 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_polcol(){
	let matchname = "#POLCOL"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '0';
	document.getElementById("score1").innerHTML = '3';
	document.getElementById("picture0").src = "./img/flags/poland.png";
	document.getElementById("picture1").src = "./img/flags/colombia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Sunday, June 24th - 17:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'><a href='https://twitter.com/hashtag/COL?src=hash&amp;ref_src=twsrc%5Etfw'>#COL</a>⁠ ⁠legend Carlos Valderrama and his wife watching the game. <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/riXkIKp6aL'>pic.twitter.com/riXkIKp6aL</a></p>&mdash; FIFA World Cup (@WorIdCupUpdates) <a href='https://twitter.com/WorIdCupUpdates/status/1010972062670876672?ref_src=twsrc%5Etfw'>24 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>.<a href='https://twitter.com/FALCAO?ref_src=twsrc%5Etfw'>@Falcao</a> gets his first <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> goal for <a href='https://twitter.com/hashtag/COL?src=hash&amp;ref_src=twsrc%5Etfw'>#COL</a>. 🐯⚽<br>🎥 Highlights 👉 <a href='https://t.co/LOdKDX2Cwn'>https://t.co/LOdKDX2Cwn</a> <br>📺 TV listings 👉 <a href='https://t.co/xliHcxWvEO'>https://t.co/xliHcxWvEO</a> <a href='https://t.co/k52X90N5gl'>pic.twitter.com/k52X90N5gl</a></p>&mdash; FIFA World Cup 🏆 (@FIFAWorldCup) <a href='https://twitter.com/FIFAWorldCup/status/1011001088508645377?ref_src=twsrc%5Etfw'>24 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Falcao scored his first world cup goal back to his best <a href='https://twitter.com/hashtag/POLCOL?src=hash&amp;ref_src=twsrc%5Etfw'>#POLCOL</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/V0BV0zJMS6'>pic.twitter.com/V0BV0zJMS6</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1011206975307251712?ref_src=twsrc%5Etfw'>25 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_gerswe(){
	let matchname = "#GERSWE"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '2';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/germany.png";
	document.getElementById("picture1").src = "./img/flags/sweden.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, June 23th - 14:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Joachim Low reportedly motivated German players at halftime by telling them that they would each have to sniff his fingers after the game if they lost. <a href='https://t.co/qHFMvW1zPX'>pic.twitter.com/qHFMvW1zPX</a></p>&mdash; Soccer Memes (@SoccerMemes) <a href='https://twitter.com/SoccerMemes/status/1010643836543143939?ref_src=twsrc%5Etfw'>23 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>TONI KROOS! WHAT A FANTASTIC GOAL! 🇩🇪😎 <a href='https://t.co/04tTKCJxxe'>pic.twitter.com/04tTKCJxxe</a></p>&mdash; Old Days Football (@OldDaysFootball) <a href='https://twitter.com/OldDaysFootball/status/1010614962203525120?ref_src=twsrc%5Etfw'>23 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Kroos with very timely late curve pressure is still alive <a href='https://twitter.com/hashtag/GERSWE?src=hash&amp;ref_src=twsrc%5Etfw'>#GERSWE</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/8CWOtsI41d'>pic.twitter.com/8CWOtsI41d</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1010882675664740352?ref_src=twsrc%5Etfw'>24 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}


function show_bracrc(){
	let matchname = "#BRACRC"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '2';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/brazil.png";
	document.getElementById("picture1").src = "./img/flags/costa.png";
	document.getElementById("match").innerHTML = matchname + '<br>Friday, June 22th - 14:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>C&#39;est un trucage ou quoi? <a href='https://twitter.com/neymarjr?ref_src=twsrc%5Etfw'>@neymarjr</a> 🔥 <a href='https://t.co/laGuEnKdE6'>pic.twitter.com/laGuEnKdE6</a></p>&mdash; Rapha Jay New (@RaphaJay1) <a href='https://twitter.com/RaphaJay1/status/1010239350339178497?ref_src=twsrc%5Etfw'>22 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Coutinho hit first goal for the Brazilians <a href='https://t.co/memY0Xzivu'>pic.twitter.com/memY0Xzivu</a></p>&mdash; Cartoon pee (@AfariPee) <a href='https://twitter.com/AfariPee/status/1010166351145717760?ref_src=twsrc%5Etfw'>22 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Neymar dive looking for penalty was overturned <a href='https://twitter.com/hashtag/BRACRC?src=hash&amp;ref_src=twsrc%5Etfw'>#BRACRC</a> <a href'https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/4LFYjjp1yL'>pic.twitter.com/4LFYjjp1yL</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1010880643201470464?ref_src=twsrc%5Etfw'>24 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_fraper(){
	let matchname = "#FRAPER"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/france.png";
	document.getElementById("picture1").src = "./img/flags/peru.png";
	document.getElementById("match").innerHTML = matchname + '<br>Thursday, June 21th - 17:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='und' dir='ltr'><a href='https://t.co/FwtY4iudKs'>pic.twitter.com/FwtY4iudKs</a></p>&mdash; Scipion (@Scipionista) <a href='https://twitter.com/Scipionista/status/1009851445410181121?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>⚽️🌎🇫🇷 <a href='https://twitter.com/hashtag/Goal?src=hash&amp;ref_src=twsrc%5Etfw'>#Goal</a> from <a href='https://twitter.com/hashtag/Mbapp%C3%A9?src=hash&amp;ref_src=twsrc%5Etfw'>#Mbappé</a> for <a href='https://twitter.com/hashtag/France?src=hash&amp;ref_src=twsrc%5Etfw'>#France</a> against <a href='https://twitter.com/hashtag/Peru?src=hash&amp;ref_src=twsrc%5Etfw'>#Peru</a> for those who missed it. <a href='https://twitter.com/hashtag/franceperou?src=hash&amp;ref_src=twsrc%5Etfw'>#franceperou</a> <a href='https://twitter.com/hashtag/PERFRA?src=hash&amp;ref_src=twsrc%5Etfw'>#PERFRA</a> <a href='https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw'>#FRA</a> <a href='https://twitter.com/hashtag/WorldCup2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup2018</a> <a href='https://twitter.com/hashtag/WorldCupRussia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCupRussia2018</a> <a href='https://t.co/Ndy4QkZGnK'>pic.twitter.com/Ndy4QkZGnK</a></p>&mdash; Thierry LopezDeArias (@TLopezDeArias) <a href='https://twitter.com/TLopezDeArias/status/1009934891671347201?ref_src=twsrc%5Etfw'>June 21, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Mbappe est buteur est le plus jeune français à la coupe du monde. <a href='https://twitter.com/hashtag/FRAPER?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAPER</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/cokD5NMhH7'>pic.twitter.com/cokD5NMhH7</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1010077440989958144?ref_src=twsrc%5Etfw'>22 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_uruksa(){
	let matchname = "#URUKSA"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/uruguay.png";
	document.getElementById("picture1").src = "./img/flags/arabia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Wednesday, June 20th - 17:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>Belle résistance des Saoudiens qui en gardent sous la semelle. <a href='https://twitter.com/hashtag/URUKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#URUKSA</a> <a href='https://t.co/0a9ykRMO7V'>pic.twitter.com/0a9ykRMO7V</a></p>&mdash; Winamax Sport (@WinamaxSport) <a href='https://twitter.com/WinamaxSport/status/1009467268797992960?ref_src=twsrc%5Etfw'>June 20, 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>📌 <a href='https://twitter.com/hashtag/Uruguay?src=hash&amp;ref_src=twsrc%5Etfw'>#Uruguay</a> 1 - 0 <a href='https://twitter.com/hashtag/SaudiArabia?src=hash&amp;ref_src=twsrc%5Etfw'>#SaudiArabia</a><br><br>Luis Suarez scored the only goal to book Uruguay&#39;s passage to the knockout stages with a game to spare. <a href='https://twitter.com/hashtag/3Sports?src=hash&amp;ref_src=twsrc%5Etfw'>#3Sports</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/bY5esfK4jw'>pic.twitter.com/bY5esfK4jw</a></p>&mdash; #TV3GH (@tv3_ghana) <a href='https://twitter.com/tv3_ghana/status/1009710775668301829?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Suarez actually today show his wife is pregnant <a href='https://twitter.com/hashtag/URUKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#URUKSA</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/9sXN6HG8sJ'>pic.twitter.com/9sXN6HG8sJ</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009786850104545280?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_polsen(){
	let matchname = "#POLSEN"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/poland.png";
	document.getElementById("picture1").src = "./img/flags/sweden.png";
	document.getElementById("match").innerHTML = matchname + '<br>Tuesday, June 19th - 17:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>👏 Celebration of the tournament...<a href='https://twitter.com/hashtag/POLSEN?src=hash&amp;ref_src=twsrc%5Etfw'>#POLSEN</a> <a href='https://t.co/AJv1jLqazk'>pic.twitter.com/AJv1jLqazk</a></p>&mdash; The Sportsman (@TheSportsman) <a href='https://twitter.com/TheSportsman/status/1009119501990932482?ref_src=twsrc%5Etfw'>June 19, 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>The Senegal goal today against Poland 🙈ref waves him on and he intercepts a back pass⚽️ <br><br> <a href='https://t.co/rpCjMu9HKU'>pic.twitter.com/rpCjMu9HKU</a></p>&mdash; Football Away Days (@sportingawayday) <a href='https://twitter.com/sportingawayday/status/1009177311097303040?ref_src=twsrc%5Etfw'>19 juin 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Senegal showing great celebration of coach the coolest <a href='https://twitter.com/hashtag/POLSEN?src=hash&amp;ref_src=twsrc%5Etfw'>#POLSEN</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/5ejxjqU2FM'>pic.twitter.com/5ejxjqU2FM</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009782113846087680?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_tuneng(){
	let matchname = "#TUNENG"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '2';
	document.getElementById("picture0").src = "./img/flags/tunisia.png";
	document.getElementById("picture1").src = "./img/flags/england.png";
	document.getElementById("match").innerHTML = matchname + '<br>Monday, June 18th - 17:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>England 😱 <a href='https://t.co/N0zBMDzizd'>pic.twitter.com/N0zBMDzizd</a></p>&mdash; The LAD Football (@TheLADFootball) <a href='https://twitter.com/TheLADFootball/status/1008947073914290176?ref_src=twsrc%5Etfw'>19 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Everything is better with titanic music <br><br>England  <a href='https://twitter.com/hashtag/ENGTUN?src=hash&amp;ref_src=twsrc%5Etfw'>#ENGTUN</a> <a href='https://t.co/gr2AGaXEqc'>pic.twitter.com/gr2AGaXEqc</a></p>&mdash; Raekwon (@RaekwonJ71) <a href='https://twitter.com/RaekwonJ71/status/1008997894022750208?ref_src=twsrc%5Etfw'>19 juin 2018</a></blockquote>"
	ocument.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Kane for England celebrating late goal anytime <a href='https://twitter.com/hashtag/TUNENG?src=hash&amp;ref_src=twsrc%5Etfw'>#TUNENG</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/afnrvka2xW'>pic.twitter.com/afnrvka2xW</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009052406598885377?ref_src=twsrc%5Etfw'>June 19, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_braswi(){
	let matchname = "#BRASWI"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '1';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/brazil.png";
	document.getElementById("picture1").src = "./img/flags/switzerland.png";
	document.getElementById("match").innerHTML = matchname + '<br>Sunday, June 17th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>When Neymar was in school<br>(🎥:  <a href='https://twitter.com/kennynobrega?ref_src=twsrc%5Etfw'>@kennynobrega</a> )<a href='https://t.co/XQ8Ky418IH'>https://t.co/XQ8Ky418IH</a></p>&mdash; Troll Football Media (@Troll__Footbal) <a href='https://twitter.com/Troll__Footbal/status/1008436596809654274?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>le Golazoooooode <a href='https://twitter.com/Phil_Coutinho?ref_src=twsrc%5Etfw'>@Phil_Coutinho</a>, quel monstre 🇧🇷🔥 <a href='https://t.co/chAgB3iAyn'>pic.twitter.com/chAgB3iAyn</a></p>&mdash; Visca Barça (@ViscaBarca_FR) <a href='https://twitter.com/ViscaBarca_FR/status/1008417839160741890?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"
	ocument.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Coutinho scores screamers like a replay <a href='https://twitter.com/hashtag/BRASWI?src=hash&amp;ref_src=twsrc%5Etfw'>#BRASWI</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/aK8WzrhZ2m'>pic.twitter.com/aK8WzrhZ2m</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009047499083075584?ref_src=twsrc%5Etfw'>June 19, 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_fraaus(){
	let matchname = "#FRAAUS"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '2';
	document.getElementById("score1").innerHTML = '1';
	document.getElementById("picture0").src = "./img/flags/france.png";
	document.getElementById("picture1").src = "./img/flags/australia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Saturday, June 16th - 12:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Ne blâmez pas Umtiti, il a échappé 3 fois à la mort sur le terrain, ça laisse des traces.  <a href='https://twitter.com/hashtag/FRAAUS?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAAUS</a> <a href='https://t.co/gdFRmICAEb'>pic.twitter.com/gdFRmICAEb</a></p>&mdash; Nicky Lahcene (@NickyLahcene) <a href='https://twitter.com/NickyLahcene/status/1007965148030685185?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'><a href='https://twitter.com/paulpogba?ref_src=twsrc%5Etfw'>@paulpogba</a> helped France team to lead 1st victory in 2018 world cup gorgeous chip by Paul Pogba which hit the frame of the goal and crossed the line which gave 2-1 lead to France. <a href='https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw'>#FRA</a> <a href='https://twitter.com/hashtag/AUS?src=hash&amp;ref_src=twsrc%5Etfw'>#AUS</a> <a href='https://twitter.com/hashtag/mufc?src=hash&amp;ref_src=twsrc%5Etfw'>#mufc</a> <a href='https://twitter.com/hashtag/PaulPogba?src=hash&amp;ref_src=twsrc%5Etfw'>#PaulPogba</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/FRAAUS?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAAUS</a> <a href='https://t.co/aYhppXq6kE'>pic.twitter.com/aYhppXq6kE</a></p>&mdash; Unitereddevils (@Unite_Reddevils) <a href='https://twitter.com/Unite_Reddevils/status/1008026582877900802?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"
	ocument.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Umtiti s’est cru au basket avec la VAR de la main <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/FRAAUS?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAAUS</a> <a href='https://t.co/PaQ3vvOuEP'>pic.twitter.com/PaQ3vvOuEP</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1008287583091163136?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_porspa(){
	let matchname = "#PORSPA"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '3';
	document.getElementById("score1").innerHTML = '3';
	document.getElementById("picture0").src = "./img/flags/portugal.png";
	document.getElementById("picture1").src = "./img/flags/spain.png";
	document.getElementById("match").innerHTML = matchname + '<br>Friday, June 15th - 20:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Cristiano Ronaldo records today:<br><br>🔥 First player EVER to score in 8 consecutive major tournament<br>⭐️ Second highest goalscorer ever for any country<br>💪🏼 Oldest player EVER to score a hat-trick at the World Cup<br>🙌🏼 Fourth player to score in 4 World Cups<br><br>G.O.A.T. 👑🐐 <a href='https://t.co/cxX5BfnnNu'>pic.twitter.com/cxX5BfnnNu</a></p>&mdash; Futbol Stuff (@FutboIStuff) <a href='https://twitter.com/FutboIStuff/status/1007727337541169153?ref_src=twsrc%5Etfw'>June 15, 2018</a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>These are kind of people did Physics &amp; Mathematics perfect short perfect curving the ball excellent to <a href='https://twitter.com/hashtag/Nacho?src=hash&amp;ref_src=twsrc%5Etfw'>#Nacho</a> <a href='https://twitter.com/hashtag/PORxESP?src=hash&amp;ref_src=twsrc%5Etfw'>#PORxESP</a><a href='https://twitter.com/hashtag/PORESP?src=hash&amp;ref_src=twsrc%5Etfw'>#PORESP</a> <a href='https://twitter.com/hashtag/GainwithSmartleoH?src=hash&amp;ref_src=twsrc%5Etfw'>#GainwithSmartleoH</a> <a href='https://twitter.com/hashtag/Russia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Russia2018</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/Russia2018WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#Russia2018WorldCup</a> <a href='https://twitter.com/hashtag/WorldCupRussia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCupRussia2018</a> <a href='https://twitter.com/hashtag/NTVBudgetDialogue18?src=hash&amp;ref_src=twsrc%5Etfw'>#NTVBudgetDialogue18</a> <a href='https://twitter.com/hashtag/K24Russia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#K24Russia2018</a> <a href='https://twitter.com/hashtag/PortugalVsSpain?src=hash&amp;ref_src=twsrc%5Etfw'>#PortugalVsSpain</a> <a href='https://t.co/LceZURxLBT'>pic.twitter.com/LceZURxLBT</a></p>&mdash; SmartleoH (@SmartleoH) <a href='https://twitter.com/SmartleoH/status/1007706115000406017?ref_src=twsrc%5Etfw'>June 15, 2018</a></blockquote>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Ronaldo is the goat perfectly the best in the world <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/PORSPA?src=hash&amp;ref_src=twsrc%5Etfw'>#PORSPA</a> <a href='https://t.co/aARv2LWZSW'>pic.twitter.com/aARv2LWZSW</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1007906563405811712?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}

function show_rusara(){
	let matchname = "#RUSARA"
	console.log(matchname)
	document.getElementById("score0").innerHTML = '4';
	document.getElementById("score1").innerHTML = '0';
	document.getElementById("picture0").src = "./img/flags/russia.png";
	document.getElementById("picture1").src = "./img/flags/arabia.png";
	document.getElementById("match").innerHTML = matchname + '<br>Thursday, June 14th - 17:00';

	document.getElementById("fav_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Ça chambre déjà... <a href='https://twitter.com/hashtag/Rusia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Rusia2018</a> <a href='https://twitter.com/hashtag/RUSKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSKSA</a> <a href='https://t.co/pavhBqMbiV'>pic.twitter.com/pavhBqMbiV</a></p>&mdash; Nabil Djellit (@Nabil_djellit) <a href='https://twitter.com/Nabil_djellit/status/1007308770186354688?ref_src=twsrc%5Etfw'>14 juin 2018</a></blockquote>"
	document.getElementById("goal_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>This Goal by <a href='https://twitter.com/Cheryshev?ref_src=twsrc%5Etfw'>@Cheryshev</a> 🇷🇺!! gives Russia a 4 Goal lead in the Extra Time. That was Fabulous!! 😍👏🙌<a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/Rusia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Rusia2018</a> <a href='https://twitter.com/hashtag/RUSKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSKSA</a><br><br>Credits - <a href='https://twitter.com/FIFAWorldCup?ref_src=twsrc%5Etfw'>@FIFAWorldCup</a> <a href='https://t.co/DhQBch6Yn9'>pic.twitter.com/DhQBch6Yn9</a></p>&mdash; Saurabh Kahadane (@SKahadane) <a href='https://twitter.com/SKahadane/status/1007564242499919872?ref_src=twsrc%5Etfw'>June 15, 2018</a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
	document.getElementById("rnn_tweet").innerHTML = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Golovin to make it perfect is again a goal <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/RUSKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSKSA</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1007905063401123841?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"

	draw_all_plots(matchname)
}
