// var paciente = {
//     nome: "Acácio Novoa",
//     peso: 89,
//     altura: 1.70,
// }

// mostraPaciente(paciente);
var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener('click', function(){
                        var paciente = lePaciente();
                        pacientes.push(paciente);
                        mostraPaciente(paciente);
                    })

var botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener('click', function(){
    gerarRelatorio(pacientes);
})

// console.log(nome);
// console.log(peso);
// console.log(altura);
// console.log(imc.toFixed(2));