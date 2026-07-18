const bgMusic = document.getElementById("bgMusic");

const title = document.getElementById("title");

const bear = document.getElementById("bear");

const message = "Do you love me? ❤️";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        title.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

typeWriter();


const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const hearts = document.getElementById("hearts");

let yesScale = 1;

// Move No button
function moveButton(e) {

    const rect = noBtn.getBoundingClientRect();

    const mouseX = e.clientX || (e.touches && e.touches[0].clientX);
    const mouseY = e.clientY || (e.touches && e.touches[0].clientY);

    const dx = rect.left - mouseX;
    const dy = rect.top - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 120) {

        let newX = Math.random() * (window.innerWidth - 150);
        let newY = Math.random() * (window.innerHeight - 80);

        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        yesScale += 0.12;
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

document.addEventListener("mousemove", moveButton);
document.addEventListener("touchmove", moveButton);

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// Yes clicked
yesBtn.onclick = () => {

    document.querySelector(".container").style.display = "none";

    document.getElementById("celebration")
        .classList.add("show");

    explodeHearts();
    launchConfetti();

    bgMusic.volume = 0;
bgMusic.play();

const fade = setInterval(() => {

    if (bgMusic.volume < 0.95) {
        bgMusic.volume += 0.05;
    } else {
        clearInterval(fade);
    }

}, 200);
};

// Floating hearts
setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-20px";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animation =
"float 6s linear forwards, sway 2s ease-in-out infinite";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),6000);

},350);

const style=document.createElement("style");

style.innerHTML=`
@keyframes float{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}
}`;

bear.addEventListener("click", () => {
    
    bear.classList.add("spin");
    
    setTimeout(() => {
        bear.classList.remove("spin");
    }, 700);
    
});

document.head.appendChild(style);

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "absolute";

    sparkle.style.left = Math.random()*220 + "px";

    sparkle.style.top = Math.random()*180 + "px";

    sparkle.style.fontSize = "18px";

    sparkle.style.opacity = "0";

    sparkle.style.animation = "sparkle 2s forwards";

    document.querySelector(".sparkles")
        .appendChild(sparkle);

    setTimeout(()=>sparkle.remove(),2000);

},400);

const heartContainer = document.getElementById("heart-container");

function explodeHearts(){

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.className="explode-heart";

        heart.innerHTML="💖";

        const angle=Math.random()*Math.PI*2;

        const distance=150+Math.random()*250;

        const x=Math.cos(angle)*distance;

        const y=Math.sin(angle)*distance;

        heart.style.left="50%";
        heart.style.top="50%";

        heart.style.setProperty("--x",x+"px");
        heart.style.setProperty("--y",y+"px");

        heart.animate([
            {
                transform:"translate(0,0) scale(.5)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) scale(1.6)`,
                opacity:0
            }
        ],{

            duration:2000,
            easing:"ease-out"

        });

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function launchConfetti() {

    confetti.length = 0;

    for (let i = 0; i < 180; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -20,
            size: Math.random() * 8 + 4,
            speed: Math.random() * 5 + 2,
            color: `hsl(${Math.random()*360},100%,60%)`
        });
    }

    animateConfetti();
}

function animateConfetti() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c => {

        ctx.fillStyle = c.color;
        ctx.fillRect(c.x,c.y,c.size,c.size);

        c.y += c.speed;
        c.x += Math.sin(c.y/25);

    });

    if(confetti.some(c => c.y < canvas.height)){
        requestAnimationFrame(animateConfetti);
    }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}

        heartContainer.appendChild(heart);

        setTimeout(()=>heart.remove(),2000);

    }

}