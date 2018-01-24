const express = require('express');
const fs = require('fs');
let allUsers = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', 'utf8'));

const renderUsersData = function render (req, res, next) {
    res.render('users', {users: allUsers});
};

const addUser = function addNewUser (req, res, next){
    const addedUser = req.body;
    addedUser.id = Math.floor(1000 + Math.random() * 9000).toString();
    allUsers.push(addedUser);
    res.redirect('back');
};

const editUser = function editUser  (req, res, next){
    const editUser = req.body;
    const editedUsers = allUsers.map((user) => {
        if (user.id == editUser.id){
            user = editUser;
        }
        return user;
    });
    allUsers = editedUsers;
    res.redirect('back');
};

const removeUser = function removeUser (req, res, next){
    const deletedUserID = req.params.id;
    const filteredUsers = allUsers.filter((user) => {
        return user.id != deletedUserID;
    });

    allUsers = filteredUsers;
    res.redirect('back');
};


module.exports = {
    addUser: addUser,
    editUser: editUser,
    removeUser: removeUser,
    renderUsersData: renderUsersData
};