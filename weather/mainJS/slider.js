
let item = document.querySelectorAll('#item');
let cuarrent = 0;
let buttonDown = document.querySelector('#button-down');


function slider() {

    for (let i = 0; i < item.length; i++) {
        item[i].classList.add('active');
        item[cuarrent].classList.remove('active');
    }

    if (cuarrent === item.length - 1) {
        cuarrent = 0
    } else { cuarrent++ }
}

buttonDown.onclick = slider;