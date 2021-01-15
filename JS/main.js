function calcular()
{
    if(VerificarOperador() && VerificarCampo1() && VerificarCampo2())
    {
    if(somar.checked === true)
    {
        res.value = parseFloat(v1.value) + parseFloat(v2.value);
    }
        else if(subtrair.checked === true)
        {
            res.value = parseFloat(v1.value) - parseFloat(v2.value);
        }
        else if(multiplicar.checked === true)
        {
            res.value = parseFloat(v1.value) * parseFloat(v2.value);
        }
        else
        {
            if(parseFloat(v2.value) === 0) 
                {
                    res.value = "Erro!";
                }
            else
            {
                res.value = parseFloat(v1.value) / parseFloat(v2.value); 
            }
        }

    }

}

function VerificarOperador()
{
    var erro = false; 
    if(somar.checked === false && subtrair.checked === false && multiplicar.checked === false && dividir.checked === false )
    {
        erro = true;
    }
   
    
    if(erro === true)
    {
        alert("Escolha um operador!");
        document.getElementById("erro").innerHTML = "Atenção: Escolha um operador!"
    }

    return(!erro)
  
}

function VerificarCampo1()
{
    if(v1.value.trim() === "")
    {
        v1.style.background = "red";
        alert("Preencha o campo indicado.");
        document.getElementById("erro").innerHTML = "Atenção: Preencha o campo indicado!"
        return false
    }

    else if(isNaN(v1.value) === true)
    {
        v1.style.background = "red";
        v1.value = "";
        alert("Só é permitido números!");
        document.getElementById("erro").innerHTML = "Atenção: Só é permitido números!"
        return false
    }
    else
    {
        v1.style.background = "white";
        document.getElementById("erro").innerHTML = ""
        return true
    }
}

function VerificarCampo2()
{
    if(v2.value.trim() === "")
    {
        v2.style.background = "red";
        alert("Preencha o campo indicado.");
        document.getElementById("erro").innerHTML = "Atenção: Preencha o campo indicado!"
        return false
    }

    else if(isNaN(v2.value) === true)
    {
        v2.style.background = "red";
        v2.value = "";
        alert("Só é permitido números!");
        document.getElementById("erro").innerHTML = "Atenção: Só é permitido números!"
        return false
    }
    else
    {
        v2.style.background = "White";
        document.getElementById("erro").innerHTML = ""
        return true
    }
}

function limpar()
{
    res.value = "0"
    v1.value = ""
    v2.value = ""
    
}

function PararOP()
{
    document.getElementById("erro").innerHTML = ""
}