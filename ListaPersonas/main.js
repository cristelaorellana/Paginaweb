const personas = [new Persona("Cristy","Orellana")];
function mostrarPersona(){
    console.log("mostrar persona");
    let texto = "";
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre},${persona.apellido}</li>`;

    }
    document.getElementById('persona').innerHTML = texto;
}
function agregarPersona() {
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido =forma["apellido"];
    if(nombre.value.trim()==="")
    {
        alert("Digite un nombre");
        rollback;
    }else if(apellido.value.trim()===""){
       alert("Digite un apellido");
       rollback
    }
    const persona = new Persona (nombre.value,apellido.value);
    personas.push(persona);
    mostrarPersona();
    forma.reset();
}

    
