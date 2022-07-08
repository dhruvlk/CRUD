// GET

function loadTable() {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://gorest.co.in/public/v2/users")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8",),
        xhttp.setRequestHeader("Authorization", "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e")
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var trHTML = ''
            const objects = JSON.parse(this.responseText)
            for (let object of objects) {
                trHTML += '<tr>'
                trHTML += '<td>' + object['id'] + '</td>'
                // trHTML += '<td><img width="50px" src="' + object['name'] + '" class="name"></td>'
                trHTML += '<td>' + object['name'] + '</td>'
                trHTML += '<td>' + object['email'] + '</td>'
                trHTML += '<td>' + object['gender'] + '</td>'
                trHTML += '<td>' + object['status'] + '</td>'
                trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + object['id'] + ')">Edit</button>'
                trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + object['id'] + ')">Del</button></td>'
                trHTML += "</tr>"
            }
            document.getElementById("mytable").innerHTML = trHTML
        }
    }
}

loadTable()

// POST

function showUserCreateBox() {
    Swal.fire({
        title: 'Create user',
        html:
            '<input id="id" type="hidden">' +
            '<input id="name" class="swal2-input" placeholder="Name">' +
            '<input id="email" class="swal2-input" placeholder="Email">' +
            '<input id="gender" class="swal2-input" placeholder="Gender">' +
            '<input id="status" class="swal2-input" placeholder="Status">',
        focusConfirm: false,
        preConfirm: () => {
            userCreate()
        }
    })
}

function userCreate() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const gender = document.getElementById("gender").value
    const status = document.getElementById("status").value

    const xhttp = new XMLHttpRequest()
    xhttp.open("POST", "https://gorest.co.in/public/v2/users")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8",)
    xhttp.setRequestHeader("Authorization", "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e")

    xhttp.send(JSON.stringify({
        "name": name, "email": email, "gender": gender, "status": status,
    }))
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText)
            Swal.fire(objects['message'])
            loadTable()
        }
    }
}

// UPDATE



function userEdit(eee) {
    console.log(eee)
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const gender = document.getElementById("gender").value
    const status = document.getElementById("status").value

    const xhttp = new XMLHttpRequest()
    xhttp.open("PUT", "https://gorest.co.in/public/v2/comments")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.setRequestHeader("Authorization", "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e")

    xhttp.send(JSON.stringify({
        "id": id, "name": name, "email": email, "gender": gender, "status": status
    }))
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText)
            Swal.fire(objects['message'])
            loadTable()
        }
    }
}

function showUserEditBox(id) {
    console.log(id)
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://gorest.co.in/public/v2/users/" + id)
    xhttp.setRequestHeader('Accept', 'application/json')
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8",)
    xhttp.setRequestHeader("Authorization", "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e")
    xhttp.send()
    xhttp.onreadystatechange = function (ee) {
        console.log(ee)
        const objects = JSON.parse(this.responseText)
        const dataUser = objects['dataUser']
        console.log(dataUser, "lelelele")
        Swal.fire({
            title: 'Edit User',
            html:
                '<input id="id" type="hidden" >' +
                '<input id="name" class="swal2-input" placeholder="name" + dataUser.name + >' +
                '<input id="email" class="swal2-input" placeholder="email"></br></br>' +
                '<input type="radio" name="gender" value="male"> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '<input type="radio" name="gender" value="female"> Female </br></br>' +
                '<select name="status" id="status">' +
                '<option value="active">active</option>' +
                '<option value="inactive">inactive</option>' +
                '</select>',
            // '<input id="status" class="swal2-input" placeholder="status">',
            focusConfirm: false,
            preConfirm: () => {
                userEdit()
            }
        })
    }
}

// DELETE

// function userDelete(id) {
//     console.log(id, "leeeeeeeeeee")
//     const xhttp = new XMLHttpRequest()
//     xhttp.open("DELETE", "https://gorest.co.in/public/v2/users/" + id)
//     xhttp.setRequestHeader("Content-Type", "application/json;")
//     xhttp.setRequestHeader("Authorization", "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e")

//     xhttp.send()
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//             const objects = JSON.parse(this.responseText)
//             Swal.fire(objects['message'])
//             loadTable()
//         }
//     }
// }

function userDelete(id) {
    const xhttp = new XMLHttpRequest()
    xhttp.open("DELETE", "https://gorest.co.in/public/v2/users/" + id)
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.setRequestHeader("Authorization", "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e")

    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText)
            Swal.fire(objects['message'])
            loadTable()
        }
    }
}
