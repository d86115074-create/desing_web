let nasc = prompt("Digite sua data de nascimento:");
nasc = parseInt(nasc);

let viva = confirm("Você está vivo? clique em OK");

if (viva) {
    alert(`Voce tem ${2026-nasc} anos`);
} else {
    alert("Que pena, você não está vivo");
}