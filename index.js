let titleInfo = document.getElementById('text')
let exploreButton = document.getElementById('btn')

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
    duration: 2000
}).reveal('#phone-image');

ScrollReveal({
    origin: 'left',
    distance: '300px',
    duration: 2000
}).reveal('.content-about, .sub');