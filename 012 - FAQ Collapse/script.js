const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

// const tittles = document.querySelectorAll('.faq-tittle');

// tittles.forEach(tittle => {
//     tittle.addEventListener('click', () => {
//         tittle.parentNode.classList.tittle('active')
//     })
// })