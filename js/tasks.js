// // const firstListRef = document.querySelector('#categories');
// // const firstListItems = Array.from(firstListRef.children);

// // console.log(`В списке ${firstlistItems.length} категории.`);

// // firstListItems.forEach(element => {
// //     console.log(`Категория: ${element.querySelector('h2').textContent}`)
// //     console.log(`Количество элементов: ${element.querySelector('ul').children.length}`,
// //     );
// // });


// const mainListRef = document.querySelector('#categories');
// const mainListItems = Array.from(mainListRef.children);

// console.log(`В списке ${mainListItems.length} категории.`);

// mainListItems.forEach(el => {
//     console.log(`Категория: ${el.querySelector('h2').textContent}`);
//     console.log(
//         `Количество элементов: ${el.querySelector('ul').children.length}`,
//     );
// });


// // 2-----------------


// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
// ];

// const createListItems = listItems =>
//     listItems.map(function (item) {
//         const itemRef = document.createElement('li');
//         itemRef.textContent = item;
//         return itemRef;
//     });

// const listRef = document.querySelector('#ingredients');
// listRef.append(...createListItems(ingredients));

// // 3---------------

// const images = [
//     {
//         url:
//             'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'White and Black Long Fur Cat',
//     },
//     {
//         url:
//             'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//         url:
//             'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Group of Horses Running',
//     },
// ];

// const makeGallery = listItems => {
//     return listItems.reduce((acc, item) => {
//         acc += `<li class="gallery__item">
//         <img src="${item.url}"
//         alt = "${item.alt}"
//         class= "gallery__img"/></li>`;
//         return acc;
//     }, '');

// };

// const galleryListRef = document.querySelector('#gallery');
// galleryListRef.classList.add('gallery__list');
// galleryListRef.insertAdjacentHTML('afterbegin', makeGallery(images));

// // 4------------


// let spanRef = document.querySelector('#value');
// let counterValue = Number(spanRef.textContent);
// const increment = () => {
//     counterValue += 1;
//     spanRef.textContent = counterValue;
//     return counterValue;
// };

// const decrement = () => {
//     counterValue -= 1;
//     spanRef.textContent = counterValue;
//     return counterValue;
// };

// const decrementRef = document.querySelector(
//     'button[data-action="decrement"]',
// );
// const incrementRef = document.querySelector(
//     'button[data-action= "increment"]',
// );

// decrementRef.addEventListener('click', decrement);
// incrementRef.addEventListener('click', increment);




// // Задание 4
// // Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// // Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// // Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// // Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// //     < div id = "counter" >
// //   <button type="button" data-action="decrement">-1</button>
// //   <span id="value">0</span>
// //   <button type="button" data-action="increment">+1</button>
// // </div >


// // 5-------------


// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');
// function makeName(event) {
//     outputRef.textContent =
//         event.target.value === '' ? 'незнакомец' : event.target.value;
// }
// inputRef.addEventListener('input', makeName);




// // Задание 5
// // Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// //     подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// // < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
// //     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


// // 6---------------


// const inputRef = document.querySelector('#validation-input');

// function validInput(event) {
//     event.target.value.length === Number(inputRef.getAttribute('data-length'))
//         ? inputRef.classList.add('valid')
//         : inputRef.classList.add('invalid');
// }

// function removeClass() {
//     if (inputRef.classList.contains('valid')) {
//         inputRef.classList.remove('valid');
//     }
//     if (inputRef.classList.contains('invalid')) {
//         inputRef.classList.remove('invalid');
//     }
// }


// inputRef.addEventListener('blur', validInput);
// inputRef.addEventListener('focus', removeClass);


// // Задание 6
// // Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// // < input
// // type = "text"
// // id = "validation-input"
// // data - length="6"
// // placeholder = "Введи 6 символов"
// //     />
// //     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// // Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// // 7------------------


// const inputRef = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text');
// inputRef.setAttribute('min', '5');
// inputRef.setAttribute('max', '100');
// inputRef.setAttribute('value', '20');

// function changeFontSize(event) {
//     const size = event.target.value;
//     spanRef.style.fontSize = size + 'px';
// }
// inputRef.addEventListener('input', changeFontSize);


// // Задание 7
// // Напиши скрипт, который реагирует на изменение значения input#font
// //     - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font
// //     - size.В результате при перетаскивании ползунка будет меняться размер текста.

// // < input id = "font-size-control" type = "range" />
// // <br />
// // <span id="text">Абракадабра!</span>