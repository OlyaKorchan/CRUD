const showAddUserForm = function showAddUserForm(){
    document.getElementById('create_user').style.display = "block";
};

const sendAddUserRequest = function sendAddUserRequest(formData) {
    const data = serializeFormData(formData);
    sendData('POST', data);
    };

const sendEditUserRequest = function sendEditUserRequest(formData){
    const data = serializeFormData(formData);
    sendData('PUT', data);
    };

const sendDeleteRequest = function sendDeleteRequest(id){
    sendData('DELETE', JSON.stringify({deleted_user: id}));
};

//General functions
const sendData = function sendUserData(requestType, data){
    const xhr = new XMLHttpRequest();
    xhr.open(requestType, '/users', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            const addedUser = new DOMParser().parseFromString(xhr.responseText, "text/html");
            document.body = addedUser.body;
        }
    }
    xhr.send(data);
};

const serializeFormData = function serializeFormData(form){
    const formData = new FormData(form);
    let formObj = {};
    for(let pair of formData.entries()){
        formObj[pair[0]] = pair[1];
    }
    return JSON.stringify(formObj);
};

const createdUser = function createdUser(userData){
        const addedUser = new DOMParser().parseFromString(userData, "text/html");
        document.body = addedUser.body;
}

const editUserForm = function editUserForm(id){
    const user = {};
    const userRow = document.getElementById(id);
    for (let i = 0; i < userRow.cells.length; i++){
        user[userRow.cells[i].className] = userRow.cells[i].innerHTML;
    }
    
    document.getElementById('edit_id').value = id;
    document.getElementById('edit_userName').value = user.userName;
    document.getElementById('edit_userSurname').value = user.userSurname;
    document.getElementById('edit_email').value = user.email;
    document.getElementById('edit_age').value = user.age;

    document.getElementById('edit_user').style.display = "block";
};
