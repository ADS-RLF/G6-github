function logar(){
    var Login = document.getElementById("login");
    var senha = document.getElementById("senha");

    console.log(login.value+senha.value)

    if(Login.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        alert("Usuário autenticado!")
        window.location.href = "http://127.0.0.1:5500/Templates%20G6/principal.html";
    }else{
        alert("Usuário ou senha inválidos!")
    }
}