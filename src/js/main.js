const voucherBtn = document.querySelector('.shop-button')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup-close')
const overlay = document.querySelector('.overlay')



window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav') 
    const navScroll = window.scrollY
    if(navScroll >= 10) {
        nav.style.backgroundColor = 'black'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})

voucherBtn.addEventListener('click', () => {
    popup.classList.add('active')
    overlay.classList.add('active')
    // document.body.classList.add('modal-open');
    overlay.addEventListener('click', () => {
        popup.classList.remove('active')
        overlay.classList.remove('active')
        // document.body.classList.remove('modal-open');
    })
})
popupClose.addEventListener('click', () => {
    popup.classList.remove('active')
    overlay.classList.remove('active')
    // document.body.classList.remove('modal-open');
})
