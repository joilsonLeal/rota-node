let botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('#form-paciente');
    let paciente = obterInformacoesPaciente(form);
    limparFormulario(form);

    adicionarPaciente(paciente);
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

    document.querySelector("#tabela-pacientes").appendChild(pacienteTR);
}

function limparFormulario(form) {
    form.nome.value = "";
    form.peso.value = "";
    form.altura.value = "";
    form.gordura.value = "";
}

function criarTd(dado, classe){
    let td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}