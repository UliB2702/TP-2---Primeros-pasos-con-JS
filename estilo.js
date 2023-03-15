

function AnalizarValores(){
    var nota1 = document.getElementById("NotaMatematica").value;
    var nota2 = document.getElementById("NotaLengua").value;
    var nota3 = document.getElementById("NotaEFSI").value;
    if(nota1 < 1 || nota1 > 10)
    {
        document.getElementById("NotaMatematica").style.color = "red";
    }
    if(nota2 < 1 || nota2 > 10)
    {
        document.getElementById("NotaLengua").style.color = "red";
    }
    if(nota3 < 1 || nota3 > 10)
    {
        document.getElementById("NotaEFSI").style.color = "red";
    }
    
    else{
        Promedio(nota1, nota2, nota3);
    }

}
function Promedio(nota1, nota2, nota3){
    var suma= nota1 + nota2 + nota3;
    var promedio = suma / 3;
    document.getElementById("resultado").innerHTML = promedio;
    if(promedio <= 6)
    {
        document.getElementById("resultado").style.color = "red";
    }
    else
    {
        document.getElementById("NotaEFSI").style.color = "green";
    }    


    
    

}