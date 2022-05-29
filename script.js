'use strict';
const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 20}ms">${letter}</span>`
    )
    .join("");
});

let nome = $('#name');
let email = $('#email');
let password = $('#password');
let city = $('#city');

const form =$(".form");
form.on('submit', function (e) { 
  $('text-nome').text(nome.val())
  $('text-email').text(email.val())
  $('text-city').text(city.val())
})

function cadastro(){
  var nameUser = document.getElementById('name');
  var emailUser = document.getElementById('email');
  var passwordUser = document.getElementById('password');
  var cityUser = document.getElementById('city');

  var dadosUser = JSON.parse(localStorage.getItem('dadosUser'));

  if(dadosUser == null){
    dadosUser = [];
  }
  var registerUser = {
    nome: nameUser.value,
    email: emailUser.value,
    password: passwordUser.value,
    city: cityUser.value
  }
  dadosUser.push(registerUser);

  localStorage.setItem('dadosUser', JSON.stringify(dadosUser));
}