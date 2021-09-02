window.addEventListener("load", async () => {
    updateCatName(await makeRequest(`/api/catFacts`, "GET"))

})


// Get random cat-fact from external API
async function getCatFact() {
    let response = await fetch("https://catfact.ninja/fact?max_length=140")
    console.log(response)
    let result = await response.json()
    console.log(result.fact)
    const printFact = document.getElementById("printedFact")
    printFact.innerText = result.fact

}

// Saves cat name to API from the input field
async function addCatName() {
    let catName = document.getElementById("inputName").value
    console.log(catName)
    const status = await makeRequest("/api/catFacts", "POST", { catName })
    updateCatName(await makeRequest(`/api/catFacts`, "GET"))

}

// Prints the cats name
function updateCatName(catNames) {
    let findCatName = document.getElementById("catName")
    findCatName.innerHTML = catNames.map(c => c.catName).join('<br>')
    console.log(catNames)
}

// Deletes (kills) the cat
async function killCat() {
    let catName = document.getElementById("inputName").value
    updateCatName(await makeRequest(`/api/catFacts/${catName}`, "DELETE"))
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