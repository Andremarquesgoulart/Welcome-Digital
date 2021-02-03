// FUNÇÃO OPEN HAMBURGUER

let hamburguer = document.querySelector('.hamburguer');
hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

// FUNÇÃO CLOSE HAMBURGUER

let closeHamburguer = document.querySelector('.hamburguer');
closeHamburguer.addEventListener("click",function(){
    document.querySelector(".hamburguer").classList.toggle("show-menu-close");
})