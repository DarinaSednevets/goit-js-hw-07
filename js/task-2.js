
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const potion = [
    'смола',
    'пыльца тюльпана',
    'шнурки с ботинок',
    'молоко с красителем',
    'тысячелетняя пыль',
    'щупальца осьминога',
];


const makeListItems = listItems =>
    listItems.map(item => {
        const itemRef = document.createElement('li');
        itemRef.textContent = item;
        return itemRef;
    })


const listIngredientsRef = document.querySelector('#ingredients');
listIngredientsRef.append(...makeListItems(ingredients));



// -------------------------------



const makerOfPotion = listItems =>
    listItems.map(ingredient => {
        const item = document.createElement('li');
        item.textContent = ingredient;
        return item;
    })

const listingref = document.querySelector('#ingredients');
listingref.append(...makerOfPotion(potion));