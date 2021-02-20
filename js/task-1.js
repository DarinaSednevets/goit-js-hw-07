// const firstListRef = document.querySelector('#categories');
// const firstListItems = Array.from(firstListRef.children);

// console.log(`В списке ${firstlistItems.length} категории.`);

// firstListItems.forEach(element => {
//     console.log(`Категория: ${element.querySelector('h2').textContent}`)
//     console.log(`Количество элементов: ${element.querySelector('ul').children.length}`,
//     );
// });


const mainListRef = document.querySelector('#categories');
const mainListItems = Array.from(mainListRef.children);

console.log(`В списке ${mainListItems.length} категории.`);

mainListItems.forEach(el => {
    console.log(`Категория: ${el.querySelector('h2').textContent}`);
    console.log(
        `Количество элементов: ${el.querySelector('ul').children.length}`,
    );
});