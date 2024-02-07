const body = document.querySelector('body')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', function() {
    this.classList.toggle('moon')
    if(this.classList.toggle('sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1.2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1.2s';
    }
})
