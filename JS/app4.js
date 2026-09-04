function Semana() {

let dia = prompt("Escolha um dia da semana \n 1 - Domingo \n 2 - Segunda-feira \n 3 - Terça-feira \n 4 - Quarta-feira \n 5 - Quinta-feira \n 6 - Sexta-feira \n 7 - Sábado");

switch (dia) {
    case "1":
        alert("Domingo");
        break;
    case "2":
        alert("Segunda-feira");
        break;
    case "3":
        alert("Terça-feira");
        break;
    case "4":
        alert("Quarta-feira");
        break;
    case "5":
        alert("Quinta-feira");
        break;
    case "6":
        alert("Sexta-feira");
        break;
    case "7":
        alert("Sábado");
        break;
    default:
        alert("Opção inválida");
}

}