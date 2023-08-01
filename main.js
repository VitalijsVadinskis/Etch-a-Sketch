const grid = document.getElementById('container')
let color = 'black'

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i = 0; i < size * size; i++){
        let square = document.createElement('div')
        square.addEventListener('mouseover', getColor)
        square.style.backgroundColor = 'white'
        grid.appendChild(square)
    }
}

function gridSize (a){
    if (a <= 1 || a >= 101){
        alert('choose size between 2 and 100')
    } else 
        createGrid(a)
}

function getSize () {
    const button = document.getElementById('sizeButton')

    button.addEventListener('click', () => {
        grid.innerHTML = ''
        gridSize(prompt(),)
    })
}

function getColor() {

    this.style.backgroundColor = color;
}

function changeColor(choice){
    color = choice
}
getSize()

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