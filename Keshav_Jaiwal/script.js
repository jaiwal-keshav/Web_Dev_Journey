
let selectedText = null;
let fontSelect, fontSizeInput, colorInput, fontStyleSelect;

function addText() {
    const canvas = document.getElementById('canvas');
    const text = document.createElement('div');
    text.className = 'draggable';
    text.contentEditable = true;
    text.innerText = 'New Text';
    text.style.color = 'black';
    text.style.padding = '10px'; 
    canvas.appendChild(text);
    text.style.outline = 'none';

    makeDraggable(text);
    addSelectListeners(text);
}

function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function addSelectListeners(element) {
    element.addEventListener('click', (e) => {
        e.stopPropagation(); 
        selectText(element);
    });
}

function selectText(element) {
    if (selectedText) {
        selectedText.style.outline = 'none';
    }

    selectedText = element;
    selectedText.style.outline = '2px dotted blue ';

    applyTextStyle(selectedText);
}

function applyTextStyle(element) {
    if (!fontSelect) {
        fontSelect = document.getElementById('font');
        fontSizeInput = document.getElementById('fontSize');
        colorInput = document.getElementById('color');
        fontStyleSelect = document.getElementById('fontStyle');

        fontSelect.addEventListener('change', () => {
            if (selectedText) {
                selectedText.style.fontFamily = fontSelect.value;
            }
        });

        fontSizeInput.addEventListener('input', () => {
            if (selectedText) {
                selectedText.style.fontSize = `${fontSizeInput.value}px`;
            }
        });

        colorInput.addEventListener('input', () => {
            if (selectedText) {
                selectedText.style.color = colorInput.value;
            }
        });

        fontStyleSelect.addEventListener('change', () => {
            if (selectedText) {
                selectedText.style.fontStyle = fontStyleSelect.value;
            }
        });
    }

    fontSelect.value = element.style.fontFamily || 'Arial, sans-serif';
    fontSizeInput.value = parseInt(element.style.fontSize, 10) || 16;
    colorInput.value = element.style.color || '#000000';
    fontStyleSelect.value = element.style.fontStyle || 'normal';
}

document.getElementById('canvas').addEventListener('click', () => {
    if (selectedText) {
        selectedText.style.outline = 'none';
        selectedText = null;
    }
});
