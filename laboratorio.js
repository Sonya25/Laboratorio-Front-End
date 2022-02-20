function mostrarValoracion() {
    var valoracion = document.getElementById("valoracion").value;
    alert("Has valorado con " +valoracion+ " puntos")
}

function mostrarCuenta() {
    var control_iban = document.getElementById("control_iban").value;
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("dc").value;
    var cuenta = document.getElementById("cuenta").value;
    alert("Le informamos que su cuenta bancaria es: ES" + control_iban +"-"+ entidad +"-"+ sucursal  + "-"+ dc +"-"+ cuenta);
}

function mostrarDiasemana() {
    var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    var fecha =document.getElementById("fecha").value; 
    var posicion = new Date(fecha).getDay();
    var diaSemana = diasSemana[posicion-1];
    alert("La fecha seleccionada en el elemento de fecha es un " +diaSemana);
}

const provincias = [
    "Alava", "Albacete", "Alicante", "Almeria", "Avila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos",
    "Caceres", "Cadiz", "Castellon", "Ciudad Real", "Cordoba", "La Coruna", "Cuenca", "Gerona", "Granada", 
    "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaen", "Leon", "Lerida", "La Rioja", "Lugo", "Madrid",
    "Malaga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca",
    "Santa Cruz de Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo",
    "Valencia", "Valladolid", "Vizcaya", "Zamora", "Ceuta", "Melilla"];

    

function comprobarCodigoPostal(){

        var provincia =document.getElementById("localidad").value;
        var codigo_Postal = document.getElementById("codigo_postal").value;  
        var prefijo_codigoPostal = codigo_Postal.substring(0,2);
        let mensajeValidacion = document.getElementById("mensaje_validacion");
    
        if(provincias[prefijo_codigoPostal - 1] == provincia) {
          mensajeValidacion.innerHTML = "Datos validados correctamente";
          mensajeValidacion.style.color = "green";
          mensajeValidacion.style.display = "true";
            return false;
        }
        else {
            mensajeValidacion.innerHTML = "No se han podido validar los datos. Por favor, compruebe que ha introducido su código postal y localidad correctamente. Recuerde que es necesario introducir la localidad sin tildes ni caracteres especiales y con las mayúsculas correspondientes";
            mensajeValidacion.style.color = "red";
            mensajeValidacion.style.display = "true";
        }
    }

    function alertaProvincia(){
        var provincia =document.getElementById("localidad").value;

        if(!provincias.includes(provincia)){
            alert("Por favor, compruebe que ha introducido su localidad correctamente. Recuerde que es necesario introducir la localidad sin tildes ni caracteres especiales y con las mayúsculas correspondientes");
        }
    }

    function alertaCodigoPostal(){
        var codPostal =document.getElementById("codigo_postal").value;
        var soloNumeros = /^[0-9]+$/;

        if(codPostal > 52999 || codPostal < 1000 || codPostal.length !=5 || !codPostal.match(soloNumeros)){
            alert("Por favor, introduzca un código postal válido");
        }
    }