const greetingMessage = function () {
  console.log('  #####   ')
  console.log(' #######  ')
  console.log('#  ###  # ' + ' Hello There')
  console.log('#   #   # ')
  console.log('######### ' + ' Come contribute to the code !')
  console.log(' ### ###  ')
  console.log('  #####   ' + ' github.com/heartless-gaming/coronalan-planner')
  console.log('  # # #   ')
}

function dragstart(event) {
  event.dataTransfer.setData('text', event.target.id)
}

const dragElmnts = () => {

  const games = document.querySelectorAll('.js-game')
  const dropboxs = document.querySelectorAll('.js-dropbox')


  function dragover(event) {
    event.preventDefault()
  }

  function dragenter(event) {
    event.preventDefault()
  }

  function drop(event) {
    event.preventDefault()
    const draggedGame = event.dataTransfer.getData('text')
    this.append(document.getElementById(draggedGame))
  }

  games.forEach((game) => {
    game.addEventListener('dragstart', dragstart)
  })

  dropboxs.forEach((dropbox) => {
    dropbox.addEventListener('dragover', dragover)
    dropbox.addEventListener('dragenter', dragenter)
    dropbox.addEventListener('drop', drop)
  })
}


const addGame = () => {
  const addGameInput = document.querySelector('.js-addGameInput')
  const addGameBtn = document.querySelector('.js-addGameBtn')
  const gameList = document.querySelector('.game-list')

  const newGame = (game) => {
    if (game.length > 0) {
      const node = document.createElement("p");
      node.id = Date.now()
      node.classList.add('btn', 'js-game')
      node.setAttribute('draggable', true)
      node.textContent = game
      node.addEventListener('dragstart', dragstart)

      gameList.append(node)
    }
  }

  addGameBtn.addEventListener('click', (event) => {
    newGame(addGameInput.value)
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  greetingMessage()
  dragElmnts()
  addGame()
});
