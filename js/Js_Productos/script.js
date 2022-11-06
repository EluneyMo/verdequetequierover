const contProSuculentas = document.getElementById('suculentas');

Suculentas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<h1>${content.nombre}</h1>
    <p>${content.precio}</p>`;
    contProSuculentas.appendChild(div);
})

const contProAcuaticas = document.getElementById('Acuaticas');

Acuaticas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<h1>${content.nombre}</h1>
    <p>${content.precio}</p>`;
    contProAcuaticas.appendChild(div);
})