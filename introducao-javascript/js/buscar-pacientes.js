let buscarPacientes = document.querySelector('#buscar-pacientes');

buscarPacientes.addEventListener('click', async () => {
    await   fetch('http://api-pacientes.herokuapp.com/pacientes')
            .then(response => 
                response.json().then( result =>  
                    result.forEach(paciente => adicionarPaciente(paciente)) 
                )
            );
});