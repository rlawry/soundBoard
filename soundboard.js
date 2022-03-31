var array = [];
function loadArray() {
    function Sound(name, key, keyCode, url, source) {
        this.name = name;
        this.key = key;
        this.code = keyCode;
        this.url = url;
        this.source = source;
    }
    array.push(new Sound("Scream Idiots", "E", 69, "screamIdiot.mp3"));                 //E    
    array.push(new Sound("Idiots", "I", 73, "idiots.mp3"));                             //I
    array.push(new Sound("Rapper", "R", 82, "rapper.mp3"));                             //R
    array.push(new Sound("Corona", "C", 67, "coronavirus.mp3"));                        //C
    array.push(new Sound("Question", "Q", 81, "question.mp3"));                         //Q
    array.push(new Sound("Don't Get it", "G", 71, "dontgetit.mp3"));                    //G
    array.push(new Sound("Pepper Spray", "P", 80, "pepperspray.mp3"));                  //P
    array.push(new Sound("Neat Planet", "N", 78, "nature1.mp3"));                       //N
    array.push(new Sound("Aspen", "A", 65, "aspen.mp3"));                               //A
    array.push(new Sound("Dodge", "D", 68, "dodge.mp3"));                               //D
    array.push(new Sound("Knowledge", "K", 75, "knowledge.mp3"));                       //K
    array.push(new Sound("When Will You Learn", "W", 87, "whenwillyoulearn.mp3"));      //W
    array.push(new Sound("John Cena", "J", 74, "cena.mp3"));                            //J
    array.push(new Sound("That's Right", "T", 84, "ThatsRight.mp3"));                   //T
    array.push(new Sound("Bo", "B", 66, "bosinthehouse.mp3"));                          //B
    array.push(new Sound("7am", "7", 55, "sevenAM.mp3"));                               //7
    array.push(new Sound("Hello", "H", 72, "hello.mp3"));                               //H
    array.push(new Sound("Leaveralone", "L", 76, "leaveralone.mp3"));                   //L
    array.push(new Sound("Grammarly", "X", 88, "grammarly.mp3"));                       //X
    array.push(new Sound("Very Hungry", "U", 85, "hungry.mp3"));                        //U
    array.push(new Sound("Not too Bad", "O", 79, "notbad.mp3"));                        //O
    array.push(new Sound("Horn", "1", 49, "horn.mp3"));                                 //1
    array.push(new Sound("A Thousand Miles", "2", 50, "thousand.mp3"));                 //2
    array.push(new Sound("Life", "Z", 90, "life.mp3"));                                 //Z
    array.push(new Sound("Meow", "M", 77, "no.mp3"));                                   //M
    array.push(new Sound("Ouchie", "F", 70, "ouchie.mp3"));                             //F
    array.push(new Sound("Who?", "3", 51, "wait.mp3"));                                   //M
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