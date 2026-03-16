const btnMenuIcon = document.querySelector('#menu-mobile')
const btnAbrirMenu = document.querySelector('#menu-hamburguer-icon')
const btnFecharMenu = document.querySelector('#menu-x-icon')
const menuMobileContainer = document.querySelector('#menu-mobile-container')
const header = document.querySelector('header')
const espacoLogotipo = document.querySelector('#espaco-logo')

btnMenuIcon.addEventListener('click', ()=> {
    btnAbrirMenu.classList.toggle('visible')
    btnFecharMenu.classList.toggle('visible')
    menuMobileContainer.classList.toggle('visible')
    header.classList.toggle('menu-open')
    espacoLogotipo.classList.toggle('visible')
})
