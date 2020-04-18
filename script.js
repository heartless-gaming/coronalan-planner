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

  const games = document.querySelector('.game')
  const dropboxs = document.querySelectorAll('.dropbox')
  console.log(games)
  function dragover(event) {
    event.preventDefault()
  }

  function dragcenter(event) {
    event.preventDefault()
  }

  function drop() {
    this.append(games)
  }

  dropboxs.forEach((dropbox) => {
    dropbox.addEventListener('dragover', dragover)
    dropbox.addEventListener('dragcenter', dragcenter)
    dropbox.addEventListener('drop', drop)
  })

}

window.addEventListener('DOMContentLoaded', (event) => {
  greetingMessage()
  dragElmnts()
});
