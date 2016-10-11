var prod1 =0;
var prod2 =0;
var prod3 =0;
function anadeCarrito(articuloId){
    var nodo = document.getElementById(articuloId);
    var rutaImagen = nodo.getElementsByTagName("img")[0].src;
    var texto = nodo.getElementsByTagName("p")[0].firstChild.nodeValue;
    var precioTratado = separarPrecio(texto);
    
    if (articuloId.equals("chocolate-limon")){
        this.prod1=this.prod1+1;
    }
    
    var newNode=document.createElement("div");
    
    var imagen=document.createElement("img");
        imagen.setAttribute("src", rutaImagen);
        imagen.setAttribute("width", 75);
        imagen.setAttribute("height", 37.5);
    
    var precio=document.createElement("p");
    var textoPrecio=document.createTextNode("Precio: "+precioTratado + "€");
    var textoUnidades = document.createTextNode("Unidades: "+ this.prod1);
//    var textoTotal = document.createTextNode("Total: "+total);
    precio.appendChild(textoPrecio);
    newNode.appendChild(imagen);
    newNode.appendChild(precio);
    newNode.appendChild(textoUnidades);
//    newNode.appendChild(textoTotal);
    

    document.getElementById("carrito").appendChild(newNode);
    
}

function separarPrecio(precio){
    var res = precio.split(" ")[1];
    var parte = res.split("€")[0];
    return parte;
    
}


