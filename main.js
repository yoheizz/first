const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const cw = canvas.width = 500;
const ch = canvas.height = 500;
const frogSize = 100;

let frogX, frogY;

const fillKaeru = () => {
    context.clearRect(0, 0, cw, ch);

    frogX = Math.random() * (cw - frogSize);
    frogY = Math.random() * (ch - frogSize);

    context.font = "50px Arial";
    context.fillText("🐸", frogX, frogY);
    
    // context.strokeRect(frogX + 3, frogY - 43, 55, 55);
}

fillKaeru();

canvas.addEventListener("click", (e) => {

    const clickX = e.offsetX;
    const clickY = e.offsetY;

    if (
        clickX >= frogX &&
        clickX <= frogX + 55 &&
        clickY >= frogY - 43 &&
        clickY <= frogY + 55
    ) {
        fillKaeru();
    }
});
