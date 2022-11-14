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

var val=0;
function mover(){
  const correo=document.forms ['sugerenciasss']['correo'].value;
const tel=document.forms ['sugerenciasss']['tel'].value;
const asun=document.forms ['sugerenciasss']['asun'].value;
const suge=document.forms ['sugerenciasss']['sugerencias'].value;

if((tel=="" && correo=="" && asun=="" && suge=="") && a==0){
movimiento1();
val=1;
return false;
}
if((tel=="" && correo=="" && asun=="" && suge=="") && a==1){
  movimiento2();
  val=2;
}


function movimiento1(){
  const button= getElementById('enviar');
  enviar.style.transform='translatex(30%)';
  enviar.style.transform='translatey(40%)';
}
function movimiento2(){
  const button= getElementById('enviar');
  enviar.style.transform='translatey(50%)';
  enviar.style.transform='translatex(20%)';
}


function movimiento4(){
  const button= getElementById('enviar');
  enviar.style.transform='translatey(40%)';
  enviar.style.transform='translatex(30%)';
}
}