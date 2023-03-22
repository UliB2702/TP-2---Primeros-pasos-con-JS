var Correcto1 = true;
var Correcto2 = true;
var Correcto3 = true;
function AnalizarValores(event){
    event.preventDefault()
    var nota1 = parseInt(document.getElementById("NotaMatematica").value);
    var nota2 = parseInt(document.getElementById("NotaLengua").value);
    var nota3 = parseInt(document.getElementById("NotaEFSI").value);
    if(nota1 < 1 || nota1 > 10 || nota1 == null)
    {
        document.getElementById("NotaMatematica").style.color = "red";
        Correcto1 = false;
    }
    else
    {
        document.getElementById("NotaMatematica").style.color = "green";
        Correcto1 = true;
    }
    if(nota2 < 1 || nota2 > 10 || nota2 == null)
    {
        document.getElementById("NotaLengua").style.color = "red";
        Correcto2 = false;
    }
    else
    {
        document.getElementById("NotaLengua").style.color = "green";
        Correcto2 = true;
    }
    if(nota3 < 1 || nota3 > 10 || nota2 == null)
    {
        document.getElementById("NotaEFSI").style.color = "red";
        Correcto3 = false;
    }
    else
    {
        document.getElementById("NotaEFSI").style.color = "green";
        Correcto3 = true;
    }

}
function Promedio(event){
    AnalizarValores(event);
    event.preventDefault()
    if(Correcto1 == true && Correcto2 == true && Correcto3 == true){
    var nota1 = parseInt(document.getElementById("NotaMatematica").value);
    var nota2 = parseInt(document.getElementById("NotaLengua").value);
    var nota3 = parseInt(document.getElementById("NotaEFSI").value);
    var suma= nota1 + nota2 + nota3;
    var promedio = suma / 3;
    document.getElementById("resultado").innerHTML = promedio;
    if(promedio < 6)
    {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("imagen").src = "https://media.tenor.com/DEgM3ewz9iQAAAAd/triste-llorar.gif";
    }
    else
    {
        document.getElementById("resultado").style.color = "green";
        document.getElementById("imagen").src = "https://i.pinimg.com/originals/ed/3d/b4/ed3db48d311233f99947e2111f6fd1c6.gif";
    }    
    document.getElementById("Carta1").style.display = "block";
    document.getElementById("Carta2").style.display = "block";
    }
    else{
        document.getElementById("Carta1").style.display = "none";
        document.getElementById("Carta2").style.display = "none";
        alert("Los valores ingresados no son correctos, vuelva a ingresarlos");
    }
    }

function NumMayor(event){
        AnalizarValores(event);
        event.preventDefault()
        var nota1 = document.getElementById("NotaMatematica").value;
        var nota2 = document.getElementById("NotaLengua").value;
        var nota3 = document.getElementById("NotaEFSI").value;
    
        if(nota1>nota2 && nota1>nota3){
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre2").style.color = "black";
            document.getElementById("nombre3").style.color = "black";
        }
        else if(nota2>nota1 && nota2>nota3){
            document.getElementById("nombre1").style.color = "black";
            document.getElementById("nombre2").style.color = "blue";
            document.getElementById("nombre3").style.color = "black";
        }
        else if(nota3>nota1 && nota3>nota2){
            document.getElementById("nombre1").style.color = "black";
            document.getElementById("nombre2").style.color = "black";
            document.getElementById("nombre3").style.color = "blue";
        }
        else if(nota1 == nota2 && nota1>nota3)
        {
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre2").style.color = "blue";
            document.getElementById("nombre3").style.color = "black";
        }
        else if(nota1 == nota3 && nota1>nota2)
        {
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre2").style.color = "black";
            document.getElementById("nombre3").style.color = "blue";
        }
        else if(nota2 == nota3 && nota2>nota1)
        {
            document.getElementById("nombre1").style.color = "black";
            document.getElementById("nombre2").style.color = "blue";
            document.getElementById("nombre3").style.color = "blue";
        }
        else
        {
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre2").style.color = "blue";
            document.getElementById("nombre3").style.color = "blue";
        }

        document.getElementById("imagen").src = "https://media.tenor.com/ZdENzSQ5R3gAAAAC/lame-mayor.gif";
    }
