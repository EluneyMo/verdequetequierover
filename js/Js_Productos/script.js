const contDeSuculentas = document.getElementById('Suculentas');

Suculentas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<h1>${content.nombre}</h1>
    <p>${content.precio}</p>`;
    contDeSuculentas.appendChild(div);
})