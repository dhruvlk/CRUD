// GET
function loadTable(url) {
    // function trclick() { console.log('tr clicked') };
    const xhttp = new XMLHttpRequest()

    xhttp.open("GET", url)

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        xhttp.setRequestHeader(
            "Authorization",
            "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
        )
    // xhttp.send()
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var trHTML = ""
            const objects = JSON.parse(this.responseText)

            objects.map((object) => {
                trHTML += "<tr>"
                trHTML += "<td>" + object["id"] + "</td>"
                trHTML += "<td>" + object["user_id"] + "</td>"
                // trHTML += '<td><img width="50px" src="' + object['name'] + '" class="name"></td>'
                trHTML += "<td>" + object["title"] + "</td>"
                trHTML += "<td>" + object["body"] + "</td>"
                // trHTML += "<td>" + object["gender"] + "</td>"
                // trHTML += "<td>" + object["status"] + "</td>"
                // trHTML +=
                //     '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' +
                //     object["id"] +
                //     ')">Edit</button>'
                // trHTML +=
                //     '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' +
                //     object["id"] +
                //     ')">Del</button></td>'
                trHTML += "</tr>"
            })
            document.getElementById("mytable").innerHTML = trHTML
        }
    }
}

window.onload = function () {
    let params = Object.fromEntries(new URLSearchParams(window.location.search).entries())
    let user_id = params.id
    let url = `https://gorest.co.in/public/v2/posts/`

    if (user_id) {
        let new_url = url + user_id
        console.log(new_url)
        loadTable(new_url)
    } else {
        loadTable(id)
    }

}

// loadTable()

// function trclick() { console.log('tr clicked') };


// POST

// function showUserCreateBox() {
//     console.log("user-------------------->")
//     Swal.fire({
//         title: "Create user",
//         html:
//             // '<input id="id" type="hidden">' +
//             '<input id="user_id" class="swal2-input" placeholder="User Id">' +
//             '<input id="title" class="swal2-input" placeholder="Title">' +
//             '<input id="body" class="swal2-input"  placeholder="body"></br></br>',
//         //   '<input id="gender" class="swal2-input" placeholder="Gender">' +
//         //   '<input id="status" class="swal2-input" placeholder="Status">',
//         // '<input id="gender" type="radio" name="gender" value="male"> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
//         // '<input id="gender" type="radio" name="gender" value="female" > Female </br></br>' +
//         // '<select name="status" id="status" >' +
//         // '<option value="active">active</option>' +
//         // '<option value="inactive">inactive</option>' +
//         // "</select>",
//         focusConfirm: false,
//         preConfirm: () => {
//             userCreate()
//         },
//     })
// }
// loadTable()

// function userCreate() {
//     console.log("1--------------------->")
//     const title = document.getElementById("title").value
//     const body = document.getElementById("body").value
//     // const gender = document.getElementById("gender").value
//     // const status = document.getElementById("status").value

//     const xhttp = new XMLHttpRequest()
//     xhttp.open("POST", "https://gorest.co.in/public/v2/posts")
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//     xhttp.setRequestHeader(
//         "Authorization",
//         "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
//     )

//     xhttp.send(
//         JSON.stringify({
//             title: title,
//             body: body,
//             // gender: gender,
//             // status: status,
//         })
//     )
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const objects = JSON.parse(this.responseText)
//             Swal.fire(objects["message"])
//             loadTable()
//         }
//     }
// }

// UPDATE

// function userEdit() {
//     // const id = document.getElementById("id").value
//     const title = document.getElementById("title").value
//     const body = document.getElementById("body").value
//     // const gender = document.getElementById("gender").value
//     // const status = document.getElementById("status").value
//     // "id -> ", id
//     const xhttp = new XMLHttpRequest()
//     xhttp.open("PATCH", `https://gorest.co.in/public/v2/posts/`)
//     xhttp.setRequestHeader("Content-Type", "application/json")
//     xhttp.setRequestHeader(
//         "Authorization",
//         "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
//     )

//     xhttp.send(
//         JSON.stringify({
//             // id: id,
//             title: title,
//             body: body,
//             // gender: gender,
//             // status: status,
//         })
//     )
//     xhttp.onreadystatechange = function () {
//         this.readyState, this.status
//         if (this.readyState == 4 && this.status == 200) {
//             this.responseText

//             const objects = JSON.parse(this.responseText)
//             Swal.fire(objects["message"])
//             loadTable()
//         }
//     }
// }


// function showUserEditBox(id) {
//     const xhttp = new XMLHttpRequest()
//     xhttp.open("GET", "https://gorest.co.in/public/v2/posts/" + id)
//     xhttp.setRequestHeader("Accept", "application/json")
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//     xhttp.setRequestHeader(
//         "Authorization",
//         "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
//     )
//     xhttp.send()
//     xhttp.onreadystatechange = function () {
//         const objects = JSON.parse(this.responseText)
//         "objects :>", objects
//         console.log("objects", objects)
//         Swal.fire({
//             title: "Edit User",
//             html:
//                 // '<input id="id" type="hidden" value=' +
//                 // objects["id"] +
//                 // ">" +
//                 '<input id="title" class="swal2-input" placeholder="First" value="' +
//                 objects["title"] +
//                 '">' +
//                 '<input id="body" class="swal2-input"  placeholder="body"  value="' +
//                 objects["body"] +
//                 '"></br></br>',
//             // '<input id="gender" class="swal2-input" placeholder="gender"  value="' + objects['gender'] + '"></br></br>' +
//             // '<input id="status" class="swal2-input" placeholder="status"  value="' + objects['status'] + '"></br></br>'
//             // `<input id="gender" type="radio" name="gender" value="male" ${getGender(
//             //     objects["gender"],
//             //     "male"
//             // )} > Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
//             // `<input id="gender" type="radio" name="gender" value="female" ${getGender(
//             //     objects["gender"],
//             //     "female"
//             // )} > Female </br></br>` +
//             // '<select name="status" id="status" >' +
//             // `<option id="status" value="active" name="status" ${getStatus(
//             //     objects["status"]
//             // )} >active</option>` +
//             // `<option id="status" value="inactive" name="status" ${getStatus(
//             //     objects["status"]
//             // )} >inactive</option>` +
//             // "</select>",
//             // '<input id="status" class="swal2-input" placeholder="status">',
//             focusConfirm: false,
//             preConfirm: () => {
//                 userEdit()
//             },
//         })

//         // if (objects) {
//         //   document.getElementById("name").value = object.name.innerHTML;
//         // }
//     }
// }



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

// function userDelete(id) {
//     console.log(id, "deeeeeeeeeeeeeeeel")
//     const xhttp = new XMLHttpRequest()
//     xhttp.open("DELETE", `https://gorest.co.in/public/v2/users/${id}`)
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//     xhttp.setRequestHeader(
//         "Authorization",
//         "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e"
//     )

//     xhttp.send()
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//             const objects = JSON.parse(this.responseText)
//             Swal.fire(objects["message"])
//             loadTable()
//         }
//     }
// }



