function calculaIMC(peso, altura){
    var imc = peso /(altura**2); //calculo do imc
    return imc.toFixed(2);
}

function verificaIMC(imc){    
    var situacao = null;
    if (imc < 18.5) {
        situcao = "Magreza";
    }else if (imc > 18.5 && imc <= 24.9){
        situacao = "Normal";
    }else if (imc > 24.9 && imc <= 30){
        situacao = "Sobrepeso";
    }else{
        situacao = "Obeso";
    }
    return situacao;
}

function mostraPaciente(paciente){
    var imc = calculaIMC(paciente.peso, paciente.altura);
    var situacao = verificaIMC(imc);

    var elNome = document.getElementById("nome");
    elNome.innerHTML = paciente.nome;
    var elPeso = document.getElementById("peso");
    elPeso.innerHTML = paciente.peso;
    var elAltura = document.getElementById("altura");
    elAltura.innerHTML = paciente.altura;
    var elImc = document.getElementById("imc");
    elImc.innerHTML = imc;
    var elSituacao = document.getElementById("situacao");
    elSituacao.innerHTML = situacao;
}

function lePaciente(){
    var inputNome = document.getElementById("txtNome");
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");

    var paciente = {
        nome: inputNome.value,
        peso: inputPeso.value,
        altura: inputAltura.value,
    };

    return paciente;
}

function gerarRelatorio(pacientes){
    var listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = "";

    pacientes.forEach((paciente) => {
        var imc = calculaIMC(paciente.peso, paciente.altura);
        var sit = verificaIMC(imc);
        listaNumerada.innerHTML += `<li>${paciente.nome} - Situação: ${sit}</li>`;
    });
}