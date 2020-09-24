let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    let imcTd = paciente.querySelector('.info-imc');
    
    if(!validarPeso(peso))
        imcTd.textContent = 'Peso inválido!';
    else if (!validarAltura(altura))
        imcTd.textContent = 'Altura inválida!';
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