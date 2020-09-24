let filtro = document.querySelector('#filtrar-tabela');

filtro.addEventListener('input', (e) => {
    pacientes.forEach(paciente => {
        let nome = paciente.querySelector('.info-nome').textContent;

        let regex = new RegExp(e.target.value, "i");

        if(e.target.value && !regex.test(nome)) {
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel');
        }
    })
});