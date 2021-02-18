
const inputRef = document.querySelector('#validation-input');

function validInput(event) {
    event.target.value.length === Number(inputRef.getAttribute('data-length'))
        ? inputRef.classList.add('valid')
        : inputRef.classList.add('invalid');
}

function removeClass() {
    if (inputRef.classList.contains('valid')) {
        inputRef.classList.remove('valid');
    }
    if (inputRef.classList.contains('invalid')) {
        inputRef.classList.remove('invalid');
    }
}


inputRef.addEventListener('blur', validInput);
inputRef.addEventListener('focus', removeClass);


// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.