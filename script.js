var a = document.querySelector('a')
var hr = document.querySelector('hr')
var img = document.querySelector('.img_section')
var burger = document.getElementById('icon')

// menu mobile
burger.onclick = function(){
    this.classList.toggle("change");
    
     var menu = document.getElementById('menuMobile')

     if(menu.style.display === "block"){
         menu.style.display = "none"
     }else{
         menu.style.display = "block"
     }
}