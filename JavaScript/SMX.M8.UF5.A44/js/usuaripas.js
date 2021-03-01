function comprovar(){
    let x =document.getElementById("pass1").value;
    let y =document.getElementById("pass2").value;
    let z =document.getElementById("usuari").value;

    if (x == y) 
    {
        alert ("La contrasenya coincideix");
    } else 
    {
        alert ("La contrasenya no coincideix")
    }
    if ("Ibai" == z)
    {
        alert ("La contrasenya i usuari coincideixen");
    } else 
    {
        alert ("La contrasenya i usuari no coincideixen")
    }
}