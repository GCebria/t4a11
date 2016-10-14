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

        var rutaImagen = nodo.getElementsByTagName("img")[0].src;

        var texto = nodo.getElementsByTagName("p")[0].firstChild.nodeValue;
        var precioTratado = separarPrecio(texto);

        /*Precio Total*/
        this.total = this.total + parseInt(precioTratado);

        /*Creación de nodo*/
        var newNode = document.createElement("div");
        newNode.setAttribute("id", "carrito_" + id);

        var imagen = document.createElement("img");
        imagen.setAttribute("src", rutaImagen);
        imagen.setAttribute("width", "75px");
        imagen.setAttribute("height", "37.5px");

        var precio = document.createElement("p");
        var textoPrecio = document.createTextNode("Precio: " + precioTratado + "€");

        var parrafoCantidad = document.createElement("p");
        parrafoCantidad.setAttribute("id", "cantidad_"+id);
        var nodocantidad = document.createTextNode("Unidades: " + this.cantidad);
        parrafoCantidad.appendChild(nodocantidad);

        precio.appendChild(textoPrecio);

        newNode.appendChild(imagen);
        newNode.appendChild(precio);
        newNode.appendChild(parrafoCantidad);


        /*Insertar las compras*/
        document.getElementById("carrito").appendChild(newNode);
    } else {

        this.cantidad++;
        actualizarCantidad(id);
//        var parrafoCantidadAct = document.createElement("p");
//        parrafoCantidadAct.setAttribute("id", "cantidadAct_"+id);
//        var nodocantidad = document.createTextNode("Unidades: " + this.cantidad);
//        parrafoCantidadAct.appendChild(nodocantidad);
//        document.replaceChild()
        

    }



    /*Insertar el precio total del carro*/

//    var nodoTotal = document.createElement("div");
//    var totalPrecio = document.createElement("p");
//    var parrafo = document.createTextNode("Total: "+ this.total + " €");
//    
//    totalPrecio.appendChild(parrafo);
//    
//    nodoTotal.appendChild(totalPrecio);
//    
//    document.getElemetnById("precioTotal").appendChild(nodoTotal);
}

function separarPrecio(precio) {
    var res = precio.split(" ")[1];
    var parte = res.split("€")[0];
    return parte;

}

function actualizarCantidad(id){
    var cantidadOld = document.getElementById("cantidad_"+id).childNodes[1];
    var cantidadNew = document.createTextNode("Unidades: "+this.cantidad);
    cantidadOld.replaceChild(cantidadNew, cantidadOld.childNodes[1]);
}