// localStorage.setItem(); //vai gravar um dado na memória/arquivos do navegador

// localStorage.getItem(); //utilizo isso para usar o dado setado no setItem

// localStorage.removeItem(); //vai na memória do navegador, e ele remove o dado de lá

//--------------------------------------------------------------------------------------------------------------------------//

//localStorage.setItem("nome", "Rafael"); //primeiro passamos uma chave, depois um argumento em forma de string ou parse


// let n = localStorage.getItem("nome");  //dessa forma que uso para pegar alguma coisa do localStorage
// console.log(n)

// localStorage.removeItem("nome"); //isso removel o dado


//input de dados com string

onload = function () { //quando carregar a pag vai realizar essa function

    //Persistência de Dados

    let nome = localStorage.getItem("nome"); //pego o dado "nome"
    let h1 = document.getElementById("nome"); //pego novamente o h1
    h1.innerHTML = nome; // e adiciono o dado que foi recolhido, na tag h1. Agora quando atualizar a pagina vai aparecer o nome que digitei


}

function atualizar(element) {

    let valor = element.value; //aqui está pegando o input lá do HTML, e atribuindo isso a variavel valor
    console.log(valor);

    let h1 = document.getElementById("nome");
    h1.innerHTML = valor; //aqui faço tudo que for escrito no input, ser transcrito no h1

    localStorage.setItem("nome", valor);

}



//input com outro tipo de dados

// let a = {nome: "Rafael", n1: 9.4}

// localStorage.setItem("aluno", JSON.stringify(a));


let a = localStorage.getItem("aluno");
console.log(JSON.parse(a)); //transformei aquele objeto aluno, q foi passado como string, em objeto de fato

// localStorage.clear(); // isso apagou tudo que tinha na memória
