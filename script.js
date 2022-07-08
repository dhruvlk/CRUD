// const getNewData = () => {
//     fetch("https://gorest.co.in/public/v2/users")
//         .then((data) => data.json())
//         .then((data) => console.log(data))

// }

// getNewData()
// const URL = "https://gorest.co.in/public/v2/users"

// async function getDataFromApi(URL) {
//     const response = await fetch(URL)
//     var data = await response.json()
//     console.log(data)
// }

// getDataFromApi(URL)

fetch('https://gorest.co.in/public/v2/users').then((data) => {
    // console.log(data)
    return data.json()
}).then((completedata) => {
    // console.log(completedata)
    // document.getElementById('root').innerHTML = completedata[2].name
    let data1 = " "
    completedata.map((values) => {
        // console.log(values)
        data1 += `
        <table>
        <tr>
            <td>${values.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>${values.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>${values.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>${values.gender}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>${values.status}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
    </table>
                `
    })
    document.getElementById('cards').innerHTML = data1
}).catch((err) => {
    console.log(err)
})




const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    console.log(e)
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    fetch("https://gorest.co.in/public/v2/users", {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            gender: "male",
            status: "active"
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
        }
    })
        .then(function (response) {
            // fetch('https://gorest.co.in/public/v2/users')
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
})


// const PATCH = (id) => {
//     console.log(id)
//     fetch("https://gorest.co.in/public/v2/users/3", {
//         //requires an id to patch
//         method: 'PATCH',
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             gender: "male",
//             status: "active"
//         }),
//         headers: {
//             'Content-type': `application/json; charset=UTF-8`
//         },
//     }).then((response) => response.json())
// }


fetch('https://gorest.co.in/public/v2/users/3', {
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => console.log(data))

