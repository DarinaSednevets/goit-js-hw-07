// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
//  Если введено подходящее количество, 
//  то border инпута становится зеленым, если неправильное - 
// красным.
// Для добавления стилей, используй CSS - 
// классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

const refs = {
    input: document.querySelector('#validation-input'),
}


function onInputChange(event) {
    event.target.value.length === Number(refs.input.getAttribute('data-length')) ?
        refs.input.classList.add('valid')
        : refs.input.classList.add('invalid');
}

function cleanClasses() {
    if (refs.input.classList.contains('valid')) {
        refs.input.classList.remove('valid');
    }
    if (refs.input.classList.contains('invalid')) {
        refs.input.classList.remove('invalid');
    };

}


refs.input.addEventListener('blur', onInputChange);
refs.input.addEventListener('focus', cleanClasses);

