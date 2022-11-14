addEventListener ('DOMContentLoaded', () =>{
 const imagenes = ['imagenes/cuidados-principales-de-los-claveles-1280x720x80xX.jpg' , 'imagenes/Imagen 3 girasol.jpg', 'imagenes/R (1).jpg' ]
 
 let i = 1
 const img1= document.querySelector ('#img1')
 const img2= document.querySelector ('#img2')
 const progressbar= document.querySelector ('#progressbar')
 let porcentajeb=100/imagenes
 let porcentajea=porcentajeb

 progressbar.style.width= `${porcentajeb}%`
 img1.scr =imagenes[0]

 const slideshowdos = () => {
    img2.src =imagenes[i]
    img2.classList.add('active')
    i++
    porcentajea+=porcentajeb
    progressbar.style.width= `${porcentajea}%`
    if (i == imagenes.length){
        i =0
        porcentajea=porcentajeb-porcentajeb
    }

    setTimeout(() => {
      img1.src=img2.src
      img2.classList.remove('active')
    }, 2000);
 }
 setInterval(slideshowdos, 3000)
})
function Mostrarboton(){
document.getElementById ('hovers').style.visibility='visible';
document.getElementById ('hovers2').style.visibility='visible';
}

function mover(){
  correo=document.getElementById("correo").value;
  tel=document.getElementById("tel").value;
asun=document.getElementById("asun").value;
sugerencias= document.getElementById("sugerencias").value;
val=0;
if(tel==""){
val++;
}
if(asun== ""){
  val++;
}
if(correo==""){
  val++;
}
if (sugerencias == ""){
  val++;
}
if (val == 0){
  enviar.style.margin="0px";
}else{
  enviar.addEventListener ('mouseover', function(){
  const randomX = parseInt(Math.random()*100);
  const randomY = parseInt(Math.random()*100);
  enviar.style.setProperty('top',randomY+'%');
  enviar.style.setProperty('left',randomX+'%');
  enviar.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
}
}
document.getElementById("correo").addEventListener("keyup", function mover());
document.getElementById("tel").addEventListener("keyup", mover);
document.getElementById("asun").addEventListener("keyup", mover);
document.getElementById("sugerencias").addEventListener("keyup", mover);
document.getElementById("enviar").addEventListener("click", ()=>{

alert("Gracias por tus sugerencias!!");
});