function clearCampos(){
    document.getElementById('nome').value='';
    document.getElementById('email').value='';
    document.getElementById('telefone').value='';

}

function validaTema(){
 
    //verifica qual classe esta no id
    if(document.getElementById('changeColor').classList.contains("backgroundDark")){
        //se for dark muda para light
        document.getElementById('changeColor').classList.remove("backgroundDark");
        document.getElementById('changeColor').classList.add("backgroundLight");

    }else{
        //se for light muda para dark
        document.getElementById('changeColor').classList.remove("backgroundLight");
        document.getElementById('changeColor').classList.add("backgroundDark");
    }

}


const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

function validarEmail(){
    var email = document.getElementById('email').value;
    if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
        alert('Email inválido');
        return false;
    }
    return true;
}

function validarTelefone(){
    var telefone = document.getElementById('telefone').value;
    if(telefone.length < 8){
        alert('Telefone inválido');
        return false;
    }
    return true;
}

function validarNome(){
    var nome = document.getElementById('nome').value;
    if(nome.length < 3){
        alert('Nome inválido');
        return false;
    }
    return true;
}

function validarFormulario(){
    if(validarNome() && validarEmail() && validarTelefone()){
        alert('Formulário enviado com sucesso');
        clearCampos();
    }
}
