var x=0;
function mouseover(){
     const name=document.forms['suForm']['name'].value;
     const contra=document.forms['suForm']['contra'].value;
     let validate=/[x-zA-Z0-9]{5}/;

     if ((name=="" || !contra.match(validate))&& x==0){
        buttonMoverLeft();
        x=1;
        return false;      
     }

     if((name=="" || !contra.match(validate))&& x==1){
        buttonMoverRight();
        x=2;
        return false;      
     }

     if((name=="" || !contra.match(validate))&& x==2){
        buttonMoverLeft();
        return false;       
     }else{
              document.getElementById('').style.cursor='pointer';
              return false;
     };
};

function buttonMoveLeft(){
     const button=document.getElementById('submit-btn');
     button.style.transform='translateX(-160%)';

};

function buttonMoveRight(){
     const button=document.getElementById('submit-btn');
     button.style.transform='translateX(-160%)';              
}

function resetbtn(){
              
}
