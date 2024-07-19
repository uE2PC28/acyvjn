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




// ---------------------- AUTO COMPLETE EXTENSOES DE EMAIL ----------------------------//
$(document).ready(function() {
    //pegando o id do formulario
    $('#emailAux').autocomplete({
        //Aqui declaro algumas possiveis extensoes de email para autocompletar
        data: {
        '@gmail.com': null,
        '@hotmail.com': null,
        '@outlook.com': null,
        '@icloud.com': null,
        '@terra.com.br': null,
        '@yahoo.com.br': null
        },
        limit: 1, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
        // Função quando é valido ou seja completado!
        //alert("ok");
        },
        minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
    });
    detectChanges();
});

let lastLength = $('#emailAux').val().length;

$('#emailUsuario').on('input', function(e) {
    let countSymbol = $(this)
        .val()
        .match(/@/g);
    if (countSymbol) {
        if ($('#emailUsuario').val().substr($('#emailUsuario').val().indexOf('@')).length - 1 > 0) {
            if ($('.autocomplete-content').is(':visible')) {
                $('#emailAux').val($('#emailUsuario').val().substr($('#emailUsuario').val().indexOf('@')));
                $('#emailAux').trigger(
                jQuery.Event('keyup', {
                    keycode: 13
                })
                );
            } else {
                $('#emailAux').val($('#emailUsuario').val().substr($('#emailUsuario').val().indexOf('@')));
                $('#emailAux').trigger(
                jQuery.Event('keyup', {
                    keycode: 13
                })
                );
                $('.autocomplete-content').show();
                e.stopPropagation();
            }
            lastLength = $('#emailAux').val().length;

        } else {
            $('.autocomplete-content').hide();
        }
    } else {
        $('.autocomplete-content').hide();
    }
});

$('#emailUsuario').on('blur', function(e) {
    $('#emailAux').blur();
});

let intervalID = null;

intervalManager(true, detectChanges, 1);

function intervalManager(flag, animate, time) {
    if (flag) intervalID = setInterval(animate, time);
    else clearInterval(intervalID);
}

function detectChanges() {
    if ($('#emailAux').val().length - lastLength > 1) {
        $('#emailUsuario').val($('#emailUsuario').val().substr(0, $('#emailUsuario').val().indexOf('@')) + $('#emailAux').val());
        $('#emailUsuario').focus().blur();
        intervalManager(false);
        $('#emailAux').val('');
        intervalManager(true, detectChanges, 1);
    }
}
// ---------------------- AUTO COMPLETE EXTENSOES DE EMAIL ----------------------------//




// ---------------------- VALIDADOR DE EMAIL ----------------------------//
            function validadorEMAIL(email) {
                var re = /\S+@\S+\.\S+/;
                var teste = re.test(email);

                if(!teste)
                    return false
                
                return true
            }
        
// ---------------------- VALIDADOR DE EMAIL ----------------------------//






// ---------------------- FUNCAO CADASTRO DE CPF ----------------------------//
function verificacaoCpf(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var verificaCpf = document.getElementById("verificaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var verificaNome = document.getElementById("verificaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var verificaCelular = document.getElementById("verificaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var verificaEmail = document.getElementById("verificaEmail");   


    var userName = document.getElementById("userName");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");


    if(cpfDigitado.length == 14){
        if(validadorCPF(cpfDigitado) == true){
            textoCpf.classList.remove("textoFalse");
            textoCpf.classList.add("textoTrue");

            campoCpf.classList.remove("campoFalse");
            campoCpf.classList.remove("campoWriting");
            campoCpf.classList.add("campoTrue");

            validacaoCpf.innerHTML = ""
            validacaoCpf.style.color = "unset";          

            verificaNome.style.display = "block";
            campoNome.focus();
        } else {
            textoCpf.classList.remove("textoTrue");
            textoCpf.classList.add("textoFalse");
            
            campoCpf.classList.remove("campoTrue");
            campoCpf.classList.add("campoFalse");
            campoCpf.classList.remove("campoWriting");

            validacaoCpf.innerHTML = "cpf inválido"
            validacaoCpf.style.color = "red";

            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";
        }
    } 
    else if(cpfDigitado.length < 14){
        textoCpf.classList.remove("textoTrue");
        textoCpf.classList.remove("textoFalse");

        campoCpf.classList.remove("campoTrue");
        campoCpf.classList.remove("campoFalse");
        campoCpf.classList.add("campoWriting");

        validacaoCpf.innerHTML = ""
        validacaoCpf.style.color = "unset";    

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE CPF ----------------------------//



// ---------------------- FUNCAO CADASTRO DE NOME ----------------------------//
function verificacaoNome(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var verificaNome = document.getElementById("verificaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var verificaCelular = document.getElementById("verificaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var verificaEmail = document.getElementById("verificaEmail");   

    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");
    
    if(nomeDigitado.length >= 5){
        textoNome.classList.remove("textoFalse");
        textoNome.classList.add("textoTrue");

        campoNome.classList.remove("campoFalse");
        campoNome.classList.add("campoTrue");
        campoNome.classList.remove("campoWriting");

        validacaoNome.innerHTML = ""
        validacaoNome.style.color = "unset";

        botaoCadastoInativo.style.display = "none";
        botaoCadastoAtivo.style.display = "block";

    } else {
        textoNome.classList.remove("textoTrue");
        textoNome.classList.remove("textoFalse");
        
        campoNome.classList.remove("campoTrue");
        campoNome.classList.remove("campoFalse");
        campoNome.classList.add("campoWriting");


        validacaoNome.innerHTML = "informe seu nome e sobrenome"
        validacaoNome.style.color = "black";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE NOME ----------------------------//



// ---------------------- FUNCAO CADASTRO DE CELULAR ----------------------------//
function verificacaoCelular(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var verificaNome = document.getElementById("verificaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var verificaCelular = document.getElementById("verificaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var verificaEmail = document.getElementById("verificaEmail");   


    var userName = document.getElementById("userName");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");

    if(celularDigitado.length == 15){
        if(validadorCELULAR(celularDigitado) == true){
            textoCelular.classList.remove("textoFalse");
            textoCelular.classList.add("textoTrue");

            campoCelular.classList.remove("campoFalse");
            campoCelular.classList.add("campoTrue");
            campoCelular.classList.remove("campoWriting");

            validacaoCelular.innerHTML = ""
            validacaoCelular.style.color = "unset";

            botaoCadastoInativo.style.display = "none";
            botaoCadastoAtivo.style.display = "block";

        } else {
            textoCelular.classList.remove("textoTrue");
            textoCelular.classList.add("textoFalse");
            
            campoCelular.classList.remove("campoTrue");
            campoCelular.classList.add("campoFalse");
            campoCelular.classList.remove("campoWriting");

            validacaoCelular.innerHTML = "celular inválido"
            validacaoCelular.style.color = "red";

            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";
        }
    } 
    else if(celularDigitado.length < 15){
        textoCelular.classList.remove("textoTrue");
        textoCelular.classList.remove("textoFalse");

        campoCelular.classList.remove("campoTrue");
        campoCelular.classList.remove("campoFalse");
        campoCelular.classList.add("campoWriting");
        
        validacaoCelular.innerHTML = ""

        campoCelular.innerHTML = ""
        campoCelular.style.color = "unset";    

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE CELULAR ----------------------------//



// ---------------------- FUNCAO CADASTRO DE EMAIL ----------------------------//
function verificacaoEmail(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var verificaNome = document.getElementById("verificaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var verificaCelular = document.getElementById("verificaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var verificaEmail = document.getElementById("verificaEmail");   


    var userName = document.getElementById("userName");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");


    var cliqueAutoComplete = document.querySelector(".autocomplete-content");


    if(validadorEMAIL(emailDigitado) == true){
        textoEmail.classList.remove("textoFalse");
        textoEmail.classList.add("textoTrue");

        campoEmail.classList.remove("campoFalse");
        campoEmail.classList.add("campoTrue");
        campoEmail.classList.remove("campoWriting");

        validacaoEmail.innerHTML = ""
        validacaoEmail.style.color = "unset";

        botaoCadastoInativo.style.display = "none";
        botaoCadastoAtivo.style.display = "block";

        cliqueAutoComplete.style.display = "none";

    } else {
        textoEmail.classList.remove("textoTrue");
        textoEmail.classList.remove("textoFalse");
        
        campoEmail.classList.remove("campoTrue");
        campoEmail.classList.remove("campoFalse");
        campoEmail.classList.add("campoWriting");


        validacaoEmail.innerHTML = "digite um email válido"
        validacaoEmail.style.color = "black";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE EMAIL ----------------------------//


// ------- RESET CSS CPF ---------- //  
var cpfTxt = document.getElementById("textoCpf");
var cpfInput = document.getElementById("cpfUsuario");
cpfInput.readOnly = "true";
cpfTxt.classList.add("textoTrue");
cpfInput.classList.add("campoTrue");
// ------- RESET CSS CPF ---------- //  

// ------- RESET CSS NOME ---------- //  
var nomeTxt = document.getElementById("textoNome");
var nomeInput = document.getElementById("nomeUsuario");
nomeInput.readOnly = "true";
nomeTxt.classList.add("textoTrue");
nomeInput.classList.add("campoTrue");
// ------- RESET CSS CPF ---------- //  

// ------- RESET CSS CELULAR ---------- //  
var celularTxt = document.getElementById("textoCelular");
var celularInput = document.getElementById("celularUsuario");
celularInput.readOnly = "true";
celularTxt.classList.add("textoTrue");
celularInput.classList.add("campoTrue");
// ------- RESET CSS CELULAR ---------- // 

// ------- RESET CSS EMAIL ---------- // 
var emailTxt = document.getElementById("textoEmail");
var emailInput = document.getElementById("emailUsuario");
emailInput.readOnly = "true";
emailTxt.classList.add("textoTrue");
emailInput.classList.add("campoTrue");
// ------- RESET CSS EMAIL ---------- // 


// ------- RESET CSS BOTAO ---------- //
var botaoCadastoOff = document.getElementById("continuarCadastroInativo");
var botaoCadastoOn = document.getElementById("continuarCadastroAtivo");
botaoCadastoOff.style.display = "none";
botaoCadastoOn.style.display = "block";
// ------- RESET CSS BOTAO ---------- //


// ------- FUNCOES EDICAO NOME ---------- //
function habilitarCampoNome(){
    var img = document.getElementById("imgEditNome");
    var campoInput = document.getElementById("nomeUsuario");

    if(campoInput.readyOnly = "true"){
        campoInput.removeAttribute('readonly');
        campoInput.focus();

        if (typeof campoInput.selectionStart == "number") {
            campoInput.selectionStart = campoInput.selectionEnd = campoInput.value.length;
        } else if (typeof campoInput.createTextRange != "undefined") {           
            var range = campoInput.createTextRange();
            range.collapse(false);
            range.select();
        }
        img.style.display = "none";
    }
}

function desabilitarCampoNome(){
    var img = document.getElementById("imgEditNome");
    var campoInput = document.getElementById("nomeUsuario");

    img.style.display = "block";
    campoInput.readOnly = "true";
}
// ------- FUNCOES EDICAO NOME ---------- //


// ------- FUNCOES EDICAO CELULAR ---------- //
function habilitarCampoCelular(){
    var img = document.getElementById("imgEditCelular");
    var campoInput = document.getElementById("celularUsuario");

    if(campoInput.readyOnly = "true"){
        campoInput.removeAttribute('readonly');
        campoInput.focus();

        if (typeof campoInput.selectionStart == "number") {
            campoInput.selectionStart = campoInput.selectionEnd = campoInput.value.length;
        } else if (typeof campoInput.createTextRange != "undefined") {           
            var range = campoInput.createTextRange();
            range.collapse(false);
            range.select();
        }
        img.style.display = "none";
    }
}

function desabilitarCampoCelular(){
    var img = document.getElementById("imgEditCelular");
    var campoInput = document.getElementById("celularUsuario");

    img.style.display = "block";
    campoInput.readOnly = "true";
}
// ------- FUNCOES EDICAO CELULAR ---------- //


// ------- FUNCOES EDICAO EMAIL ---------- //
function habilitarCampoEmail(){
    var img = document.getElementById("imgEditEmail");
    var campoInput = document.getElementById("emailUsuario");

    if(campoInput.readyOnly = "true"){
        campoInput.removeAttribute('readonly');
        campoInput.focus();

        if (typeof campoInput.selectionStart == "number") {
            campoInput.selectionStart = campoInput.selectionEnd = campoInput.value.length;
        } else if (typeof campoInput.createTextRange != "undefined") {           
            var range = campoInput.createTextRange();
            range.collapse(false);
            range.select();
        }
        img.style.display = "none";
    }
}

function desabilitarCampoEmail(){
    var img = document.getElementById("imgEditEmail");
    var campoInput = document.getElementById("emailUsuario");

    img.style.display = "block";
    campoInput.readOnly = "true";
}
// ------- FUNCOES EDICAO EMAIL ---------- //