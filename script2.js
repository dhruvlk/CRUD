// GET
function loadTable() {
    // function trclick() { console.log('tr clicked') };
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://gorest.co.in/public/v2/users")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        xhttp.setRequestHeader(
            "Authorization",
            "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
        )
    xhttp.send()
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var trHTML = ""
            const objects = JSON.parse(this.responseText)
            objects.map((object) => {
                trHTML += "<tr>"
                trHTML += "<td>" + object["id"] + "</td>"
                // trHTML += '<td><img width="50px" src="' + object['name'] + '" class="name"></td>'
                trHTML += "<td id='" + object['id'] + "'onclick='trclick(event.target)'>" + object["name"] + "</td>"
                trHTML += "<td>" + object["email"] + "</td>"
                trHTML += "<td>" + object["gender"] + "</td>"
                trHTML += "<td>" + object["status"] + "</td>"
                trHTML +=
                    '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' +
                    object["id"] +
                    ')">Edit</button>'
                trHTML +=
                    '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' +
                    object["id"] +
                    ')">Del</button></td>'
                trHTML += "</tr>"
            })
            document.getElementById("mytable").innerHTML = trHTML
        }
    }
}

loadTable()

function trclick(el) { console.log(el.id); window.location.href = "/posts.html?id=" + el.id };


// POST

function showUserCreateBox() {
    Swal.fire({
        title: "Create user",
        html:
            '<input id="id" type="hidden">' +
            '<input id="name" class="swal2-input" placeholder="Name">' +
            '<input id="email" class="swal2-input" pattern="[^ @]*@[^ @]*" placeholder="Email"></br></br>' +
            //   '<input id="gender" class="swal2-input" placeholder="Gender">' +
            //   '<input id="status" class="swal2-input" placeholder="Status">',
            '<input id="gender" type="radio" name="gender" value="male"> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<input id="gender" type="radio" name="gender" value="female" > Female </br></br>' +
            '<select name="status" id="status" >' +
            '<option value="active">active</option>' +
            '<option value="inactive">inactive</option>' +
            "</select>",
        focusConfirm: false,
        preConfirm: () => {
            userCreate()
        },
    })
}
loadTable()

function userCreate() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const gender = document.getElementById("gender").value
    const status = document.getElementById("status").value

    const xhttp = new XMLHttpRequest()
    xhttp.open("POST", "https://gorest.co.in/public/v2/users")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.setRequestHeader(
        "Authorization",
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
    )

    xhttp.send(
        JSON.stringify({
            name: name,
            email: email,
            gender: gender,
            status: status,
        })
    )
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText)
            Swal.fire(objects["message"])
            loadTable()
        }
    }
}

// UPDATE

function userEdit() {
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const gender = document.getElementById("gender").value
    const status = document.getElementById("status").value
    "id -> ", id
    const xhttp = new XMLHttpRequest()
    xhttp.open("PUT", `https://gorest.co.in/public/v2/users/${id}`)
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.setRequestHeader(
        "Authorization",
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
    )

    xhttp.send(
        JSON.stringify({
            id: id,
            name: name,
            email: email,
            gender: gender,
            status: status,
        })
    )
    xhttp.onreadystatechange = function () {
        this.readyState, this.status
        if (this.readyState == 4 && this.status == 200) {
            this.responseText

            const objects = JSON.parse(this.responseText)
            Swal.fire(objects["message"])
            loadTable()
        }
    }
}

function getGender(gender, ourValue) {
    if (gender === ourValue) return "checked"
    else return ""
}

function getStatus(status) {
    if (status === "inactive") return "selected"
}

function showUserEditBox(id) {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://gorest.co.in/public/v2/users/" + id)
    xhttp.setRequestHeader("Accept", "application/json")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.setRequestHeader(
        "Authorization",
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
    )
    xhttp.send()
    xhttp.onreadystatechange = function () {
        const objects = JSON.parse(this.responseText)
        "objects :>", objects
        console.log("objects", objects)
        Swal.fire({
            title: "Edit User",
            html:
                '<input id="id" type="hidden" value=' +
                objects["id"] +
                ">" +
                '<input id="name" class="swal2-input" placeholder="First" value="' +
                objects["name"] +
                '">' +
                '<input id="email" class="swal2-input" pattern="[^ @]*@[^ @]*" placeholder="email"  value="' +
                objects["email"] +
                '"></br></br>' +
                // '<input id="gender" class="swal2-input" placeholder="gender"  value="' + objects['gender'] + '"></br></br>' +
                // '<input id="status" class="swal2-input" placeholder="status"  value="' + objects['status'] + '"></br></br>'
                `<input id="gender" type="radio" name="gender" value="male" ${getGender(
                    objects["gender"],
                    "male"
                )} > Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
                `<input id="gender" type="radio" name="gender" value="female" ${getGender(
                    objects["gender"],
                    "female"
                )} > Female </br></br>` +
                '<select name="status" id="status" >' +
                `<option id="status" value="active" name="status" ${getStatus(
                    objects["status"]
                )} >active</option>` +
                `<option id="status" value="inactive" name="status" ${getStatus(
                    objects["status"]
                )} >inactive</option>` +
                "</select>",
            // '<input id="status" class="swal2-input" placeholder="status">',
            focusConfirm: false,
            preConfirm: () => {
                userEdit()
            },
        })

        // if (objects) {
        //   document.getElementById("name").value = object.name.innerHTML;
        // }
    }
}

// DELETE

// function userDelete(id) {
//     (id, "leeeeeeeeeee")
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
    xhttp.setRequestHeader(
        "Authorization",
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
    )

    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText)
            Swal.fire(objects["message"])
            loadTable()
        }
    }
}



