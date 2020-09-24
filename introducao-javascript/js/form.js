let botao = document.querySelector('#adicionar-paciente');
let mensagemErro = document.querySelector('#mensagem-erro');

botao.addEventListener('click', (event) => {
    event.preventDefault();

    let form = document.querySelector('#form-paciente');
    
    let paciente = obterInformacoesPaciente(form);

    let erros = validarPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagemsDeErro(erros);
        return;
    }

    adicionarPaciente(paciente);

    form.reset();
});

function obterInformacoesPaciente(form) {
    let imc = (form.peso.value / (form.altura.value * 2)).toFixed(1);
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: imc
    }

    return paciente;
}

function adicionarPaciente(paciente) {
    let pacienteTR = document.createElement('tr');
    pacienteTR.classList.add('paciente');

    pacienteTR.appendChild(criarTd(paciente.nome, 'info-nome'));
    pacienteTR.appendChild(criarTd(paciente.peso, 'info-peso'));
    pacienteTR.appendChild(criarTd(paciente.altura, 'info-altura'));
    pacienteTR.appendChild(criarTd(paciente.gordura, 'info-gordura'));
    pacienteTR.appendChild(criarTd(paciente.imc, 'info-imc'));

    document.querySelector('#tabela-pacientes').appendChild(pacienteTR);
}

function criarTd(dado, classe){
    let td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validarPaciente(paciente) {
    let erros = [];

    if(!paciente.nome)
        erros.push('Nome do paciente não poder ficar vazio.');

    if(!pesoEhValido(paciente.peso) || !paciente.peso) 
        erros.push('Peso inválido.');

    if(!alturaEhValida(paciente.altura) || !paciente.altura)
        erros.push('Altura inválida.');
    
    if(!paciente.gordura)
        erros.push('Gordura do paciente não poder ficar vazia.');

    return erros;
}

function exibeMensagemsDeErro(erros) {
    mensagemErro.innerHTML = erros.map(erro => `<li>${erro}</li>`).join('');
    erros = [];
}