const container = document.querySelector('.container');
const colorInput = document.querySelector('#color-picker');
const colorInputHex = document.querySelector('#cp-value');
const sliderValue = document.querySelector('#slider');
const sliderText = document.querySelector('.slider-text');
const clearBtn = document.querySelector('.clear-btn');

let panels, panel;

const MakeGrid = function(size) {
    sizeSqrd = Math.pow(size, 2);

    for (let i = 0; i < sizeSqrd; i++) {
        panel = document.createElement('div');
        panel.classList.add('panel');
        container.append(panel);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        console.log("panel added");
    }

    panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        panel.addEventListener('mouseenter', function(e) {
            e.target.style.background = colorInput.value;
        });
    });
}

MakeGrid(sliderValue.value);

colorInput.addEventListener('input', () => {
    colorInputHex.textContent = colorInput.value
});

clearBtn.addEventListener('click', () => {
    panels.forEach((panel) => {
        panel.style.background = 'white';
    });
});

sliderValue.addEventListener('input', () => {
    document.querySelectorAll('.panel').forEach(e => e.remove());
    sliderText.textContent = `${sliderValue.value}x${sliderValue.value}`;
    MakeGrid(sliderValue.value);
});

