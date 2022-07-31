document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newTaskDescription = document.getElementById('new-task-description').value
    inputTasks(newTaskDescription)
    form.reset()
    // console.log(e.target.children[1].value)
  })
});

function inputTasks (task) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'x'
  li.textContent = `${task} `
  li.appendChild(btn)
  // console.log(li)
  document.getElementById('tasks').appendChild(li)
}

function deleteTask (e) {
  e.target.parentNode.remove()
}