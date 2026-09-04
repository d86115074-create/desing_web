let num = Number(prompt("Digite um número:"));

    if (num % 2 != 0) {
        alert(`O número ${num} é ímpar`);
    }else if(num == 0){
        alert(`O número ${num} é neutro`);
    }else{
        alert(`O número ${num} é par`);
    }