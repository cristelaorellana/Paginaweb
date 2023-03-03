function validar(){
  const nombre = document.getElementById("nombre").value;
  const contraseña = document.getElementById("contraseña").value;
   
  if (nombre === "") {
    alert("Digite un nombre");
    
  } else if (contraseña === "") {
    alert("Digite una contraseña");
    
  } else if("example@gmail.com" && "12345") {
    window.location.href = "pagina.html";
    alert("hola");
  }

}
