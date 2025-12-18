let bloc1 = document.querySelector('.bloc1')
let bloc2 = document.querySelector('.bloc2')
let bloc3 = document.querySelector('.bloc3')
let bloc4 = document.querySelector('.bloc4')
//sert a rien dcp > ajouter plus d'objets...
let bloc5 = document.querySelectorAll('.bloc5')
let bloc6 = document.querySelectorAll('.bloc6')
let bloc7 = document.querySelectorAll('.bloc7')
let bloc8 = document.querySelectorAll('.bloc8')

let blocs = document.querySelectorAll('.bloc5, .bloc6, .bloc7, .bloc8')

//fonction d'apparission/dissparission du bloc
bloc1.addEventListener('mouseenter', function(){
    bloc5.forEach(function(bloc){
        bloc.classList.add('show')
    }) 
})
bloc1.addEventListener('mouseleave', function(){
    bloc5.forEach(function(bloc){
        bloc.classList.remove('show')
    }) 
})
//répétitions x4 (trouver plus rapide ? / moins chiant)
//bloc2
bloc2.addEventListener('mouseenter', function(){
    bloc6.forEach(function(bloc){
        bloc.classList.add('show')
    })
})
bloc2.addEventListener('mouseleave', function(){
    bloc6.forEach(function(bloc){
        bloc.classList.remove('show')
    }) 
})

//bloc2 
bloc3.addEventListener('mouseenter', function(){
    bloc7.forEach(function(bloc){
        bloc.classList.add('show')
    })
})
bloc3.addEventListener('mouseleave', function(){
    bloc7.forEach(function(bloc){
        bloc.classList.remove('show')
    }) 
})

//bloc4
bloc4.addEventListener('mouseenter', function(){
    bloc8.forEach(function(bloc){
        bloc.classList.add('show')
    })
})
bloc4.addEventListener('mouseleave', function(){
    bloc8.forEach(function(bloc){
        bloc.classList.remove('show')
    }) 
})

// bloc1.addEventListener('click', function(){
//     blocs.forEach(function(bloc){
//         bloc.classList.remove('show')
//     })
// })