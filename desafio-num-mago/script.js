// Número secreto e tentativas
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let tentativas = 5;


// Seleciona elementos que serão utilizados
const input = document.getElementById("input-numero");
const btn = document.getElementById("btn-tentar");
const card = document.querySelector(".card");
const mensagem = document.getElementById("mensagem"); 
let mago = document.querySelector(".mago");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");
mensagem.textContent = numeroSecreto; 
let playing = false;

// Função que vira a carta, busquei no codepen
function flipCard() {
    if (playing) return;
    playing = true;

    anime({
        targets: card,
        scale: [{value:1}, {value:1.3}, {value:1, delay:150}],
        rotateY: {value:'+=180', delay:100},
        easing: 'easeInOutSine',
        duration: 400,
        complete: function() { playing = false; }
    });
}

// Evento do botão
btn.addEventListener("click", () => {
    const palpite = parseInt(input.value, 10);

    // valida número
    if (Number.isNaN(palpite) || palpite < 1 || palpite > 20) {
        alert("Digite um número entre 1 e 20!");
        return;
    }

    tentativas--;
// Logica do virar da carta
    if (palpite === numeroSecreto) {
        flipCard(); // carta vira
        btn.disabled = true;
        input.disabled = true;
        mago.classList.add("feliz");
        mensagem2.textContent = "Você acertou!";
    } else if (tentativas === 0) {
        flipCard(); // carta vira
        btn.disabled = true;
        input.disabled = true;
        mago.classList.add("feliz");
        mensagem2.textContent = "Suas tentativas acabaram!";
    } else {
        // dica simples se o chute foi maior ou menor
        mensagem2.textContent = (palpite < numeroSecreto)
            ? "O número secreto é MAIOR"
            : "O número secreto é MENOR";
    }

    input.value = "";
});

