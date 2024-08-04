let img = document.getElementById('div');
let text = document.getElementById('text');
function siguientetxt() {
    img.style.backgroundImage = `url(${imgs[i]})`;  
    text.innerHTML = fraces[i];
    if (i < 4 ) {
    i++;
    }
    console.log(i)
}   
let i = 0;
const fraces = ["Eres el amor de mi vida, y te deseo un feliz aniversario mi amor <3, eres todo para mi",
    "Eres la mejor novia del mundo y quiero que estes siempre conmigo mi fabi preciosa <3, eres el universo para mi",
    "Y si fueras alguien de un anime serias ella porque yo seria:-> dale a siguiente cariño uwu",
    "seria el porque estaria bien loquito por ti y solo te amaria a ti uwu <3",
    "quedate por siempre a mi lado y de nuevo feliz aniversario mi amor <3, nunca me llegues a cambiar eres mi mundo"
]
const imgs = ['./Zenitsu2.jpg', './Zenitsu3.jpg', './Zenitsu4.jpg', './Zenitsu4.jpg', './Zenitsu5.jpg']
