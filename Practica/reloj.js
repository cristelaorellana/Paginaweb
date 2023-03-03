    const mostrarReloj = () =>{
    let fecha= new Date(); //objeto
    console.log(fecha);
    let hr = formato(fecha.getHours());
    console.log(hr);
    let min = formato(fecha.getMinutes());
    //console.log(min)
   let seg = formato(fecha.getSeconds());
    //console.log(seg)
    document.getElementById("hora").innerHTML= `${hr}:${min}:${seg}`
    const meses = ['ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = dias[fecha.getMonth];
    let fechaTexto  = `${diaSemana}:${dia}:${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
};
    

const formato = (hora) => {
    if (hora < 10) {
        hora = "0" + hora;
        return hora;
    }else {
        return hora;

    }
}
   setInterval(mostrarReloj, 1000); //Funciones de tipo callBack
