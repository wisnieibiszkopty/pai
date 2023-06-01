class User{
    constructor(email="", login="user", pass="user"){
        this.login = login;
        this.pass = pass;
        this.email = email;

    }

    pokaz(){
        document.getElementById("info").innerHTML =
            "<p>E-mail: " + this.email + "</p>" +
            "<p>Login: " + this.login + "</p>" +
            "<p>Hasło: " + this.pass + "</p>";
    }
}

window.onload = function(){
    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
        document.getElementById("info").innerHTML="";
        let login = document.getElementById("login").value;
        let user_login = JSON.parse(localStorage.getItem(login));
        let email = document.getElementById("email").value;
        if(!(user_login === null)){
            alert("Użytkownik już istnieje.");
        }
        else {
            let pass = document.getElementById("pass").value;
            let user = new User(email, login, pass);
            user.pokaz();

            let user_data = {};
            user_data.email = user.email;
            user_data.login = user.login;
            user_data.pass = user.pass;

            localStorage.setItem(user.login, JSON.stringify(user_data));
        }
        document.getElementById("email").value="";
        document.getElementById("login").value="";
        document.getElementById("pass").value="";
    })
}
