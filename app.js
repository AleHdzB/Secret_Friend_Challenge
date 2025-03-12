// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var friends = [];

function addFriend() {

    name = document.getElementById('input').value;
    if (name === '') {
        alert('It seems you forgot to write the name of your friend');
        return false;
    }

    friends.push(name);
    console.log(friends);
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
    showFriends();
    return true;
}

function showFriends() {
    numFriends = friends.length;
    console.log("Number of friends: " + numFriends);
    if (numFriends === 0) {
        alert('You have no friends :( ');
        return false;
    }
    
    var friendList = document.querySelector('.name-list');
    friendList.innerHTML = '';
    for ( var i = 0; i < numFriends; i++) {
        friendList.innerHTML += '<li>' + friends[i] + '</li>';
    }
    return true;
}

function randomFriend(){
    numFriends = friends.length;
    if (numFriends === 0) {
        alert('You have no friends :(');
        return false;
    }
    var random = Math.floor(Math.random() * numFriends);
    var secretFriend = friends[random];
    document.querySelector('.result-list').innerHTML = secretFriend;
    friends.pop(secretFriend);
    showFriends();



}
