
var titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function Console(){
    console.log('El botoón fue clicado');
}

function Prompt(){
    var ciudad = prompt('¿De qué ciudad de Brasil eres?');
    alert('Estuve en ' + ciudad + ' y me acorde de ti');
}

function Alert(){
    alert('Yo amo JS');
}

function Suma(){
    var num1 = parseInt(prompt('Ingrese un número'));
    var num2 = parseInt(prompt('Ingrese otro número'));
    var resultado = num1 + num2;
    alert('El resultado de la suma es: ' + resultado);
}