(function ($, window, document, undefined) {

  'use strict';
  var waitMax = 3000;
  var waitMin = 1000;
//  var waitMax = 11000;
//  var waitMin = 7000;



//     .___       __
//   __| _/____ _/  |______
//  / __ |\__  \\   __\__  \
// / /_/ | / __ \|  |  / __ \_
// \____ |(____  /__| (____  /
//      \/     \/          \/

  var shuffledPokemonGifs = [];
  var pokemonGifs = [
    './assets/img/pokemon/0b977cd54958098e4f243c71f4648ed51d3ba5fb36e1c3fa2e998f2076c34a99_1.gif',
    './assets/img/pokemon/32d1Km2.gif',
    './assets/img/pokemon/61c1e2f1e3cbc68731c06940a8cac3586b9bd3a11429e5f89da9810d171380bd_1.gif'
  ];
  function getSemiRandomPokemon(){
    if(shuffledPokemonGifs.length===0){
      shuffledPokemonGifs = [].concat(pokemonGifs);
      shuffledPokemonGifs = shuffledPokemonGifs.shuffle();
    }
    return shuffledPokemonGifs.pop();
  }

  var shuffledQuotes = [];
  var quotes = [
    ['we tend to forget that happiness doesnt', 'come as a result of getting something we dont have','but of appreciating what we do have'],
    ['seek freedom and become captive of your desires','seek discipline and find your liberty'],
    ['it&apos;s not who you are that holds you back,','it&apos;s who you think you&apos;re not'],
    ['when someone tells me no it doesnt mean i cant','it just means i cant do it with them'],
    ['worrying does not take away tomorrows troubles','it takes away todays peace'],
    ['dont wait for the perfect moment','take the moment and make it perfect'],
    ['dont let people pull you into their storm','pull them into your peace'],
    ['don&apos;t be afraid to fail','be afraid not to try'],
    ['if you cannot be positive','then at least be quiet'],
    ['perfection is not of the world','do your best and forget the rest'],
    ['heroism is endurance','for one moment more']
  ];
  function getSemiRandomQuote(){
    if(shuffledQuotes.length===0){
      shuffledQuotes = [].concat(quotes);
      shuffledQuotes = shuffledQuotes.shuffle();
    }
    return shuffledQuotes.pop();
  }


// .__           .__
// |  |__   ____ |  | ______   ___________  ______
// |  |  \_/ __ \|  | \____ \_/ __ \_  __ \/  ___/
// |   Y  \  ___/|  |_|  |_> >  ___/|  | \/\___ \
// |___|  /\___  >____/   __/ \___  >__|  /____  >
//      \/     \/     |__|        \/           \/

  /**
  * Returns a random integer between min and max
  * Using Math.round() will give you a non-uniform distribution!
  */
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = this[i];
      this[i] = this[j];
      this[j] = tmp;
    }
    return this;
  };


//                .__         ___.                .__
//   _____ _____  |__| ____   \_ |______________  |__| ____   ______
//  /     \\__  \ |  |/    \   | __ \_  __ \__  \ |  |/    \ /  ___/
// |  Y Y  \/ __ \|  |   |  \  | \_\ \  | \// __ \|  |   |  \\___ \
// |__|_|  (____  /__|___|  /  |___  /__|  (____  /__|___|  /____  >
//       \/     \/        \/       \/           \/        \/     \/

  function displayRandomAnime(){
    console.log('anime!');
    document.getElementById('animeLoop').style.backgroundImage='url("'+ getSemiRandomPokemon() +'")';
  }

  function displayRandomQuote(){
    var quoteArray = getSemiRandomQuote();
    var quoteString = '<p>';
    quoteArray.forEach( function(s) {
      quoteString = quoteString + s.replace(/ /g, '&nbsp;') + '<br/>';
    } );
    quoteString = quoteString + '</p>'
    console.log(quoteString);
    document.getElementById('quoteZone').innerHTML = quoteString;
  }

  function changeElement(){
    //determine which element to swap
    var targetFlag = getRandomInt(0,1);
    if(targetFlag===0){
      displayRandomAnime();
    }else{
      displayRandomQuote();
    }

    //reset the timer again
    setTimeout(changeElement,getRandomInt(waitMin,waitMax));
  }

  setTimeout(changeElement,getRandomInt(waitMin,waitMax));


  $(function () {
  });

  //animeLoop

})(jQuery, window, document);
