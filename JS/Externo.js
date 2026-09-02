function calcularIdade() {

    let nasc = prompt("Digite sua data de nascimento:");

    nasc = parseInt(nasc);

    let viva = confirm("Você está vivo? Clique em OK");

    if (viva) {

        alert(`Você tem ${2026 - nasc} anos`);

    } else {

        alert("Operação cancelada");

    }
}