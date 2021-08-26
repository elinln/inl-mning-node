async function saveTodo() {
    let response = await fetch("https://catfact.ninja/fact?max_length=140")
    console.log(response)
    let result = await response.json()
    console.log(result.fact)
    const printFact = document.getElementById("printedFact")
    printFact.innerText = result.fact

}


async function getAndPrintTodos() {
    const todos = await makeRequest("http://localhost:5000/api/catFacts", "GET")
    console.log(todos)

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