// localStorage.setItem(); //vai gravar um dado na memória/arquivos do navegador

// localStorage.getItem(); //utilizo isso para usar o dado setado no setItem

// localStorage.removeItem(); //vai na memória do navegador, e ele remove o dado de lá

//--------------------------------------------------------------------------------------------------------------------------//

//localStorage.setItem("nome", "Rafael"); //primeiro passamos uma chave, depois um argumento em forma de string ou parse


// let n = localStorage.getItem("nome");  //dessa forma que uso para pegar alguma coisa do localStorage
// console.log(n)

// localStorage.removeItem("nome"); //isso removel o dado

function atualizar(element){

    let valor = element.value; //aqui está pegando o input lá do HTML, e atribuindo isso a variavel valor
    console.log(valor);

    let h1 = document.getElementById("nome");
    h1.innerHTML = valor; //aqui faço tudo que for escrito no input, ser transcrito no h1

}


//parei em 5:50

//até agora aprendi apenas a transcrever algo do input na tag h1.