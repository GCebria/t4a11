
var total = 0;
function anadeCarrito(articuloId) {
    /*Falta:
     * - Actualizar cantidades:
     * - Actualizar precio: es necesario que se acceda al precio cada vez que se pulsa y se le sume
     */

    var id = articuloId.id;

    mostrarTotal(this.total);

    /*Comprueba si existe*/


    /*Recoge los valores*/
    var nodo = document.getElementById(id);

    var rutaImagen = nodo.getElementsByTagName("img")[0].src;

    var texto = nodo.getElementsByTagName("p")[0].firstChild.nodeValue;
    var precioTratado = separarPrecio(texto);

    /*Precio Total*/
    this.total = this.total + parseInt(precioTratado);
    if (document.getElementById("carrito_" + id) == null) {
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
        precio.appendChild(textoPrecio);

        /*cantidad*/
        var cant = document.createElement("p");
        cant.setAttribute("id", "cantidad_" + id)
        var textoCant = document.createTextNode("Unidades: 1");
        cant.appendChild(textoCant);

        newNode.appendChild(imagen);
        newNode.appendChild(precio);
        newNode.appendChild(cant);
        /*Insertar las compras*/
        document.getElementById("carrito").appendChild(newNode);


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




function actualizarCantidad(id) {
    /*Elimina nodo*/
    var cantidad = document.getElementById("carrito_" + id).getAttribute("cantidad");
    
     var nodeCant =document.getElementById("cantidad_" + id);
     nodeCant.removeChild(nodeCant.firstChild);

    
    var textoCant = document.createTextNode("Unidades: " + cantidad);
    nodeCant.appendChild(textoCant);
    document.getElementById("carrito_" + id).appendChild(nodeCant);
}


function mostrarTotal(total) {

    var nodo = document.getElementById("precioTotal");
    if (nodo.hasChildNodes() == true) {
        nodo.removeChild(nodo.firstChild);
    }
    var parrafo = document.createElement("p");
    var newNodo = document.createTextNode("Precio total: " + total + " €");
    parrafo.appendChild(newNodo);
    nodo.appendChild(parrafo);
}



function separarPrecio(precio) {
    var res = precio.split(" ")[1];
    var parte = res.split("€")[0];
    return parte;

}
