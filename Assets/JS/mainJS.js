//chamando elementos para o botão dropDown
let dropDownMother = window.document.querySelector('.dropDown-mother');
let dropDownChild = window.document.querySelector('.dropDown-child');


//Addicionando eventos de escutadores de eventos / movimentos de mouse
dropDownMother.addEventListener('mouseenter', showCh) //mostrar
dropDownMother.addEventListener('mouseleave', hideCh) //ocultar


function showCh(){
    dropDownChild.classList.add('show-child')
    dropDownChild.classList.remove('dropDown-child')
}

function hideCh(){
    dropDownChild.classList.remove('show-child')
    dropDownChild.classList.add('dropDown-child')
}
