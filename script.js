let menu = document.querySelector('nav ul');
let hanburger = document.querySelector('nav .mobile');

hanburger.addEventListener('click',function(){
    menu.classList.toggle('show');
})