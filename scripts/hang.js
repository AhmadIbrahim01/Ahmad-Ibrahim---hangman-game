var img_src = [
    "./assets/right-leg.svg",
    "./assets/left-leg.svg",
    "./assets/right-hand.svg",
    "./assets/left-hand.svg",
    "./assets/body.svg",
    "./assets/head.svg",
]

var img_class = [
    "right-leg",
    "left-leg",
    "right-hand",
    "left-hand",
    "body",
    "head",
]

var hang = document.getElementById("hang")

function hangMan(){
    const img = document.createElement('img');
    img.src = img_src[tries]
    img.classList = img_class[tries]
    hang.appendChild(img);
}