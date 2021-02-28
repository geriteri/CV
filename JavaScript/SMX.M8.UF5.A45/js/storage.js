function guardar() {
    localStorage.setItem ("nom", document.querySelector("#nom").value);
    localStorage.setItem ("cognom", document.querySelector("#cognom").value);
}

function recuperar() {
    document.querySelector("#nom").value = localStorage.getItem("nom");
    document.querySelector("#cognom").value = localStorage.getItem("cognom");
}

function esborrar() {
    document.querySelector("#nom").value = null;
    document.querySelector("#cognom").value = null;
}