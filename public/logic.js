async function saveTodo() {
    const task = document.getElementById("inputTask").value
    const status = await makeRequest("http://localhost:5000/api/todo", "POST", { todo: task })
    console.log(status)
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => console.log(json));
    await getAndPrintTodos()
}

async function getAndPrintTodos() {
    const todos = await makeRequest("http://localhost:5000/api/todo", "GET")
    console.log(todos)


    // rendera ut 
    for (let i = 0; i < todos.length; i++) {
        const printedTodo = document.getElementById("printedTodo").value
    }

}




async function makeRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            headers: { "Content-Type": "application/json" },
            method,
            body: JSON.stringify(body)
        })

        const result = await response.json()

        return result
    } catch (err) {
        console.error(err)
    }
}