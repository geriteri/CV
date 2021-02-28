function sumar(){
    var x =document.getElementById("num1").value;
    var y =document.getElementById("num2").value;
    var z =alert(parseInt(x) + parseInt(y));
   
    if (x == y) 
    {
        alert ("són iguals");
    } else 
    {
        alert ("són diferents")
    }
}