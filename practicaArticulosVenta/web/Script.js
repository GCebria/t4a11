var cantidad = 1;
var total = 0;
function anadeCarrito(articuloId) {
    /*crear un if que busque un hijo que se llame como el id, si no existe crea, si existe retoca dos párrafos, a unidades
     * le suma uno
     */

    var id = articuloId.id;


    /*Comprueba si existe*/
    if (document.getElementById("carrito_" + id) == null) {

        /*Recoge los valores*/
        var nodo = document.getElementById(id);

        /*crear una función que aumente el atributo cantidad*/

        var rutaImagen = nodo.getElementsByTagName("img")[0].src;

        var texto = nodo.getElementsByTagName("p")[0].firstChild.nodeValue;
        var precioTratado = separarPrecio(texto);

        /*Precio Total*/
        this.total = this.total + parseInt(precioTratado);

        /*Creación de nodo*/
        var newNode = document.createElement("div");
        newNode.setAttribute("id", "carrito_" + id);
        newNode.setAttribute("cantidad", "1");
        /*imagen*/
        var imagen = document.createElement("img");
        imagen.setAttribute("src", rutaImagen);
        imagen.setAttribute("width", "75px");
        imagen.setAttribute("height", "37.5px");
        /*precio*/
        var precio = document.createElement("p");
        var textoPrecio = document.createTextNode("Precio: " + precioTratado + "€");
        /*cantidad*/
        var parrafoCantidad = document.createElement("p");
        var nodocantidad = document.createTextNode("Unidades: 1");
        parrafoCantidad.appendChild(nodocantidad);

        precio.appendChild(textoPrecio);

        newNode.appendChild(imagen);
        newNode.appendChild(precio);
        newNode.appendChild(parrafoCantidad);


        /*Insertar las compras*/
        document.getElementById("carrito").appendChild(newNode);
        

        mostrarTotal(this.total);


    } else {
        /*Extraer el valor del atributo cantidad, incrementarlo y redefinirlo*/
        var cantidad = document.getElementById("carrito_" + id).getAttribute("cantidad");
        var cantidadInt = parseInt(cantidad);
        cantidadInt++;
        document.getElementById("carrito_" + id).setAttribute("cantidad", cantidadInt.toString());
        
        /*Actualizar el valor*/
        actualizarCantidad(id);
    }


}
/*Insertar el precio total del carro*/
function mostrarTotal(total) {

    var nodo = document.getElementById("precioTotal");
    var parrafo = document.createElement("p");
    var newNodo = document.createTextNode("Precio total: " + total + " €");
    parrafo.appendChild(newNodo);
    nodo.appendChild(parrafo);

}

function actualizarCantidad(id) {
    var nodo = document.getElemetnById("carrito_"+id);
    var nodoCantidad = nodo.getElementsByTagName("p")[0].LastChild;
}

function separarPrecio(precio) {
    var res = precio.split(" ")[1];
    var parte = res.split("€")[0];
    return parte;

}

function incrementarCantidad() {
    /*recoger el nodo cantidad y cambiarlo para que sea mas*/
}