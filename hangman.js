let input = document.querySelector('.middle');


function randomNumber() {
    return Math.floor(Math.random() * 2);
}

let words = 
    ["JAVASCRIPT",
    "DOG"
];

function getword () { 
    let word = randomNumber();
    input.innerHTML = "";
    realword.textContent = `${words[word]}`;
    for (let i = 0; i < words[word].length; i++) {
        let letter = document.createElement('div');
        letter.setAttribute("class", "letter")
        letter.classList.add('letter');
        letter.innerHTML = words[word][i];
        input.appendChild(letter);}
    }
getword();