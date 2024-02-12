document.addEventListener('DOMContentLoaded', function(){
  // Variables and consts
  const phrasesArray = [
    "aaa aaaaaa",
    "pero porque no :(",
    "te daré muchos besitos",
    "dale di que si pues",
    "bien miedosa eres",
    "mmmh pienso",
    "siiiiii porfisss",
    "toi asao"
  ];
  let phraseCounter = [];
  let moshiCounter = [];
  
  const confettiValues = { 
    emojis: ['💜','🤍', '💛', '🧡', '💙', '❤️'],
    emojiSize: 100,
    confettiNumber: 30,
  }
  
  const jsConfetti = new JSConfetti();
  
  const yes_btn = document.querySelector('#siBtn');
  const no_btn = document.querySelector('#noBtn');
  const moshi_container = document.querySelector('#moshiContainer');
  const title = document.querySelector('#title_h1');
  
  // Events
  yes_btn.addEventListener('click', yesEvents);
  no_btn.addEventListener('click', noEvents);
  showMoshi();

  // Functions
  function noEvents() {
    
    const phrase = setRandomPhrase();
    
    if(phrase === 'END') {
      no_btn.style.setProperty("display", "none");
    } else {
      no_btn.textContent = phrase;
    }
    
    deleteMoshi();
    showMoshi();
  }
  
  function yesEvents() {
    title.innerHTML = 'muamua t quiero Oladi';
    no_btn.style.setProperty("display", "none");
    yes_btn.style.setProperty("display", "none");
    deleteMoshi();
    createMoshi(9);

    repitConfetti();
  }

  function setRandomPhrase() {
    const phrasesArrayLength = phrasesArray.length;
    const randomNumber = Math.ceil(Math.random() * phrasesArrayLength);

    if (phrasesArrayLength === phraseCounter.length) {
      return 'END';
    }

    if (!phraseCounter.includes(randomNumber)) {
      phraseCounter.push(randomNumber);
      return phrasesArray[randomNumber - 1];
    } else {
      return setRandomPhrase();
    }
  }

  function releaseConfetti() {
    if (screen.width > 430) {
      confettiValues.emojiSize = 40;
    } else {
      confettiValues.emojiSize = 100;
    }
    jsConfetti.addConfetti(confettiValues);
  }

  function repitConfetti() {
    releaseConfetti();
    setInterval(releaseConfetti, 2500);
  }

  function showMoshi() {
    const randomNumber = Math.ceil(Math.random() * 10);

    if (moshiCounter.length === 10) {
      return;
    }

    if (!moshiCounter.includes(randomNumber)) {
      moshiCounter.push(randomNumber);
      createMoshi(randomNumber)
    } else {
      return showMoshi();
    }
  }

  function createMoshi(randomNumber) {
    const image_moshi = document.createElement('IMG');
    image_moshi.src = `./assets/cats/sticker_${randomNumber}.gif`;
    moshi_container.appendChild(image_moshi);
  }

  function deleteMoshi() {
    moshi_container.removeChild(moshi_container.firstChild); 
  }

});
