const navbar = document.querySelector('.navbar')
const btns = document.querySelectorAll('.container .btn')

btns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        // let btnColor = btn.getAttribute('data-color') 
        navbar.style.background = btn.getAttribute('data-color') 
    })
})