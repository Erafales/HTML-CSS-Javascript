const qrBox = document.getElementById('qr-box');
let qrImg = document.querySelector('.qr-img');
const qrInput = document.querySelector('.qr-input');

function generateQr(){
    if (qrInput.value === '') {
        alert('You inserted an invalid value!');
    } else {
        console.log(`Inserted value: ${qrInput.value}`)
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrInput.value;
        qrInput.value = ''
    }
}

document.querySelector('.js-remove-qr')
    .addEventListener('click', () => {   
        qrImg.src = '';
    });