let name = document.getElementById('username');
let dob = document.getElementById('userdob');
let aadhar = document.getElementById('aadhar');
let mobile = document.getElementById('mobile');
let age = document.getElementById('age');
let save = document.getElementById('saveUser');
let deleteUser = document.getElementById('deleteUser');
let addrow = document.getElementById("addrow");
let tableBox = document.getElementById("tableBox");
let adduser = document.getElementById("adduser");
let retriveuser = document.getElementById("retrive");
let usersTable = document.getElementById("usersTable");


let userList = []

function saveUsers() {
    let obj = {}
    obj["Name"] = name.value;
    obj["Date of Birth"] = dob.value;
    obj["Addhar Number"] = aadhar.value;
    obj["Mobile Number"] = mobile.value;
    obj["Age"] = age.value;
    userList.push(obj);
}

// delete user

deleteUser.onclick = function() {
    name.value = "";
    dob.value = "";
    aadhar.value = "";
    mobile.value = "";
    age.value = "";
}

// each person details in the object
addrow.onclick = function() {
    let obj = {}
    obj["Name"] = name.value;
    obj["Date of Birth"] = dob.value;
    obj["Addhar Number"] = aadhar.value;
    obj["Mobile Number"] = mobile.value;
    obj["Age"] = age.value;
    userList.push(obj);
    console.log(obj);
    console.log(userList);
    name.value = "";
    dob.value = "";
    aadhar.value = "";
    mobile.value = "";
    age.value = "";

    // save in local storage
    window.localStorage.setItem('userList', JSON.stringify(userList));
}


// retrive user page

retriveuser.onclick = function() {
    // hide the table
    usersTable.style.display = "none";

    //create userinput field on that place

    let inputf = document.createElement('input');
    inputf.setAttribute('type', 'text');
    let button = document.createElement('input');
    inputf.setAttribute('type', 'text');
}