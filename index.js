let titleInfo = document.getElementById('text')
let exploreButton = document.getElementById('btn')

let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')

let linkExpanded = document.getElementById('linkExpanded')

let typed = new Typed(titleInfo, {
    strings:['JavaScript', 'NodeJS', 'TypeScript', 'ReactJS'],
    typeSpeed: 110,
    backSpeed: 40,
    loop: true
})

exploreButton.addEventListener('click', () => {
    scroll({
        top: innerHeight,
        behavior: "smooth"
    })
})

ScrollReveal({
    origin: 'right',
    distance: '300px',
    duration: 1500
}).reveal('.sub-plataform img');

ScrollReveal({
    origin: 'left',
    distance: '300px',
    duration: 1500
}).reveal('.content-about, .sub');

ScrollReveal({
    origin: 'bottom',
    distance: '300px',
    duration: 1500
}).reveal('.info-about-plataform img, .info');

openMenu.addEventListener('click', () => {
    linkExpanded.style.display = 'block'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'

    text.style.display = 'none'

})

closeMenu.addEventListener('click', () => {
    linkExpanded.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'

    text.style.display = 'block'
})