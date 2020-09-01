function search(){
    //console.log("search() linked");

    //GETS THE INPUT
    let input = document.getElementById("inputSearch").value;
    input = input.toLowerCase();
    //console.log(input);

    //CHECKS FOR RECIPES
    checkrecipes(input);
}

function checkrecipes(input){
    //console.log("checkrecipes linked");

    //GETS THE RECIPES
    let recipes = document.getElementsByClassName("list");
    //HIDE IF DOESNT MATCH INPUT ELSE SHOW
    for(i = 0; i < recipes.length; i++){
        if(!recipes[i].innerHTML.toLowerCase().includes(input)){
            recipes[i].style.display = "none";
        }
        else{
            recipes[i].style.display = "block";
        }
    }

    //CHECKS TO SEE IF CATEGORIES ARE EMPTY
    let categories = document.getElementsByClassName("section");
    for(var i = 0; i < categories.length; i++){
        hideEmpty(categories[i]);
    }
}

//HIDES CATEGORIES THAT ARE EMPTY
function hideEmpty(cat){
    //console.log("hideEmpty linked");

    //COUNTS NUM OF CHILD ELEMENTS WITH DISPLAY != NONE
    let num = -1;
    // console.log(cat)
    // console.log(cat.children.length);
    for(var i = 0; i < cat.children.length; i++){
        if(cat.children[i].style.display != "none"){
            num++;
        }
    }
    //HIDE DIV IF NO RECIPES ARE SHOWN
    if(num == 0){
        cat.style.display = "none";
    }
    else{
        cat.style.display = "block";
    }
}

//FOR MOBILE: OPEN HAMBURGER MENU
function openMobile(){
    var mobileNav = document.getElementById("mobileNav");
    if(mobileNav.style.display != "block"){
      mobileNav.style.display = "block";
    }
  }
  
  //FOR MOBILE: CLOSE HAMBURGER MENU
  function closeMobile(){
    var mobileNav = document.getElementById("mobileNav");
    if(mobileNav.style.display == "block"){
      mobileNav.style.display = "none";
    }
  }
  
  
  //FOR MOBILE: DROPDOWN MENU
  function mobiledrop(){
    var mobileCat = document.getElementById("mobileCat");
    if(mobileCat.style.display != "block"){
      mobileCat.style.display = "block";
    }
    else{
      mobileCat.style.display = "none";
    }
  }