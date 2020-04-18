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

const dragElmnts = () => {

  const games = document.querySelectorAll('.game')
  const dropboxs = document.querySelectorAll('.dropbox')
  // console.log(games)

  function dragstart(event) {
    console.log(event.target.id)
    event.dataTransfer.setData('text', event.target.id)
  }
  function dragover(event) {
    event.preventDefault()
  }

  function dragenter(event) {
    event.preventDefault()
  }

  function drop(event) {
    event.preventDefault()
    const draggedGame = event.dataTransfer.getData('text')
    console.log(draggedGame)
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

window.addEventListener('DOMContentLoaded', (event) => {
  greetingMessage()
  dragElmnts()
});
