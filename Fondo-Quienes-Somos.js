//Fondos de quienes somos

var index = 0;

    var listaimg = ["./img/Fondo Quienes somos/Programador 1.jpg, ./img/Fondo Quienes somos/Programador 2.jpg, ./img/Fondo Quienes somos/Programador 3.jpg];
$(function() {
  
    setInterval(changeImage, 2000);
  
});

function changeImage() {
  
 
   $('QuienesSomos').css("background-image", 'url(' + listaimg[index] + ')');
                  
   index++;
                  
   if(index == 4)
      index = 0;
    
    
}