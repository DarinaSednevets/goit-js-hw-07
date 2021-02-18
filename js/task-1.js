const listRef = document.querySelector('#categories');
const listItems = Array.from(listRef.children);

console.log(`В списке ${listItems.length} категории.`);

listItems.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`)
    console.log(`Количество элементов: ${element.querySelector('ul').children.length}`)
});


