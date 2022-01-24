const container = document.querySelector('.container');
const colorInput = document.querySelector('#color-picker');
const colorInputHex = document.querySelector('#cp-value');

let gridCount = 50; // TEMPORARY
let panels;

const makeGrid = function(size) {
    sizeSqrd = Math.pow(size, 2);

    for (let i = 0; i < sizeSqrd; i++) {
        const panel = document.createElement('div');
        panel.classList.add('panel');
        container.append(panel);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        console.log("panel added");
    }

    panels = document.querySelectorAll('.panel');
}
makeGrid(gridCount);

colorInput.addEventListener('input', (e) => {
    colorInputHex.textContent = colorInput.value
    return colorInput.value;
});

panels.forEach((panel) => {
    panel.addEventListener('mouseenter', function(e) {
        e.target.style.background = colorInput.value;
    });
});

