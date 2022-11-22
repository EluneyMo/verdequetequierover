var x = 0;

    function mouseOver(){
        
        const name = document.forms['suForm']['name'].value;
        const pass = document.forms['suForm']['pass'].value;
        let validate= /[a-zA-Z0-9]{5}/;


        if((name == ""  || !pass.match(validate) ) && x==0){
        buttonMoveLeft();
        x = 1;
        return false;
        } 

        if((name == "" || !pass.match(validate)) && x==1){
        buttonMoveRight();
        x = 2;
        return false;
        } 

        if((name == "" || !pass.match(validate) ) && x==2){
        buttonMoveLeft();
        x = 1;
        return false;
        } 

        else{

             
            document.getElementById('submit-btn').style.cursor = 'pointer';
            return false;
        };

    };


    

    function buttonMoveLeft(){

        const button = document.getElementById('submit-btn');
        button.style.transform = 'translateX(-160%)';

    };


    function buttonMoveRight(){

        const button = document.getElementById('submit-btn');
        button.style.transform = 'translateX(0%)';

    };


    function resetBtn(){
        const button = document.getElementById('submit-btn');
        button.style.transform = 'translateX(0%)';
    };


    
    hoy = document.getElementById("hoy");

function Elemento(name){
   hoy = document.getElementById("hoy");
   h1 = document.createElement("h1");
   h1.innerHTML = 0;
  hoy.appendChild(h1);
} 




$(window).scroll( function(){

    
    var topWindow = $(window).scrollTop();
    
    var topWindow = topWindow * 1.5;
    
    
    var windowHeight = $(window).height();
        
     
    var position = topWindow / windowHeight;
    
    position = 1 - position;
  
    
    $('.arrow-wrap').css('opacity', position);
  
  });
  
  
  
  
  
  
  
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });