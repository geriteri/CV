function saludar() {
    var nom = document.forms.nom.value;
    var cognom = document.forms.cognom.value;
    console.log (nom);
    console.log (cognom);
    document.getElementById("salutació").innerHTML = "HOLA " + nom + " " + cognom + " GRÀCIES PER OMPLIR EL FORMULARI";
}