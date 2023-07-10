


let form= document.getElementById("form");

form.addEventListener('submit',function(event){
event.preventDefault();

let nombre=document.getElementById("nombre").value;
let apellido=document.getElementById("apellido").value;
let email=document.getElementById("email").value;

console.log('nombre; ',nombre)
console.log('apellido; ',apellido)
console.log('email; ',email)


form.reset();
});