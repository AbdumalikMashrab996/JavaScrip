const open = document.querySelector('.open')
const brackdrop = document.querySelector('.brackdrop')
const mobileNav = document.querySelector('.mobile')
const chooseBtn = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelectorAll('.modal-button')

for (let i = 0; i < chooseBtn.length; i++) {
 chooseBtn[i].addEventListener('click', function() {
    brackdrop.style.display = 'block'
    modal.style.display = 'block'
})
}

open.addEventListener('click', function() {
 brackdrop.style.display = 'block'
 mobileNav.style.display = 'block'
})

brackdrop.addEventListener('click', function() {
    brackdrop.style.display = 'none'
    mobileNav.style.display = 'none'
    modal.style.display = 'none'
})

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function () {
        modal.style.display ='none'
        brackdrop.style.display ='none'
    })
}