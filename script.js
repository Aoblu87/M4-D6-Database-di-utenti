let tableContainer = document.querySelector('#table-container')


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

        showResult(result)

    } catch (error) {
        console.log(error)
    }
}

// mostro nel DOM i risultati
function showResult(data) {
    tableContainer = document.querySelector('#table-container')
    tableContainer.innerHTML = data.map(result => 
        /*html*/`
        <tr>
            <th scope="row">${result.id}</th>
            <td>${result.name}</td>
            <td>${result.username}</td>
            <td>${result.email}</td>
        </tr>
        `
).join('')
   
}


