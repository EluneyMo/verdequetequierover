const contDeProductos = document.getElementById('contProductos');

Plantas.forEach((content) =>{
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = '<h3>${content.nombre</h3><p>content.precio</p>';
    contDeProductos.appendChild(div);
})