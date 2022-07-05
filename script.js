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
    console.log(completedata)
    // document.getElementById('root').innerHTML = completedata[2].name
    let data1 = " "
    completedata.map((values) => {
        // console.log(values)
        data1 += `
                <p>${values.name}</p>
                <p>${values.id}</p>
                `
    })
    document.getElementById('cards').innerHTML = data1
}).catch((err) => {
    console.log(err)
})
