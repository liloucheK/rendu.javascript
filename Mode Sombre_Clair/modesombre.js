let elements = document.querySelectorAll('.cube, body, .title1, .title2, .text')
let toggleBtn = document.getElementById('toggleBtn')

toggleBtn.addEventListener('click', function(){
    elements.forEach(function(element){
        element.classList.toggle('dark')
    })
})

