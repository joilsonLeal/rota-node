let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let tr = document.createElement('tr');

    campos.forEach(campo => {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0] = '';
    campos[1] = 1;
    campos[2] = 0;

    campos[0];focus();
})