var cantidad=1;
var total = 0;
function anadeCarrito(articuloId){
    /*crear un if que busque un hijo que se llame como el id, si no existe crea, si existe retoca dos párrafos, a unidades
     * le suma uno
     */
    
    var id = articuloId.id;
    if (document.getElementById("carrito_"+id)==null){
    var nodo = document.getElementById(id);
    var rutaImagen = nodo.getElementsByTagName("img")[0].src;
    var texto = nodo.getElementsByTagName("p")[0].firstChild.nodeValue;
    var precioTratado = separarPrecio(texto);
    total = total + parseInt(precioTratado); 
   
    var newNode=document.createElement("div");
    newNode.setAttribute("id", "carrito_"+id);
    var imagen=document.createElement("img");
        imagen.setAttribute("src", rutaImagen);
        imagen.setAttribute("width", "75px");
        imagen.setAttribute("height", "37.5px");
    
    var precio=document.createElement("p");
    var textoPrecio=document.createTextNode("Precio: "+ precioTratado + "€");
//        this.total = this.total+precioTratado;}
     
    var nodocantidad = document.createTextNode("Unidades: "+ this.cantidad);
     
    
    precio.appendChild(textoPrecio);
    
    newNode.appendChild(imagen);
    newNode.appendChild(precio);
    newNode.appendChild(nodocantidad);
//    newNode.appendChild(textoUnidades);

    /*Insertar las compras*/
   document.getElementById("carrito").appendChild(newNode);
    }
    else{
        
        this.cantidad++;
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

function separarPrecio(precio){
    var res = precio.split(" ")[1];
    var parte = res.split("€")[0];
    return parte;
    
}

