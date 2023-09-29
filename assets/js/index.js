/* function validateLogin(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        
        const users = ["admin", "MrLee_Hackudao", "nckysco"];
        const passw = ["root", "MrLee2023", "roottoor"]

        const txtMost = document.getElementById('textInput');

        var usuario = document.getElementById('usuario').value;
        var senha = document.getElementById('password').value;

        // Realiza a verificação
        if (usuario == '$users' && senha == '$passw') {
             txtMost.innerHTML="Login bem-sucedido!"
             setTimeout(function() {
    window.location.href = "home.html";
}, 1000);// Pode ser substituído por redirecionamento, etc.
        } else {
            txtMost.innerHTML="Usuário ou senha incorretos."
        }
    }*/


function validateLogin(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const userCredentials = {
        "admin": "root",
        "MrLee_Hackudao": "MrLee2023",
        "nckysco": "roottoor"
        // Adicione mais usuários e senhas conforme necessário
    };

    const txtMost = document.getElementById('textInput');

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('password').value;

    // Realiza a verificação
    if (userCredentials.hasOwnProperty(usuario) && userCredentials[usuario] === senha) {
        txtMost.innerHTML = "Login bem-sucedido!";
        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);
    } else {
        txtMost.innerHTML = "Usuário ou senha incorretos.";
    }
}
