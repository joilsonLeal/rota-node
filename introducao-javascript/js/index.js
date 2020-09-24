let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    let imc = paciente.querySelector('.info-imc');
    
    imc.textContent = calcularIMC(peso, altura);
});

function calcularIMC(peso, altura) {
    return (parseFloat(peso) / (parseFloat(altura) * 2)).toFixed(1);
}