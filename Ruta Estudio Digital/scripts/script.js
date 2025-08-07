// JS para alternar clase al hacer click
navegador  = document.querySelector('.navegacion-principal');
titulo = document.querySelector('h1');



document.querySelector('.menu-nav').addEventListener('click', function() {
    navegador.classList.toggle('activo');
});

 