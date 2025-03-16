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
    var friendList = document.querySelector('.name-list');
    if (numFriends === 0) {
        friendList.innerHTML = '';

        
        return false;
    }
    
    friendList.innerHTML = '';
    for ( var i = 0; i < numFriends; i++) {
        friendList.innerHTML += '<li>' + friends[i] + '</li>';
    }
    return true;
}

// Modifica tu función randomFriend() así:
function randomFriend() {
    const imageElement = document.querySelector('.Image');
    const resultList = document.querySelector('.result-list');
    const originalStaticImage = 'assets/image.png';  // Frame estático
    // Resto de la lógica del sorteo
    if (friends.length === 0) {
        alert('You have no friends :(');
        resultList.innerHTML = '';
        return false;
    }

    // Limpiar resultados anteriores
    resultList.innerHTML = '';
    
    // Mostrar el GIF animado
    imageElement.src = `assets/amigo-secreto.gif?t=${Date.now()}`; // Cache buster
    
    // Restaurar el frame estático después de 5 segundos
    setTimeout(() => {
        imageElement.src = originalStaticImage;
        const randomIndex = Math.floor(Math.random() * friends.length);
        resultList.innerHTML = friends[randomIndex];
        friends.splice(randomIndex, 1);
        showFriends();
    }, 4000);
    
}

// Detectar tecla Enter en el campo de entrada
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addFriend();
    }
});