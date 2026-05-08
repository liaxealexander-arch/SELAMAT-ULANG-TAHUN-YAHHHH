/* COUNTDOWN */

let count = 3;

const countdown = document.getElementById("countdown");

const interval = setInterval(() => {

    count--;

    if(count > 0){

        countdown.innerHTML = count;

    }else{

        countdown.style.display = "none";

        clearInterval(interval);

        showWords();
    }

},1000);

/* WORD SCREEN */

const words = [
    "HAPPY",
    "BIRTHDAY",
    "TO",
    "ALMIRA SHIDQIYA ❤️"
];

let wordIndex = 0;

const wordScreen = document.getElementById("wordScreen");

function showWords(){

    wordScreen.style.display = "flex";

    wordScreen.innerHTML = words[wordIndex];

    setTimeout(() => {

        wordIndex++;

        if(wordIndex < words.length){

            wordScreen.style.animation = "none";

            void wordScreen.offsetWidth;

            wordScreen.style.animation = "fadeWord 1s ease";

            showWords();

        }else{

            wordScreen.style.display = "none";

            startMain();
        }

    },1200);
}

/* START MAIN */

function startMain(){

    /* background jadi pink */
    document.body.classList.add("pink-bg");

    /* matrix hilang */
    document.body.classList.add("hide-matrix");

    /* main muncul */
    document.getElementById("main").style.display = "flex";

    /* amplop buka */
    setTimeout(() => {

        document.getElementById("wrap").classList.add("open");

    },500);
}

/* MATRIX */

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "HAPPY BIRTHDAY ";

const size = 14;

const columns = canvas.width / size;

const drops = [];

for(let x = 0; x < columns; x++){

    drops[x] = 1;
}

function draw(){

    ctx.fillStyle = "rgba(0,0,0,.07)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#ff4fa3";

    ctx.font = size + "px monospace";

    for(let i = 0; i < drops.length; i++){

        const text =
        letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(
            text,
            i * size,
            drops[i] * size
        );

        if(
            drops[i] * size > canvas.height
            &&
            Math.random() > .975
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw,35);

/* RESPONSIVE CANVAS */

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* STARS */

const stars = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const s = document.createElement("div");

    s.classList.add("star");

    s.style.left = Math.random() * 100 + "%";

    s.style.top = Math.random() * 100 + "%";

    s.style.animationDelay =
    Math.random() * 5 + "s";

    stars.appendChild(s);
}

/* HEART RAIN */

function createFallingHeart(){

    const heart = document.createElement("div");

    heart.classList.add("falling-heart");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    (Math.random() * 25 + 15) + "px";

    heart.style.animationDuration =
    (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },7000);
}

setInterval(createFallingHeart,200);

/* FLOAT HEART */

function createHeart(){

    const h = document.createElement("div");

    h.classList.add("float-heart");

    h.innerHTML = "❤️";

    h.style.left =
    Math.random() * 100 + "%";

    h.style.fontSize =
    (Math.random() * 20 + 15) + "px";

    document.body.appendChild(h);

    setTimeout(() => {

        h.remove();

    },5000);
}

setInterval(createHeart,700);

/* PAGE SYSTEM */

const cards = document.querySelectorAll(".card");

let current = 0;

function showPage(index){

    cards.forEach(card => {

        card.classList.remove("active");
    });

    cards[index].classList.add("active");
}

/* NEXT PAGE */

document
.querySelector(".click-right")
.onclick = () => {

    if(current < cards.length - 1){

        current++;

        showPage(current);
    }
}

/* PREVIOUS PAGE */

document
.querySelector(".click-left")
.onclick = () => {

    if(current > 0){

        current--;

        showPage(current);
    }
}
