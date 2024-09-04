import { excluirItem } from "./ExcluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { editarItem } from "./Editaritem.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras")
let contador = 0;

export function criarItemDaLista(item){
    const itemDalista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    const containerNomeDoitem = document.createElement("div");
    containerNomeDoitem.classList.add("container-nome-compra")

    const containerCheckBox = document.createElement("div")
    containerCheckBox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(evento){
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado")
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")
        if (checkboxInput.checked){
            checkboxCustomizado.classList.add("checked");
            listaComprados.appendChild(itemDalista);
       
            itemTitulo.style.textDecoration = "line-through";

            
        } else {
            checkboxCustomizado.classList.remove("checked");
            listaDeCompras.appendChild(itemDalista);

            itemTitulo.style.textDecoration = "none";
            
        }
        verificarListaComprados(listaComprados);
    })

    const checkboxCustomizado = document.createElement("div")
    checkboxCustomizado.classList.add("checkbox-customizado")
         
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo"
    nomeDoItem.innerText = item;  /* captura o valor de input e poem no nomedoitem*/
    
    const cointainerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    const botaoEdicao = document.createElement("button")
    botaoEdicao.classList.add("botao-acao");
    botaoEdicao.addEventListener('click', function(){editarItem(itemDalista)}) 
       

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt= "Editar";

    botaoRemover.addEventListener("click", function(){excluirItem(itemDalista)});


    checkboxLabel.appendChild(checkboxInput)
    checkboxLabel.appendChild(checkboxCustomizado)

    containerCheckBox.appendChild(checkboxLabel);

    containerNomeDoitem.appendChild(containerCheckBox)
    containerNomeDoitem.appendChild(nomeDoItem);

    botaoRemover.appendChild(imagemRemover);
    botaoEdicao.appendChild(imagemEditar);

    cointainerBotoes.appendChild(botaoRemover)
    cointainerBotoes.appendChild(botaoEdicao);

    containerItemLista.appendChild(containerNomeDoitem);
    containerItemLista.appendChild(cointainerBotoes);

    const itemData = document.createElement("p")
    itemData.classList.add("item-lista-texto")
    itemData.id = "data-texto"
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday : "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR",{hour: "numeric", minute: "numeric" })}`
    

    itemDalista.appendChild(containerItemLista);
    
    itemDalista.appendChild(itemData)

    
    // function editarItem(novo){
    //     const novoInput = prompt('Editar o item:', novo.textContent);
    //     if (novoInput) nomeDoItem.innerText = novoInput;   
    // }

    return itemDalista;
}