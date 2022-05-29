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

let modalName = $(".text-nome");
let modalEmail = $(".text-email");
let modalCity = $(".text-city");

