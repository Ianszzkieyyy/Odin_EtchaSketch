'use strict';

const container = document.querySelector('.container');
const colorInput = document.querySelector('#color-picker');
const colorInputHex = document.querySelector('#cp-value');
const sliderValue = document.querySelector('#slider');
const sliderText = document.querySelector('.slider-text');
const clearBtn = document.querySelector('.clear');
const randBtn = document.querySelector('.random');

let panels, panel;
let isRandomMode = false;


const MakeGrid = (size) => {
    const sizeSqrd = Math.pow(size, 2);

    for (let i = 0; i < sizeSqrd; i++) {
        panel = document.createElement('div');
        panel.classList.add('panel');
        container.append(panel);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    }

    panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        panel.addEventListener('mouseenter', function(e) {
            if (isRandomMode === false) e.target.style.background = colorInput.value;
            else if (isRandomMode === true) e.target.style.background = GenerateColor();
        });
    });
}

const GenerateColor = () => {
    let randColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randColor}`;
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

randBtn.addEventListener('click', () => {
    if (isRandomMode === false) {
        randBtn.style.background = '#EDC610';
        randBtn.style.border = '2px solid #EDC610';
        isRandomMode = true;
    }
    else if (isRandomMode === true) {
        randBtn.style.background = 'transparent';
        randBtn.style.border = '2px solid #202020';
        isRandomMode = false;
    }
});

sliderValue.addEventListener('input', () => {
    document.querySelectorAll('.panel').forEach(e => e.remove());
    sliderText.textContent = `${sliderValue.value}x${sliderValue.value}`;
    MakeGrid(sliderValue.value);
});

