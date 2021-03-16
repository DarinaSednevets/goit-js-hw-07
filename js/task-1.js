const categoriesRef = document.querySelector('#categories');
const liItemsRef = Array.from(categoriesRef.children);

console.log(`В списке ${liItemsRef.length} категории.`);


liItemsRef.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`)
    console.log(`Количество элементов: ${element.querySelector('ul').children.length}`)

})


