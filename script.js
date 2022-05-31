// not needed as i have remove the more section
/*const moreButton = document.querySelector("#more");
const moreBox = document.querySelector(".more");
const moreItems = document.querySelectorAll(".more ul li");


moreButton.addEventListener("click", function(){
    moreBox.classList.toggle("design");
    moreItems.forEach(function(moreItem){
        moreItem.addEventListener("click", function(){
            moreBox.classList.remove("design");
        })
    })
})*/

//team name display
const teams = document.querySelectorAll(".member img");
const teamsNames = document.querySelectorAll(".member h2");

for(let i = 0;i < teams.length; i ++){
    teams[i].addEventListener("mouseover", function(){
        teamsNames[i].style.display = "block";
    })
    teams[i].addEventListener("mouseout", function(){
        teamsNames[i].style.display = "none";
    })
}

//menu display
const menubar = document.querySelector("header .bar i");
const menu = document.querySelector(".menu");
const cancel = document.querySelector(".menu div i");
const menuitems = document.querySelectorAll(".menu li a");

menubar.addEventListener("click", function(){
    menu.style.display = "block";
})
cancel.addEventListener("click", function(){
    menu.style.display = "none";
})
menuitems.forEach(function(menuitem){
    menuitem.addEventListener("click", function(){
        menu.style.display = "none";
    })
})
