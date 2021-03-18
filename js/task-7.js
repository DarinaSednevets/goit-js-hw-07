// Задание 7
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате
// при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>

const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
refs.input.setAttribute('min', '30');
refs.input.setAttribute('max', '100');
refs.input.setAttribute('value', '10');

function changeFontSize(event) {
    let fontSize = event.target.value;
    refs.span.style.fontSize = fontSize + 'px';
}
refs.input.addEventListener('input', changeFontSize);