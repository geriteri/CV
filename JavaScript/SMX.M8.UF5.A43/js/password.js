function comprovar(){
    var x =document.getElementById("passwd1").value;
    var y =document.getElementById("passwd2").value;
   
    if (x == y) 
    {
        alert ("La contrasenya coincideix");
    } else 
    {
        alert ("La contrasenya no coincideix")
    }
}