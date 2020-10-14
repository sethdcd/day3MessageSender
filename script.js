(function() {

const msgValue = document.querySelector('#inputMsg');
const form = document.querySelector('#messageSender');

form.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#displayMsg').innerText = msgValue.value;
    msgValue.value = '';
});
})();