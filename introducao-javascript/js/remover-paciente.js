pacientes.forEach(paciente => {
        paciente.addEventListener('dblclick', () => {
            paciente.remove();
        })
    }
);