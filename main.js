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
        gridSize(prompt())
    })
}

function getColor() {
    if(color == 'random'){
        //Generates and sets color as random color
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else
        this.style.backgroundColor = color;
}

function changeColor(choice){
    color = choice
}

getSize()