
function anadeCarrito(articuloId){
    var nodo = document.getElementById(articuloId);
    var rutaImagen = nodo.getElementsByTagName("img")[0].src;
    var texto = nodo.getElementsByTagName("p")[0].firstChild.nodeValue;
    var precioFinal = separarPrecio(texto);
    
    //var newNode = document.getElementByClassName("subcarrito1");
    //newNode.createElement("div");
    
    var newNode=document.createElement("div");
    
    var imagen=document.createElement("img");
        imagen.setAttribute("src", rutaImagen);
    
    var precio=document.createElement("p");
    var texto=document.createTextNode(separarPrecio(precioFinal));
    precio.appendChild(texto);
    
    newNode.appendChild(imagen);
    newNode.appendChild(precio);
    document.getElementById("carrito").appendChild(newNode);
    
}

function separarPrecio(precio){
    var res = precio.split(" ")[1];
    var parte = res.split("€")[0];
    return parte;
    
}

