const form = document.getElementById('form')

form.addEventListener('submit', function (e) {

    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    fetch("https://gorest.co.in/public/v2/users", {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
})
