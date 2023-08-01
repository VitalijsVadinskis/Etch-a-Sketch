const grid = document.getElementById('container')





function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i = 0; i < size * size; i++){
        let square = document.createElement('div')
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        })
        grid.appendChild(square)
    }
}

function gridSize (a){
    let size = a
    if (a >= 2 || a <=100){
        createGrid(a)
    } else 
        alert('choose size between 2 and 100')
}
const griddy = prompt()
gridSize(griddy)
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