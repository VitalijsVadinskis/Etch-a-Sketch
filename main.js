const sizeButton = document.body.querySelectorAll('input')
const container = document.getElementById('container')


sizeButton.forEach(e => {

    e.addEventListener('click', function(){
         console.log(e.value)
         for(i = 0; i < e.value; i++){
            let div = document.createElement('div')
            div.className = 'square'
            container.appendChild(div)


         }
    })
    
    



})

