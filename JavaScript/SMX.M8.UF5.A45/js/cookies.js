function guardar2() {
    if (document.querySelector("pass1").value == document.querySelector("pass2").value) {
        localStorage.setItem ("pass", document.querySelector("pass1").value);
        localStorage.setItem ("login", document.querySelector("#user").value);
    }else {
        alert ("Les contrasenyes no coincideixen");
    }
}

function comprova () {
    if (document.querySelector("#user").value == localStorage.getItem ("login")) {
        if (document.querySelector("#pass1").value == document.querySelector("#pass2").value) {
            if (document.querySelector("#pass1").value == localStorage.getItem ("pass")) {
                alert ("Pots entrar");
            }else {
                alert ("Contrasenya invàlida");
            }
        }else  {
            alert ("Les contrasenyes no coincideixen");
        }
    }else {
        alert ("Usuari incorrecte");
    }
}