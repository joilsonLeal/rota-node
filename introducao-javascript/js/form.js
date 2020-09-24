let botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('#form-paciente');
    let paciente = obterInformacoesPaciente(form);
    limparFormulario(form);

    adicionarPaciente(paciente);
});

function obterInformacoesPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return paciente;
}

function adicionarPaciente(paciente) {
    let pacienteTR = document.createElement('tr');

    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcularIMC(paciente.peso, paciente.altura);

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(alturaTd);
    pacienteTR.appendChild(gorduraTd);
    pacienteTR.appendChild(imcTd);

    document.querySelector("#tabela-pacientes").appendChild(pacienteTR);
}

function limparFormulario(form) {
    form.nome.value = "";
    form.peso.value = "";
    form.altura.value = "";
    form.gordura.value = "";
}