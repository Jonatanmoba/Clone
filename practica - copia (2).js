 function imprimirNode(nodo){

    if(!nodo)return;

    console.log (`Nodo: ${nodo.nodeName}, ${nodo.nodeType}: ${textoType(nodo.nodeType)}`);


   if (nodo.childNodes){
    nodo.childNodes.forEach(n => imprimirNode(n));
   }
 }


 function textoType(nodo){
    switch(nodo){
        case 1: return "Element_node";
        case 2: return "Attribute_node";
        case 3: return "Text_node";
        case 4: return "CDATA_SECTION_NODE";
        case 5: return "ENTITY_REFERENCE_NODE";
        case 6: return "PROCESSING_INSTRUCTION_NODE";
        case 7: return "PROCESSING_INSTRUCTION_NODE";
        case 8: return "Comment_node";
        default: return "desconocido";
    }
 }


 imprimirNode(document.body);

console.log("filtrado elements nodes");
 function filtrarNodes (node){

    if(!node)return;

    if(node.nodeType === Node.ELEMENT_NODE){
        console.log(`${node.nodeName}`)
    }

    if(node.childNodes){
        node.childNodes.forEach (n => filtrarNodes(n));
    }
 }

 filtrarNodes(document.body)
 
 let parrafo = document.createElement("p");

 document.body.append(parrafo);
 parrafo.textContent = "Hola paco"

 let enlace = document.createElement("a");
enlace.setAttribute("href","https://www.google.com");
enlace.textContent = "Enlace a google";

let divrecuperado = document.querySelector("div");
divrecuperado.appendChild(enlace);

let nodoClonado = divrecuperado.cloneNode(true);
document.body.append(nodoClonado);

let boton = document.createElement("button");
boton.textContent = "insertar en otro lado"





document.body.append(boton)

boton.addEventListener("click", () => {
    
    nodoClonado.remove();

})
boton.addEventListener("mouseout", () => {
   
    if(!document.body.contains(nodoClonado)){
        document.body.append(nodoClonado);
    }

})

let parrafob = document.querySelector("#contenedor");
parrafo.innerHTML = "This is the p element created to be above the span element inside the div element."
let spanrecuperado = document.querySelector("span");
divrecuperado.insertBefore(parrafob, spanrecuperado);







 