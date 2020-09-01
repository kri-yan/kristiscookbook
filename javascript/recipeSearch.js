function search(){
    //GETS THE INPUT & SETS IT TO LOWERCASE
    let input = document.getElementById("inputSearch").value;
    input = input.toLowerCase();
    //GETS THE RECIPES
    let recipes = document.getElementsByClassName("list");

    for(i = 0; i < recipes.length; i++){
        if(!recipes[i].innerHTML.toLowerCase().includes(input)){
            recipes[i].style.display = "none";
        }
        else{
            recipes[i].style.display = "block";
        }
    }

}

//FOR MOBILE (HELPER): LOADS RECIPES INTO THE DATALIST
function loadRecipes(){
    //GETS THE RECIPE NAMES
    var recipes;
    recipes = document.getElementsByClassName("name");
    //console.log(recipes);
    
    //GETS THE DATALIST
    var recipeList = document.getElementById("recipeList");

    //PUTS THE RECIPES INTO THE DATALST
    for(i = 0; i < recipes.length; i++){
        var option = document.createElement("option");
        option.value = recipes[i].innerText;
        recipeList.appendChild(option);
    }
}


//FOR MOBILE: SEARCH 
function mobileSearch(){
    //console.log("linked");
    //GETS THE INPUT
    var input;
    input = document.getElementById("mobileSearch").value;
    input = input.toLowerCase();
    //console.log(input);

    //GETS THE RECIPES
    var names = document.getElementsByClassName("name");
    //console.log(names);

    var parElem;
    var name;
    //GOES THROUGH THE RECIPES TO SEE IF MATCHES INPUT
    for(i = 0; i < names.length; i++){
      name = names[i].innerText.toLowerCase();
      //console.log(name);

      //IF MATCHES, GET PARELEM & SCROLL INTO VIEW
      if(input == name){
        parElem = names[i].parentElement;
        //console.log(parElem);
        //alert("test");
        parElem.scrollIntoView(true);
        console.log("true");
      }
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