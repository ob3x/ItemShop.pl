
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav') 
    const navScroll = window.scrollY
    if(navScroll >= 10) {
        nav.style.backgroundColor = 'black'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})