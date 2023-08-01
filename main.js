const grid = document.getElementById('container')
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
grid.style.gridTemplateRows = 'repeat(16, 1fr)';




function createGrid() {
    for(i = 0; i < 256; i++){
        let square = document.createElement('div')
        grid.appendChild(square)
    }
}

createGrid()
// const squares = document.getElementsByClassName('square')

// sizeButton.forEach(e => {

//     e.addEventListener('click', function(){
//          container.innerHTML = ''
//          for(i = 0; i < e.value; i++){
//             let div = document.createElement('div')
//             div.className = 'square'
//             container.appendChild(div)
//          }
//     })
// })