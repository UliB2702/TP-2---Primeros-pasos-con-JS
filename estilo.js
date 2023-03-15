var Correto = true;
function AnalizarValores(event){
    event.preventDefault()
    var nota1 = parseInt(document.getElementById("NotaMatematica").value);
    var nota2 = parseInt(document.getElementById("NotaLengua").value);
    var nota3 = parseInt(document.getElementById("NotaEFSI").value);
    if(nota1 < 1 || nota1 > 10)
    {
        document.getElementById("NotaMatematica").style.color = "red";
        Correto = false;
    }
    else
    {
        document.getElementById("NotaMatematica").style.color = "green";
    }
    if(nota2 < 1 || nota2 > 10)
    {
        document.getElementById("NotaLengua").style.color = "red";
        Correto = false;
    }
    else
    {
        document.getElementById("NotaLengua").style.color = "green";
    }
    if(nota3 < 1 || nota3 > 10)
    {
        document.getElementById("NotaEFSI").style.color = "red";
        Correto = false;
    }
    else
    {
        document.getElementById("NotaEFSI").style.color = "green";
    }

}
function Promedio(event){
    AnalizarValores(event);
    event.preventDefault()
    if(Correcto = true){
    var nota1 = parseInt(document.getElementById("NotaMatematica").value);
    var nota2 = parseInt(document.getElementById("NotaLengua").value);
    var nota3 = parseInt(document.getElementById("NotaEFSI").value);
    var suma= nota1 + nota2 + nota3;
    var promedio = suma / 3;
    console.log(promedio);
    document.getElementById("resultado").innerHTML = promedio;
    if(promedio < 6)
    {
        document.getElementById("resultado").style.color = "red";
    }
    else
    {
        document.getElementById("resultado").style.color = "green";
    }    
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
        }
        else if(nota2>nota1 && nota2>nota3){
            document.getElementById("nombre2").style.color = "blue";
        }
        else if(nota3>nota1 && nota3>nota2){
            document.getElementById("nombre3").style.color = "blue";
        }
        else if(nota1 == nota2 && nota1>nota3)
        {
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre2").style.color = "blue";
        }
        else if(nota1 == nota3 && nota1>nota2)
        {
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre3").style.color = "blue";
        }
        else if(nota2 == nota3 && nota2>nota1)
        {
            document.getElementById("nombre2").style.color = "blue";
            document.getElementById("nombre3").style.color = "blue";
        }
        else
        {
            document.getElementById("nombre1").style.color = "blue";
            document.getElementById("nombre2").style.color = "blue";
            document.getElementById("nombre3").style.color = "blue";
        }
    }
