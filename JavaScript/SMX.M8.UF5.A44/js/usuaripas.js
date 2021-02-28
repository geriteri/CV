function comprovar(){
    let x =document.getElementById("passwd1").value;
    let y =document.getElementById("passwd2").value;
    let z =document.getElementById("usuari").value;

    if (x == y) 
    {
        alert ("La contrasenya coincideix");
    } else 
    {
        alert ("La contrasenya no coincideix")
    }
    if (u == z)
    {
        alert ("La contrasenya i usuari coincideixen");
    } else 
    {
        alert ("La contrasenya i usuari no coincideixen")
    }
}