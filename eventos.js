document.getElementById("Div").addEventListener("click", function(){
    alert("Hola! Soy el div");
  });

document.getElementById("Boton").addEventListener("click", function(){
    event.stopPropagation();
    alert("Hola!");
  });