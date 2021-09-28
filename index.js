let uname = document.getElementById('username');
let dob = document.getElementById('userdob');
let aadhar = document.getElementById('aadhar');
let mobile = document.getElementById('mobile');
let age = document.getElementById('age');
let save = document.getElementById('saveUser');
let deleteUser = document.getElementById('deleteUser');
let addrow = document.getElementById("addrow");
let tableBox = document.getElementById("tableBox");
let addnewuser = document.getElementById("adduser");
let retriveuser = document.getElementById("retrive");
let usersTable = document.getElementById("usersTable");


let userList = []

function saveUsers() {
    // user details object data
    let obj = {
        "Name": `${uname.value}`,
        "Date of Birth": `${dob.value}`,
        "Addhar Number": `${aadhar.value}`,
        "Mobile Number": `${mobile.value}`,
        "Age": `${age}`
    }
    userList.push(obj);
    // date of birth validation
    let d = new Date();
    let year = parseInt(d.getFullYear());
    let input_date = parseInt(dob.value.slice(6, 10));
    // validation aadhar and mobile
    if (aadhar.value.length === 12 && mobile.value.length === 10) {
        window.localStorage.setItem('userList', JSON.stringify(userList));
        aadhar.style.outline = "none";
        mobile.style.outline = "none";
    } else {
        aadhar.style.border = "1px solid red";
        mobile.style.border = "1px solid red";
    }

    if (dob.value.length == 10 && year > input_date) {
        age.innerHTML = year - input_date;
        age = year - input_date;
        dob.style.outline = "none";
    } else {
        dob.style.border = "1px solid red";
    }

}

// delete user

deleteUser.onclick = function() {
    uname.value = "";
    dob.value = "";
    aadhar.value = "";
    mobile.value = "";
    age.value = "";
}

// each person details in the object
addrow.onclick = function() {
    // input fileds
    var name = document.createElement('input');
    name.setAttribute('type', 'text');
    var tdname = document.createElement('td');
    tdname.append(name);

    var dob = document.createElement('input');
    dob.setAttribute('type', 'text');
    var tddob = document.createElement('td');
    tddob.append(dob);

    var aadhar = document.createElement('input');
    aadhar.setAttribute('type', 'text');
    var tdaadhar = document.createElement('td');
    tdaadhar.append(aadhar);

    var mobile = document.createElement('input');
    mobile.setAttribute('type', 'text');
    var tdmobile = document.createElement('td');
    tdmobile.append(mobile);

    var tdage = document.createElement('td');
    tdage.setAttribute('id', 'age');


    // buttons save and delete
    var saveUser = document.createElement('a');
    var link1 = document.createTextNode("Save");
    saveUser.append(link1);
    saveUser.setAttribute('href', '#');
    saveUser.setAttribute('id', 'saveUser')
    saveUser.setAttribute('onclick', 'saveUsers()')


    var deleteUser = document.createElement('a');
    var link2 = document.createTextNode("Delete");
    deleteUser.append(link2);
    deleteUser.setAttribute('href', '#');
    deleteUser.setAttribute('id', 'deleteUser');
    saveUser.setAttribute('onclick', 'deleteUsers()')
    var tdaction = document.createElement('td');
    tdaction.append(saveUser, deleteUser);

    // row creation tr tag and append all data field
    var tr = document.createElement('tr');
    tr.append(tdname, tddob, tdaadhar, tdmobile, tdage);
    usersTable.append(tr);
}


// retrive user page

retriveuser.onclick = function() {
    // hide the table
    usersTable.style.display = "none";

    //create userinput field on that place
    let newdiv = document.createElement('div');
    newdiv.setAttribute('id', 'searchField')
    let inputf = document.createElement('input');
    inputf.setAttribute('type', 'text');
    let button = document.createElement('button', "find");
    // inputf.setAttribute('type', 'text');
    newdiv.append(inputf, button);
    tableBox.append(newdiv);
}
