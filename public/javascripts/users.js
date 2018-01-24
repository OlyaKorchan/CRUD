const showAddUserForm = function showAddUserForm(){
    document.getElementById('create_user').style.display = "block";
};

const sendDeleteRequest = function sendDeleteRequest(id){
    console.log('ID', id);
    const form = document.createElement('form');

    form.action = `/users/delete/${id}`;
    form.method = 'POST';
    form.style.display = "none";
    document.body.appendChild(form);
    form.submit();

    document.body.removeChild(form);
};

const editUserForm = function editUserForm(id){
    let user = {};
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