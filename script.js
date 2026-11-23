
function validarFormulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let mensagem = document.getElementById("mensagem");

    if (nome.trim() === "") {
        mensagem.style.color = "red";
        mensagem.innerText = "Digite seu nome.";
        return false;
    }

    if (email.trim() === "" || !email.includes("@")) {
        mensagem.style.color = "red";
        mensagem.innerText = "Digite um email válido.";
        return false;
    }

    if (senha.length < 6) {
        mensagem.style.color = "red";
        mensagem.innerText = "A senha deve ter pelo menos 6 caracteres.";
        return false;
    }

    mensagem.style.color = "green";
    mensagem.innerText = "Cadastro realizado com sucesso!";

    return false;
}
