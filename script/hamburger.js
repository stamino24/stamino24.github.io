document.addEventListener("DOMContentLoaded", function(){
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function(e){
        e.stopPropagation();
        menu.classList.toggle("open");
        if(menu.classList.contains("open")){
            hamburger.src = "assets/close.svg";
        }else{
            hamburger.src = "assets/hamburger_menu.svg";
        }
    });

    document.addEventListener("click", function(){
       menu.classList.remove("open");
    })
});