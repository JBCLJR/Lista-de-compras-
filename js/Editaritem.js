const  listadeCompras = document.getElementById("lista-de-compras")

const editarItem = (elemento) =>{
    let novoInput = prompt('Editar o item:');
    if (novoInput !== null &&  novoInput.trim() !== "") {
        const itemAtualizado = elemento.querySelector("#item-titulo");
        itemAtualizado.textContent = novoInput; 
        const Dataatualizada = elemento.querySelector("#data-texto")
        const Data = `${new Date().toLocaleDateString("pt-BR", {weekday : "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR",{hour: "numeric", minute: "numeric"})}`;
        Dataatualizada.textContent = Data;
        

        const estavaComprado = elemento.querySelector(".input-checkbox")
        if(estavaComprado){
            elemento.queryselector(".input-checkbox").checked = true;
            elemento.queryselector(".checkbox-customizado").classlist.add("checked");
            itemAtualizado.style.textDecoration = "line-through";
        }
    }
}
export{editarItem}