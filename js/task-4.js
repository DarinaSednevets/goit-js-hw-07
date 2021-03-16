

const valueSpanRef = document.querySelector('#value');
let valueRef = Number(valueSpanRef.textContent);
const btnDecRef = document.querySelector
    ('button[data-action ="decrement"]');
const btnIncRef = document.querySelector
    ('button[data-action="increment"]');

const increment = () => {
    valueRef += 1;
    valueSpanRef.textContent = valueRef;
    return valueRef;
}

const decrement = () => {
    valueRef -= 1;
    valueSpanRef.textContent = valueRef;
    return valueRef;
}

btnDecRef.addEventListener('click', decrement);
btnIncRef.addEventListener('click', increment);


