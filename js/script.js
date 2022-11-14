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
const girasol = document.getElementById('girasol');
const correo = document.getElementById('correo');
const telefono= document.getElementById('tel');
const asunto= document.getElementById('asun');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth / 2;
const altoMitad = window.innerHeight / 2;
let seguirPunteroMouse = true;

body.addEventListener('mousemove', (m) => {
  if (seguirPunteroMouse) {
    if (m.clientX < anchoMitad && m.clientY < altoMitad) {
      girasol.src = "../imagenes/1-PhotoRoom.png";
    }else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
      girasol.src = "../imagenes/2-removebg-preview.png";
    }else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
      girasol.src = "../imagenes/1-removebg-preview.png";
    }else{
      girasol.src="../imagenes/2-PhotoRoom.png";
    }
  }
})
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
  enviar.style.transform = `translate(0px,0px)`;
}else{
  enviar.style.transform = `translate(100px,2px)`;
}
}
document.getElementById("correo").addEventListener("keyup", mover);
document.getElementById("tel").addEventListener("keyup", mover);
document.getElementById("asun").addEventListener("keyup", mover);
document.getElementById("sugerencias").addEventListener("keyup", mover);
document.getElementById("enviar").addEventListener("click", ()=>{

alert("Gracias por tus sugerencias!!");
});