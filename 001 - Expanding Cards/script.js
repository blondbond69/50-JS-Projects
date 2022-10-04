const panels = document.querySelectorAll('.panel'); 

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

var x;
console.log(x);
x = "Hello \n Again \n You Looking \n For Me"
console.log(x);