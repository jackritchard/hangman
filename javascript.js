let input = document.querySelector('.middle');
let theman = document.querySelectorAll('.line');
let gameover = document.querySelector('.gameover');
let bottom = document.querySelector('.bottom');
let mandiv = document.querySelector('.theman');
let h1 = document.querySelector('h1');
let realword = document.querySelector('.realword');
let loading = document.querySelector('.loading');
let loading2 = document.querySelector('.loading2');
let buttons = document.querySelectorAll('button');
let winner = document.querySelector('.winner');
let hint = document.querySelector('.hint');
let streak = document.querySelector('.streak');
let hintword = document.querySelector('.hintword');

let winstreak = 0
let total = 0

function randomNumber() {
    // random number between 0 and the length of the words array
    //prevent the same word from being chosen twice in a row
    let random = Math.floor(Math.random() * words.length);
    if (random === total) {
        random = randomNumber();
    }
    return Math.floor(Math.random() * words.length);
}

let words = 
    ["LUCKY",
    "DOG",
    "JACKPOT",
    "BANJO",
    "SUBWAY",
    "AFFIX",
    "PEPPER",
    "KHAKI",
    "PANCAKE",
    "FOREIGN",
    "DILEMMA",
    "SCHOOL",
    "SUNSET",
    "CAT",

    
];

let definition = [
    "having, bringing, or resulting from good luck.",
    "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, nonretractable claws, and a barking, howling, or whining voice.",
    "a large cash prize in a game or lottery, especially one that accumulates until it is won.",
    "a stringed musical instrument with a long neck and a round open-backed body consisting of parchment stretched over a metal hoop like a tambourine, played by plucking or with a plectrum. It is used especially in American folk music.",
    "an underground electric railroad.",
    "stick, attach, or fasten (something) to something else.",
    "a pungent, hot-tasting powder prepared from dried and ground peppercorns, commonly used as a spice or condiment to flavor food.",
    "a textile fabric of a dull brownish-yellow color, in particular a strong cotton fabric used in military clothing.",
    "a thin, flat cake of batter, usually fried and turned in a pan. Pancakes are usually eaten with syrup or rolled up with a filling.",
    "of, from, in, or characteristic of a country or language other than one's own.",
    "a dispute or disagreement between two or more people.",
    "an institution for educating children.",
    "the time in the evening when the sun disappears or daylight fades.",
    "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed."




    

]

let word = randomNumber();

function getWord (){
    if (total > 0 ) {
        word = randomNumber();}
    input.innerHTML = "";
    realword.textContent = `${words[word]}`;
    for (let i = 0; i < words[word].length; i++) {
        let letter = document.createElement('div');
        letter.setAttribute("class", "letter")
        letter.classList.add('letter');
        letter.innerHTML = words[word][i];
        input.appendChild(letter);}
    window.letters = document.querySelectorAll('.letter');
    //if the length of letters i greater than 6, add middlescale class to input
    if (window.letters.length >= 6) {
        input.classList.add('middlescale');
    }//if the length of letters i less than or equal to 6, remove middlescale class to input
    else {
        input.classList.remove('middlescale');
    }
}
getWord();

buttons.forEach(function(button) {
    //while held down, add clicked class
    button.addEventListener('mousedown', function() {
        button.classList.add('clicked');
    })
    //while not held down, remove clicked class
    button.addEventListener('mouseup', function() {
        button.classList.remove('clicked');
    }
    )

    button.addEventListener('click', function a(button) {

        

        for (let i = 0; i < letters.length; i++) {
            if (letters[i].innerHTML === button.target.innerHTML) {
                letters[i].classList.add('revealed');
                button.target.classList.add('disabledtrue');
                 if (document.querySelectorAll('.revealed').length === letters.length) {
                    winstreak += 1
                    streak.textContent = `Win Streak: ${winstreak}`
                    gameoverhide(1)
                    total += 1;}}}    

        if (!words[word].includes(button.target.innerHTML)) {
            button.target.classList.add('disabled');
            for (let i = 0; i < theman.length; i++) {
                if (!theman[i].classList.contains('displayman')) {
                    theman[i].classList.add('displayman');
                    break;}}}

        if (theman[5].classList.contains('displayman')) {
                winstreak = 0
                gameoverhide(0)
                total += 1}})})

hint.addEventListener('click', function b() {
    if (hintword.classList.contains('hintopen')) {
        hintword.classList.remove('hintopen')
        return}
    hintword.textContent = `${definition[word]}`;
    hintword.classList.add('hintopen')
    hint.classList.add('hintgreen')
})

function gameovershow() {
    theman.forEach(line => { line.classList.remove('displayman')})
    buttons.forEach(button => { button.classList.remove('disabled') 
        button.classList.remove('disabledtrue')})
    winner.classList.remove('winnerclass')
    gameover.classList.remove('gameovershow')
    bottom.classList.remove('gameoverhide')
    input.classList.remove('gameoverhide')
    mandiv.classList.remove('gameoverhide')
    h1.classList.remove('gameoverhide')
    getWord();
    loading.classList.remove('loadinggo')
    loading2.classList.remove('loadinggo')
    hint.classList.remove('gameoverhide')
    hint.classList.remove("none")}

function gameoverhide(x) {
    if (x === 0) {
        gameover.classList.add('gameovershow')
        loading.classList.add('loadinggo')}
    if (x === 1) {
        winner.classList.add('winnerclass')
        loading2.classList.add('loadinggo')
    }
    hintword.classList.remove('hintopen')
    hint.classList.add('gameoverhide')
    bottom.classList.add('gameoverhide')
    input.classList.add('gameoverhide')
    mandiv.classList.add('gameoverhide')
    h1.classList.add('gameoverhide')
    buttons.forEach(button => { button.classList.add('disabled')})
    setTimeout(gameovershow, 2100)}
