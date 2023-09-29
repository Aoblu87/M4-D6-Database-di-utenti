let tableContainer = document.querySelector('#table-container')
let inputQuery = document.querySelector('#input-query')
let chooseOne = document.querySelector('#choose-one')
let notSelected = document.querySelector('#not-selected')
let nameQuery = document.querySelector('#nameQuery')
let usernameQuery = document.querySelector('#usernamequery')
let emailQuery = document.querySelector('#emailQuery')
let searchBtn = document.querySelector('#search-btn')

let results = []


async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.log(error)
    }
}

window.onload = async function () {
    try {
        const result = await getUsers()


        tableContainer = document.querySelector('#table-container')
        inputQuery = document.querySelector('#input-query')
        chooseOne = document.querySelector('#choose-one')
        notSelected = document.querySelector('#not-selected')
        nameQuery = document.querySelector('#nameQuery')
        usernameQuery = document.querySelector('#usernamequery')
        emailQuery = document.querySelector('#emailQuery')
        searchBtn = document.querySelector('#search-btn')


        showResult(result)

    } catch (error) {
        console.log(error)
    }
}

// mostro nel DOM i risultati
function showResult(data) {
    results = data
    tableContainer = document.querySelector('#table-container')
    tableContainer.innerHTML = data.map(result =>
        /*html*/`
        <tr>
        <th>${result.id}</th>
        <td>${result.name}</td>
        <td>${result.username}</td>
        <td>${result.email}</td>
      </tr>

        `
    ).join('')

}


// Funzione di ricerca

function query() {
    let query = inputQuery.value.toLowerCase()


    let userResult = []


    // ricerca per nome
    if (chooseOne.value === '1') {
        userResult = results.filter(word => {
            lowerName = word.name.toLowerCase()
            return lowerName.includes(query)
        })
        // ricerca per username

    } else if (chooseOne.value === '2') {
        userResult = results.filter(word => {
            lowerUsername = word.username.toLowerCase()
            return lowerUsername.includes(query)
        })

        // ricerca per email

    } else if (chooseOne.value === '3') {

        userResult = results.filter(word => {
            lowerEmail = word.email.toLowerCase()

            return lowerEmail.includes(query)
        })

        // campo ricerca non selezionato
    } else {


        alert('Seleziona un campo nella ricerca')
    }


    showResult(userResult)
}