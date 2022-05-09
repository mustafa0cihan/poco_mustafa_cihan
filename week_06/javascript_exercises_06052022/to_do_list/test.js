const btn = document.querySelector("button")
const input = document.querySelector("#todo")
const ol = document.querySelector("ol")
let todos = [
    {
        id: 1,
        text: "Emre",
        isDone: true
    }
]
const renderContent = (pArray) => {
    ol.innerHTML = pArray.map((item, index) => {
        return `
        <li class="list-item">
        <input type="checkbox" ${item.isDone && "checked"}  name="todo${index}" id="${item.id}" />
        <label style=${"text-decoration:line-through"} for="${item.id}">${item.text}</label>
      </li>
        `
    }).join("")
}
renderContent(todos)
btn.addEventListener("click", () => {
    const text = input.value
    let id = 0;
    id = todos.length == 0 ? id = 1 : id = todos[todos.length - 1].id + 1
    const newItem = {
        id,
        text,
        isDone: false
    }
    todos = [...todos, newItem]
    renderContent(todos)
})
const checkBoxes = document.querySelectorAll("ol input")
checkBoxes.forEach(item => {
    item.addEventListener("change", (e) => {
        todos = todos.map(item => item.id == e.currentTarget.id ? { ...item, isDone: !item.isDone } : item)
    })
})