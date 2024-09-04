import { criarItemDaLista } from "./criarItemDalista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras")

export function adicionarItem(evento){
    evento.preventDefault()
    

    if (item.value === ""){
        alert ("Por favor insira um item!");
        return;
    }else{
    const itemDalista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDalista);
    verificarListaVazia(listaDeCompras);
    item.value ="";
    }
}