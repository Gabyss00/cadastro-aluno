/*
var = permite que o valor seja atualizado em qualquer momento do código
let = permite que o valor altere somente quando está fora de um bloco de código
const = não permite que o valor seja alterado.

let nome = "Ana"; //string tem que acompanhar aspas ""
let idade = 17;  //número não precisa de aspas.

console.log(nome);
console.log(idade);

{ //tudo que está entre chaves {} é um bloco
let nome = "jonatas";
let idade = "30";

console.log(nome);
console.log(idade);

}

let curso = "";
console.log(curso);
*/
 
function cadastrar(){
    let nome = document.getElementById("nome").value; // value atribiu o valor do id
    //  para a variavel.
    let idade = document.getElementById("idade").value;

    let curso = document.getElementById("curso").value;
   
    if (nome == ""|| idade == "" || curso == "") {
        alert("cadastro inválido");
    }
    else{
     alert("cadastro realizado com sucesso!")   
    document.getElementById("resultado").innerHTML =
    "nome do (a) aluno (a) é " + nome + 
    "<br> Idade:" + idade + " anos." +
    "<br> curso:" + curso;

    document.querySelector(".descricao").textContent = 
    "informações do aluno";

    //display = none - serve para ocultar um elemento html
    document.getElementById("nome").style.display = "none";
    document.getElementById("idade").style.display = "none";
    document.getElementById("curso").style.display = "none";
    document.getElementById("cadastrar").style.display = "none";
    document.getElementById("novoAluno").style.display = "block";
    document.getElementById("resultado").style.display = "block";

    //display = block:serve para exibir um elemento html
    }
    
}

function novoAluno(){
    document.getElementById("nome").style.display = "block";
    document.getElementById("idade").style.display = "block";
    document.getElementById("curso").style.display = "block";
    document.getElementById("cadastrar").style.display = "block"; 
    document.getElementById("novoAluno").style.display = "none";
    document.getElementById("resultado").style.display = "none";

    document.querySelector(".descricao").textContent = 
    "Preencha os dados abaixo";

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";
}

/* || = ou
alert = é usado para dar um aviso para o usuário
em um caixa no navegador.

if(se) = caso seja verdadeiro a condição.
else (senão) = caso seja falso a condição.

= sinal de atribuição de valor 

== sinal de comparação entre dois elementos 
ou valores

+ concatenar (juntar informações).

*/