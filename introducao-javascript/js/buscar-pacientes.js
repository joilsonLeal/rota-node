let buscarPacientes = document.querySelector('#buscar-pacientes');
let buscaErro = document.querySelector('#busca-erro');


buscarPacientes.addEventListener('click', async () => {
    let pacientes = await fetch('http://api-pacientes.herokuapp.com/pacientes')
        .then(response => response.json())
        .catch(err => {
            buscaErro.textContent = 'Não foi possivel carregar os pacientes.'
        });
    
    if(pacientes) {
        pacientes.forEach(paciente => adicionarPaciente(paciente));
        buscaErro.textContent = '';
    }
});