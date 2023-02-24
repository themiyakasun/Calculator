const action = document.querySelector('.action input');
const result = document.querySelector('.result input');
const btns = document.querySelectorAll('.button');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        targetValue = e.target.value;
        if (targetValue === 'AC') {
            action.value = '';
            result.value = '';
        } else if (targetValue === 'DE') {
            action.value = action.value.toString().slice(0, -1);
        } else if (targetValue === '=') {
            result.value = '=' + eval(action.value);
        } else {
            action.value += targetValue;
        }

    })
})