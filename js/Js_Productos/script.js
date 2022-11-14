const contDeSuculentas = document.getElementById('Suculentas');

Suculentas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeSuculentas.appendChild(div);
})

const contDeAcuaticas = document.getElementById('Acuaticas');

Acuaticas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeAcuaticas .appendChild(div);
})

const contDeArbustos = document.getElementById('Arbustos');

Arbustos.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeArbustos .appendChild(div);
})

const contDeArboles = document.getElementById('Arboles');

Arboles.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeArboles .appendChild(div);
})

const contDeBulbosas = document.getElementById('Bulbosas');

Bulbosas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeBulbosas .appendChild(div);
})

const contDeCactus = document.getElementById('Cactus');

Cactus.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeCactus .appendChild(div);
})

const contDePlantas_Carnivoras = document.getElementById('Plantas_Carnivoras');

Plantas_Carnivoras.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDePlantas_Carnivoras .appendChild(div);
})

const contDeEnredaderas = document.getElementById('Enredaderas');

Enredaderas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeEnredaderas .appendChild(div);
})

const contDeFolres = document.getElementById('Flores');

Folres.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeFolres .appendChild(div);
})

const contDeHerbáceas = document.getElementById('Herbáceas');

Herbáceas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `<img src="${content.img}"><h1>${content.nombre}</h1>
    <a href="#">${content.precio}</a>`;
    contDeHerbáceas .appendChild(div);
})