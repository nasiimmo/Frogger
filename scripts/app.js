
// ! Elements
const grid = document.querySelector('.grid')
const cells = []

// #lives-display
const livesDisplay = document.getElementById('lives-display')
// #score-display
const scoreDisplay = document.getElementById('score-display')
// High score
const highScoreDisplay = document.querySelector('.high-score')

// ! Variables

// Lives
let lives = 3
// Game interval
let gameInterval
// Is game active?
let gameActive = false

const startPos = 210
let currentPos = startPos


let imagePos = 0
const supermanStartPos = 15
let supermanCurrent = supermanStartPos

const supermanStartPos2 = 16
let supermanCurrent2 = supermanStartPos2



const supermanStartPos3 = 30
let supermanCurrent3 = supermanStartPos3

const supermanStartPos4 = 38
let supermanCurrent4 = supermanStartPos4

const batmanStartPos1 = 60
let batmanCurrent1 = batmanStartPos1

const batmanStartPos2 = 75
let batmanCurrent2 = batmanStartPos2

const batmanStartPos3 = 90
let batmanCurrent3 = batmanStartPos3

const batmanStartPos4 = 180
let batmanCurrent4 = batmanStartPos4

const batarangStartPos1 = 120
let batarangCurrent1 = batarangStartPos1

const batarangStartPos2 = 135
let batarangCurrent2 = batarangStartPos2

const batarangStartPos3 = 150
let batarangCurrent3 = batarangStartPos3

const batarangStartPos4 = 195
let batarangCurrent4 = batarangStartPos4



// ! Grid
// * Making a grid in JS
const width = 15 // this is both the width and height of our board
const cellCount = width * width // this variable represents the number of cells in our grid

// This function will create all of the grid cells and append them to the existing grid
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    // cell.innerText = i //remove this to remove the numbers on ur grid
    cell.id = i
    // Set width and height of the div cells
    cell.style.width = `${100 / width}%`
    cell.style.border = 'none'
    // Add styles to remove space between grid cells
    cell.style.margin = '0'
    cell.style.padding = '0'
    grid.append(cell)
    cells.push(cell)
  }
  addJoker(currentPos)
  addWall()
  addName()
  addFinish()
  setInterval(moveImageOne, 700)
  setInterval(moveImageTwo, 800)
  setInterval(moveImageThree, 700)
  setInterval(moveImageFour, 700)
  setInterval(moveBatmanOne, 1000)
  setInterval(moveBatmanTwo, 600)
  setInterval(moveBatmanThree, 2000)
  setInterval(moveBatmanFour, 1000)
  setInterval(moveBatarangOne, 1000)
  setInterval(moveBatarangTwo, 1000)
  setInterval(moveBatarangThree, 1000)
  setInterval(moveBatarangFour, 1000)
}

function addSuperman() {
  cells[supermanCurrent].classList.add('superman')
}
function removeSuperman() {
  cells[supermanCurrent].classList.remove('superman')
}

function addSuperman2() {
  cells[supermanCurrent2].classList.add('superman')
}
function removeSuperman2() {
  cells[supermanCurrent2].classList.remove('superman')
}

function addSuperman3() {
  cells[supermanCurrent3].classList.add('superman')
}
function removeSuperman3() {
  cells[supermanCurrent3].classList.remove('superman')
}
function addSuperman4() {
  cells[supermanCurrent4].classList.add('superman')
}
function removeSuperman4() {
  cells[supermanCurrent4].classList.remove('superman')
}


function addBatman1() {
  cells[batmanCurrent1].classList.add('batman')
}
function removeBatman1() {
  cells[batmanCurrent1].classList.remove('batman')
}
function addBatman2() {
  cells[batmanCurrent2].classList.add('batman')
}
function removeBatman2() {
  cells[batmanCurrent2].classList.remove('batman')
}
function addBatman3() {
  cells[batmanCurrent3].classList.add('batman')
}
function removeBatman3() {
  cells[batmanCurrent3].classList.remove('batman')
}
function addBatman4() {
  cells[batmanCurrent4].classList.add('batman')
}
function removeBatman4() {
  cells[batmanCurrent4].classList.remove('batman')
}


function addBatarang1() {
  cells[batarangCurrent1].classList.add('batarang')
}
function removeBatarang1() {
  cells[batarangCurrent1].classList.remove('batarang')
}
function addBatarang2() {
  cells[batarangCurrent2].classList.add('batarang')
}
function removeBatarang2() {
  cells[batarangCurrent2].classList.remove('batarang')
}
function addBatarang3() {
  cells[batarangCurrent3].classList.add('batarang')
}
function removeBatarang3() {
  cells[batarangCurrent3].classList.remove('batarang')
}
function addBatarang4() {
  cells[batarangCurrent4].classList.add('batarang')
}
function removeBatarang4() {
  cells[batarangCurrent4].classList.remove('batarang')
}

function moveImageOne() {
  removeSuperman()

  imagePos--

  if (imagePos < 0) {
    imagePos = width - 1
  }

  supermanCurrent--

  if (supermanCurrent % width === width - 1) {
    supermanCurrent += width
  }

  addSuperman()
}

function moveImageTwo() {
  removeSuperman2()

  imagePos--

  if (imagePos < 0) {
    imagePos = width - 1
  }

  supermanCurrent2--

  if (supermanCurrent2 % width === width - 1) {
    supermanCurrent2 += width
  }

  addSuperman2()
}


function moveImageThree() {
  removeSuperman3()

  imagePos++

  if (imagePos >= width) {
    imagePos = 0
  }

  supermanCurrent3++

  if (supermanCurrent3 % width === 0) {
    supermanCurrent3 -= width
  }

  addSuperman3()
}

function moveImageFour() {
  removeSuperman4()

  imagePos++

  if (imagePos >= width) {
    imagePos = 0
  }

  supermanCurrent4++

  if (supermanCurrent4 % width === 0) {
    supermanCurrent4 -= width
  }

  addSuperman4()
}

function moveBatmanOne() {
  removeBatman1()
  

  imagePos++
  
  if (imagePos >= width) {
    imagePos = 0
  }

  batmanCurrent1++

  if (batmanCurrent1 % width === 0) {

    batmanCurrent1 -= width
  }
  
  addBatman1()
}

function moveBatmanTwo() {
  removeBatman2()
  
  imagePos-- 
  
  if (imagePos < 0) {
    imagePos = width - 1 
  }

  batmanCurrent2--

  if (batmanCurrent2 % width === width - 1) {
    batmanCurrent2 += width
  }
  
  addBatman2()
}


function moveBatmanThree() {
  removeBatman3()
  
  // Increment the image position by 1
  imagePos++
  
  if (imagePos >= width) {
    imagePos = 0
  }
  batmanCurrent3++

  if (batmanCurrent3 % width === 0) {
    batmanCurrent3 -= width
  }
  
  addBatman3()
}

function moveBatmanFour() {
  removeBatman4()
  
  imagePos--
  
  if (imagePos < 0) {
    imagePos = width - 1
  }
  
  batmanCurrent4 = batmanCurrent4 - (batmanCurrent4 % width) + imagePos
  addBatman4()
}




function moveBatarangOne() {
  removeBatarang1()
  
  imagePos++
  
  if (imagePos >= width) {
    imagePos = 0
  }
  

  batarangCurrent1++
  

  if (batarangCurrent1 % width === 0) {
    batarangCurrent1 -= width
  }
  
  // Add the batarang to its new position
  addBatarang1()
}

function moveBatarangTwo() {
  removeBatarang2()
  
  imagePos++
  
  if (imagePos >= width) {
    imagePos = 0
  }
  batarangCurrent2 = batarangCurrent2 - (batarangCurrent2 % width) + imagePos
  addBatarang2()
}
function moveBatarangThree() {
  removeBatarang3()
  
  imagePos++
  
  if (imagePos >= width) {
    imagePos = 0
  }

  batarangCurrent3++
  if (batarangCurrent3 % width === 0) {
    
    batarangCurrent3 -= width
  }
  
  addBatarang3()
}


function moveBatarangFour() {
  removeBatarang4()

  imagePos++

  if (imagePos >= width) {
    imagePos = 0
  }

  batarangCurrent4++

  if (batarangCurrent4 % width === 0) {

    batarangCurrent4 -= width
  }

  addBatarang4()
}



function resetVariables(){
  clearInterval(gameInterval)
  lives = 3
  livesDisplay.innerText = '❤️❤️❤️'
  resetToStartPosition()
}


// function for elimination
function removeLife() {
  
}
function resetToStartPosition() {
  removeJoker()
  // Reset current position to start position
  currentPos = startPos
  addJoker(currentPos)
}

// ! Executions
function addJoker() {
  cells[currentPos].classList.add('joker')
}

function removeJoker() {
  cells[currentPos].classList.remove('joker')
}
const wallPos = [
  165, 166, 167, 171,
  172, 173, 177, 178,
  179, 45, 46, 47,
  48, 51, 52, 53,
  54, 55, 58, 59,
  106, 107, 108,
  115, 116, 117,
  0, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 14
]

function addWall() {

  for (const position of wallPos) {
    cells[position].classList.add('wall')
  }
}

function addName() {

  for (const position of namePos) {
    cells[position].classList.add('joker-name')
  }
}
const namePos = [
  210
]
function addFinish() {

  for (const position of finishPos) {
    cells[position].classList.add('joker-finish')
  }
}
const finishPos = [
  1, 13
]



// On keypress update cat position
function keyPress(evt) {
  const key = evt.code
  let previousPosition = currentPos
  removeJoker()

  if (key === 'ArrowUp' && currentPos >= width) {
    currentPos -= width
  } else if (key === 'ArrowDown' && currentPos + width < cells.length) {
    currentPos += width
  } else if (key === 'ArrowLeft' && currentPos % width !== 0) {
    currentPos--
  } else if (key === 'ArrowRight' && currentPos % width !== width - 1) {
    currentPos++
  }

  addJoker()
  if (currentPos === supermanCurrent || currentPos === supermanCurrent2 || currentPos === supermanCurrent3 || currentPos === supermanCurrent4 || currentPos === batmanCurrent1 || currentPos === batmanCurrent2 || currentPos === batmanCurrent3 || currentPos === batmanCurrent4 || currentPos === batarangCurrent1 || currentPos === batarangCurrent2 || currentPos === batarangCurrent3 || currentPos === batarangCurrent4 ) {
    // Remove a life
    lives -= 1
    // Update lives display
    livesDisplay.innerText = lives ? '❤️'.repeat(lives) : '💔'
    
    // Check for gameover (0 lives)
    if (lives === 0) {
      endGame()
    } else {
      resetToStartPosition()
    }
  }
  if (cells[currentPos].classList.contains('wall')){
    currentPos = previousPosition
  }
  
  if (cells[currentPos].classList.contains('joker-finish')){
    finishGame()
  }
}

function endGame() {
  // Clear gameInterval
  clearInterval(gameInterval)
  // Alert game over
  setTimeout(() => {
    alert('GAME OVER!!!!\nYou lost to your arch nemesis!')
    // Set game to inactive
    gameActive = false
  }, 5)
  resetVariables()
  
}
function finishGame() {
  // Clear gameInterval
  clearInterval(gameInterval)
  // Alert game over
  setTimeout(() => {
    alert('Winner !!!!\nYou won against your arch nemesis!')
    // Set game to inactive
    gameActive = false
  }, 5)
  resetVariables()
  
}

// ! Events
// Keypress events
// These events happen on the document rather than on an element
document.addEventListener('keydown', keyPress)

// ! Page Load
createGrid()