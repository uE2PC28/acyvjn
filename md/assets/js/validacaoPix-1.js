function validaPix1(){
    $("#formPix1").submit();
}

function validaPix2(){
    $("#formPix2").submit();
}

function validaPix3(){
    $("#formPix3").submit();
}



// ---------------------- VALIDADOR DE CPF ----------------------------//
function validadorCPF(cpf) {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
        return false
    
    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCPF) !== -1)
        return false

    for (i=1; i<=9; i++)
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)) )
        return false

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false

    return true
}
// ---------------------- VALIDADOR DE CPF ----------------------------//



// ---------------------- VALIDADOR DE CELULAR ----------------------------//
function validadorCELULAR(celular) {
    var strCelular =  String(celular).replace(/[^\d]/g, '')

    if (strCelular.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCelular) !== -1)
        return false
        
    var telOK = strCelular.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/);

    if(!telOK)
        return false
    
    return true
    
}
// ---------------------- VALIDADOR DE CPF ----------------------------//




// ---------------------- VALIDADOR DE EMAIL ----------------------------//
            function validadorEMAIL(email) {
                var re = /\S+@\S+\.\S+/;
                var teste = re.test(email);

                if(!teste)
                    return false
                
                return true
            }
        
// ---------------------- VALIDADOR DE EMAIL ----------------------------//
var tipoPix = document.querySelector(".tipoChave");
var ValorTipoPix = document.querySelector(".tipoChave").checked;
var campoPix = document.getElementById("chavePix");

campoPix.readOnly = "true";


jQuery(function($){
    $('.tipoChave').change(function(){
        var campo = $(this).val();
        campoPix.removeAttribute('readonly');
        campoPix.focus();
    });
});


function validacaoPix(){
    var tipoPix = document.querySelector('input[name=tipoChave]:checked').value
    var campoChavePix = document.getElementById("chavePix");
    var chavePixDigitada = document.getElementById("chavePix").value;
    var validacaoPix = document.getElementById("validacaoPix");
    var textoPix = document.getElementById("textoPix");

    var svgMoney = document.getElementById("svgMoney");


    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");

    if (tipoPix == "document") {
        if(chavePixDigitada.length == 14){
            if(validadorCPF(chavePixDigitada) == true){
                textoPix.classList.remove("textoFalse");
                textoPix.classList.add("textoTrue");
    
                campoChavePix.classList.remove("campoFalse");
                campoChavePix.classList.remove("campoWriting");
                campoChavePix.classList.add("campoTrue");
    
                validacaoPix.innerHTML = ""
                validacaoPix.style.color = "unset";

                botaoCadastoInativo.style.display = "none";
                botaoCadastoAtivo.style.display = "block";

                svgMoney.style.color = "#000000";

            } else {
                textoPix.classList.remove("textoTrue");
                textoPix.classList.add("textoFalse");
                
                campoChavePix.classList.remove("campoTrue");
                campoChavePix.classList.add("campoFalse");
                campoChavePix.classList.remove("campoWriting");
    
                validacaoPix.innerHTML = "cpf inválido"
                validacaoPix.style.color = "red";
    
                botaoCadastoInativo.style.display = "block";
                botaoCadastoAtivo.style.display = "none";

                svgMoney.style.color = "#727272";
            }
        } else if(chavePixDigitada.length < 14){
            textoPix.classList.remove("textoTrue");
            textoPix.classList.remove("textoFalse");
    
            campoChavePix.classList.remove("campoTrue");
            campoChavePix.classList.remove("campoFalse");
            campoChavePix.classList.add("campoWriting");
    
            validacaoPix.innerHTML = ""
            validacaoPix.style.color = "unset";    
    
            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";

            svgMoney.style.color = "#727272";
        }
    }

    if (tipoPix == "phoneNumber") {
        if(chavePixDigitada.length == 15){
            if(validadorCELULAR(chavePixDigitada) == true){
                textoPix.classList.remove("textoFalse");
                textoPix.classList.add("textoTrue");

                campoChavePix.classList.remove("campoFalse");
                campoChavePix.classList.remove("campoWriting");
                campoChavePix.classList.add("campoTrue");

                validacaoPix.innerHTML = ""
                validacaoPix.style.color = "unset";

                botaoCadastoInativo.style.display = "none";
                botaoCadastoAtivo.style.display = "block";

                svgMoney.style.color = "#000000";
            } else {
                textoPix.classList.remove("textoTrue");
                textoPix.classList.add("textoFalse");
                
                campoChavePix.classList.remove("campoTrue");
                campoChavePix.classList.add("campoFalse");
                campoChavePix.classList.remove("campoWriting");
    
                validacaoPix.innerHTML = "celular inválido"
                validacaoPix.style.color = "red";
    
                botaoCadastoInativo.style.display = "block";
                botaoCadastoAtivo.style.display = "none";

                svgMoney.style.color = "#727272";
            }
        } else if(chavePixDigitada.length < 15){
            textoPix.classList.remove("textoTrue");
            textoPix.classList.remove("textoFalse");
    
            campoChavePix.classList.remove("campoTrue");
            campoChavePix.classList.remove("campoFalse");
            campoChavePix.classList.add("campoWriting");
    
            validacaoPix.innerHTML = ""
            validacaoPix.style.color = "unset";    
    
            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";

            svgMoney.style.color = "#727272";
        }
    }

    if (tipoPix == "email") {
        if(chavePixDigitada.length > 1){
            if(validadorEMAIL(chavePixDigitada) == true){
                textoPix.classList.remove("textoFalse");
                textoPix.classList.add("textoTrue");

                campoChavePix.classList.remove("campoFalse");
                campoChavePix.classList.remove("campoWriting");
                campoChavePix.classList.add("campoTrue");

                validacaoPix.innerHTML = ""
                validacaoPix.style.color = "unset";

                botaoCadastoInativo.style.display = "none";
                botaoCadastoAtivo.style.display = "block";

                svgMoney.style.color = "#000000";
            } else {
                textoPix.classList.remove("textoTrue");
                textoPix.classList.add("textoFalse");
                
                campoChavePix.classList.remove("campoTrue");
                campoChavePix.classList.add("campoFalse");
                campoChavePix.classList.remove("campoWriting");

                validacaoPix.innerHTML = "email inválido"
                validacaoPix.style.color = "red";

                botaoCadastoInativo.style.display = "block";
                botaoCadastoAtivo.style.display = "none";

                svgMoney.style.color = "#727272";
            }
        } else if(chavePixDigitada.length < 1){
            textoPix.classList.remove("textoTrue");
            textoPix.classList.remove("textoFalse");
    
            campoChavePix.classList.remove("campoTrue");
            campoChavePix.classList.remove("campoFalse");
            campoChavePix.classList.add("campoWriting");
    
            validacaoPix.innerHTML = ""
            validacaoPix.style.color = "unset";    
    
            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";

            svgMoney.style.color = "#727272";
        }
    }
}