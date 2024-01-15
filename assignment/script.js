// let currentTextId = 0;
// let canvas = document.getElementById('canvas');
// let textHistory = [];
// let historyIndex = -1;

// function addText() {
//     const text = document.getElementById('text').value;
//     const font = document.getElementById('font').value;
//     const fontSize = document.getElementById('fontSize').value + 'px';
//     const color = document.getElementById('color').value;

//     const newText = createTextElement(text, font, fontSize, color);

//     recordHistory('add', newText);
// }

// function createTextElement(text, font, fontSize, color) {
//     const newText = document.createElement('div');
//     newText.className = 'text-input';
//     newText.style.fontFamily = font;
//     newText.style.fontSize = fontSize;
//     newText.style.color = color;
//     newText.innerHTML = text;

//     newText.setAttribute('draggable', 'true');
//     newText.setAttribute('id', 'text_' + currentTextId);
//     currentTextId++;

//     newText.addEventListener('dragstart', function (event) {
//         event.dataTransfer.setData('text/plain', this.id);
//     });

//     newText.addEventListener('click', function () {
//         selectText(this);
//     });

//     canvas.appendChild(newText);
//     return newText;
// }

// function addTextInput(event) {
//     const x = event.clientX;
//     const y = event.clientY;

//     const textInput = document.createElement('input');
//     textInput.setAttribute('type', 'text');
//     textInput.className = 'text-input';
//     textInput.style.position = 'absolute';
//     textInput.style.left = x + 'px';
//     textInput.style.top = y + 'px';
//     textInput.style.border = '2px dotted #000';

//     textInput.addEventListener('blur', function () {
//         this.parentNode.removeChild(this);
//         const newText = createTextElement(this.value, 'Arial', '16px', '#000000');
//         recordHistory('add', newText);
//     });

//     canvas.appendChild(textInput);
// }

// function selectText(textElement) {
//     const selected = document.querySelector('.selected');
//     if (selected) {
//         selected.classList.remove('selected');
//     }
//     textElement.classList.add('selected');
// }

// function moveSelectedText(event) {
//     const selected = document.querySelector('.selected');
//     if (selected) {
//         const x = event.clientX;
//         const y = event.clientY;
//         selected.style.left = x + 'px';
//         selected.style.top = y + 'px';
//     }
// }

// function undo() {
//     if (historyIndex > 0) {
//         historyIndex--;
//         const state = textHistory[historyIndex];
//         restoreState(state);
//     }
// }

// function redo() {
//     if (historyIndex < textHistory.length - 1) {
//         historyIndex++;
//         const state = textHistory[historyIndex];
//         restoreState(state);
//     }
// }

// function recordHistory(action, element) {
//     // Save the current state before applying any change
//     const currentState = saveState();

//     // Clear any redo history
//     textHistory = textHistory.slice(0, historyIndex + 1);

//     // Record the action and new state
//     textHistory.push({ action, state: currentState });
//     historyIndex++;

//     // Apply the change
//     if (action === 'add') {
//         canvas.appendChild(element);
//     }
// }

// function saveState() {
//     // Save the current state of the canvas
//     const state = [];
//     const elements = document.querySelectorAll('.text-input');
//     elements.forEach(element => {
//         const { id, style, innerHTML } = element.cloneNode(true);
//         state.push({ id, style, innerHTML });
//     });
//     return state;
// }

// function restoreState(state) {
//     // Restore the state of the canvas
//     canvas.innerHTML = '';
//     state.forEach(({ id, style, innerHTML }) => {
//         const element = document.createElement('div');
//         element.className = 'text-input';
//         element.id = id;
//         element.style = style;
//         element.innerHTML = innerHTML;

//         element.addEventListener('dragstart', function (event) {
//             event.dataTransfer.setData('text/plain', this.id);
//         });

//         element.addEventListener('click', function () {
//             selectText(this);
//         });

//         canvas.appendChild(element);
//     });
// }

// // Event listeners
// canvas.addEventListener('mousemove', moveSelectedText);
// document.getElementById('addTextBtn').addEventListener('click', addText);
// document.getElementById('undoBtn').addEventListener('click', undo);
// document.getElementById('redoBtn').addEventListener('click', redo);
// document.getElementById('canvas').addEventListener('click', addTextInput);
