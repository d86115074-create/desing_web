var nasc = 2008;
let nome = "Diego";
const viva = true;
let altura = 1.73;

if (viva) {
    let saudacao = "olá, " + nome + "!";
    let mensagem = `altura: ${altura}m, Idade: ${2026-nasc}`;
    alert(saudacao + "\n" + mensagem);
} else {
    alert("Você não está vivo!");
}