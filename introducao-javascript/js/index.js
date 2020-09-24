let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    let imcTd = paciente.querySelector('.info-imc');
    
    if(!validarPeso(peso))
        mostrarErro(paciente, imcTd, 'Peso inválido!');
    else if (!validarAltura(altura))
        mostrarErro(paciente, imcTd, 'Altura inválida!');
    else
        imcTd.textContent = calcularIMC(peso, altura);
});

function validarPeso(peso) {
    if(peso < 0  || peso >= 600)
        return false;
    return true;
}

function validarAltura(altura) {
    if(altura < 0  || altura >= 3.0)
        return false;
    return true;
}

function calcularIMC(peso, altura) {
    return (parseFloat(peso) / (parseFloat(altura) * 2)).toFixed(1);
}

function mostrarErro(paciente, imcTd, message) {
    paciente.classList.add('paciente-invalido');
    imcTd.textContent = message;
}

let botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', (event) => {
    event.preventDefault();
    let form = document.querySelector('#form-paciente');

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTR = document.createElement('tr');

    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso, altura);

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(alturaTd);
    pacienteTR.appendChild(gorduraTd);
    pacienteTR.appendChild(imcTd);

    document.querySelector("#tabela-pacientes").appendChild(pacienteTR);
});