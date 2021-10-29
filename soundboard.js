var array = [];
function loadArray() {
    function Sound(name, key, keyCode, url, source) {
        this.name = name;
        this.key = key;
        this.code = keyCode;
        this.url = url;
        this.source = source;
    }
    array.push(new Sound("Scream Idiots", "E", 69, "screamIdiot.mp3"));
    array.push(new Sound("Idiots", "I", 73, "idiots.mp3"));
    array.push(new Sound("Rapper", "R", 82, "rapper.mp3"));
    array.push(new Sound("Corona", "C", 67, "coronavirus.mp3"));
    array.push(new Sound("Question", "Q", 81, "question.mp3"));
    array.push(new Sound("Don't Get it", "D", 68, "dontgetit.mp3"));
    array.push(new Sound("Pepper Spray", "P", 80, "pepperspray.mp3"));
    array.push(new Sound("Neat Planet", "N", 78, "nature1.mp3"));
    array.push(new Sound("Aspen", "A", 65, "aspen.mp3"));
    array.push(new Sound("Dodge", "B", 66, "dodge.mp3"));
    array.push(new Sound("Knowledge", "K", 75, "knowledge.mp3"));
    array.push(new Sound("When Will You Learn", "W", 87, "whenwillyoulearn.mp3"));
    array.push(new Sound("John Cena", "J", 74, "cena.mp3"));
}

function buildSoundboard() {
    array.forEach(function (sound) {
        // add html audio tag
        document.getElementById('audio-container').innerHTML += `<audio data-key="${sound.code}" src="${sound.url}">`;
        // add html element to soundboard
        document.getElementById('keys-container').innerHTML += `<div class="key" data-key="${sound.code}"><span class="title">${sound.name}</span><span class="key-letter">${sound.key}</span></div>`;
    })


    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('click', clicked));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

}

loadArray();
buildSoundboard();


function clicked(e) {
    playSound(this.getAttribute('data-key'));
}

function keyDown(e) {
    playSound(e.keyCode);
}

function playSound(code) {
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if (!audio) {
        console.log('key not assigned');
        return;
    }
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}
function removeTransition(e) {
    //    if(e.propertyName !== 'background-color') return; //skip so only fires once
    this.classList.remove('playing');
}


window.addEventListener('keydown', keyDown);