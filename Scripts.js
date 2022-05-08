function modalBienvenida(){
    document.getElementById("modalBienvenida").style.display="block";
    document.getElementById("AceptarMB").focus();
    document.documentElement.style.overflow="hidden";
}
function cerrar_modalB(){
    document.getElementById("modalBienvenida").style.display="none";
    document.documentElement.style.overflowY="auto";
}

// Slideshow automatico

var conteo =0;

function heroSlide(){

    var listaImagenHero =[
        "url('/imagenes/HM1.jpg')",
        "url('/imagenes/HM2.jpg')",
        "url('/imagenes/HM3.jpg')",
        "url('/imagenes/HM4.jpg')"
    ];
    conteo++;

    if(conteo == listaImagenHero.length){
        conteo=0;
    }
    document.getElementById("encabezado").style.backgroundImage= "linear-gradient( rgba(0,0,0,0.6),rgba(0,0,0,0.6))," + listaImagenHero[conteo];
}


// Slideshow automatico

var sumando =0;

function carricelE(){
    var lista=[
        "url('/imagenes/HM1.jpg')",
        "url('/imagenes/HM2.jpg')",
        "url('/imagenes/HM3.jpg')",
        "url('/imagenes/HM4.jpg')"
    ]
    sumando++;

    if (sumando==lista.length) {
        sumando=0;
    }
    document.getElementById("encabezado").style.backgroundImage="linear-gradient( rgba(0,0,0,0.6),rgba(0,0,0,0.6))," + lista[sumando];

}
//Codigo para rellenar el modal del formulario y mostrar un mensaje por pantalla

function mod(){
    document.getElementById("modalContacto").style.display="block";
    document.documentElement.style.overflow="hidden";
    
    var mensaje, correo= document.getElementById("forcorreo").value;
    var telefono = document.getElementById("fortelefono").value;

    (function chequeo() {
        if (!document.getElementById("forcorreo").checkValidity()) {
           mensaje ="Correo incorrecto!";
           document.getElementById("informacion").innerHTML = mensaje;
        }
        else if (!document.getElementById("fortelefono").checkValidity()){
            mensaje ="Teléfono incorrecto!";
            document.getElementById("informacion").innerHTML = mensaje;
         }
        else{
            mensaje =`Hola, gracias por confiar en nosotros pronto nos pondremos en contacto contigo por medio de tu número de teléfono ${telefono} o via E-Mail ${correo} ,gracias por su tiempo.`;
            document.getElementById("informacion").innerHTML = mensaje;
        }
    })();


}
//Cerrar el modal 

function modCerrar(){
    document.getElementById("modalContacto").style.display="none";
    document.documentElement.style.overflow="auto";
    document.getElementById("forcorreo").value = "";
    document.getElementById("fortelefono").value = "";
}