const btnMenuIcon = document.querySelector('#menu-mobile')
const btnAbrirMenu = document.querySelector('#menu-hamburguer-icon')
const btnFecharMenu = document.querySelector('#menu-x-icon')
const menuMobileContainer = document.querySelector('#menu-mobile-container')
const header = document.querySelector('header')
const espacoLogotipo = document.querySelector('#espaco-logo')

let breakpointPadrao = 580
// Se a tela for a geral, os limites do menu mudam.
if (window.location.href.includes('geral.html') || window.location.href.includes('jogadores.html')){
    breakpointPadrao = 873
    console.log('Passou dentro')
} else console.log('Passou fora')
// Define o limite com base no resultado anterior.
const MOBILE_BREAKPOINT = breakpointPadrao

function toggleMenu() {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return

    btnAbrirMenu.classList.toggle('visible')
    btnFecharMenu.classList.toggle('visible')
    menuMobileContainer.classList.toggle('visible')
    header.classList.toggle('menu-open')
    espacoLogotipo.classList.toggle('visible')
}

function closeMenu() {
    btnAbrirMenu.classList.add('visible')
    btnFecharMenu.classList.remove('visible')
    menuMobileContainer.classList.remove('visible')
    header.classList.remove('menu-open')
    espacoLogotipo.classList.remove('visible')
}

btnMenuIcon.addEventListener('click', toggleMenu)

window.addEventListener('resize', () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
        closeMenu()
    }
})
