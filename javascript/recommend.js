//SEARCH PRODUCTS
function search(){
    //GETTING THE SEARCH INPUT 
    var input = document.getElementById("inputSearch").value;
    input = input.toLowerCase();
    //console.log("input is " + input);

    //GETS THE PRODUCTS
    var products;
    products = document.getElementsByClassName("name");
    
    //HIDES OR SHOWS PRODUCTS BASED ON INPUT
    var parElem;
    for(i = 0; i < input.length; i++){
        if(!products[i].innerHTML.toLowerCase().includes(input)){
            parElem = products[i].parentElement.parentElement;
            parElem.style.display = "none";
        }
        else{
            parElem = products[i].parentElement.parentElement;
            parElem.style.display = "flex";
        }
    }
    //CLOSES MENU IF IN MOBILE FORMAT 
    if(window.matchMedia("(max-width: 800px)")){
        //console.log("mediquery");
        closeMenu();
    }
}

//CLEARS THE INPUT FOR PRODUCTS
function clearInput(){
    //console.log("clear() linked")
    //GETS THE VALUE IN THE INPUT
    var input;
    input = document.getElementById("inputSearch").value;
    //console.log(input);
    //CHECKS IF IT IS NULL
    if(input != null){
    //SETS THE INPUT TO AN EMPTY STRING
        document.getElementById("inputSearch").value = "";
    }
}

//SHOW ALL THE PRODUCTS
function showAll(){
    //console.log("showAll() linked");
    //GETS ALL OF THE PRODUCTS
    var products;
    products = document.getElementsByClassName("product");
    //CLEARS THE INPUT
    clearInput();
    //DISPLAYS THE POST IF NOT ALREADY DISPLAYED
    for(i = 0; i < products.length; i++){
        if(products[i].style.display = "none"){
            products[i].style.display = "flex";
        }
    }
}

//HELPER: LOADS THE RECIPES INTO THE DATALIST FOR SEARCH BY RECIPE
function loadRecipes(){
    //console.log("loadRecipes() linked");

    //GETS THE RECIPE ELEMENTS
    var recipes;
    recipes = document.getElementsByClassName("exe");
    //console.log(recipes);

    //CHANGES RECIPE ELEMENTS INTO TEXT
    var recipeText = new Array();
    for(i = 0; i < recipes.length; i++){
        recipeText.push(recipes[i].innerText);
    }
    // console.log("recipeText is")
    // console.log(recipeText);

    //GETS THE DATALIST
    var recipeList = document.getElementById("recipeList");

    //PUTS THE RECIPES INTO THE DATALIST
    for(index = 0; index < recipeText.length; index++){
        var option = document.createElement("option");
        option.value = recipeText[index];
        recipeList.appendChild(option);
    }
}

//SEARCH BY RECIPE
function searchRecipe(){
    //console.log("searchRecipe() linked")
    //GETS THE INPUT
    var input;
    input = document.getElementById("recipeInput").value;
    input = input.toLowerCase();
    //console.log(input);

    //GETS THE RECIPES
    var recipes = document.getElementsByClassName("recipes");
    //console.log(recipes);

    //CHECKS IF THE RECIPES ARE IN THE PRODUCT
    var parElem;
    for(i = 0; i < recipes.length; i++){
        //console.log(recipes[i].innerText);
        parElem = recipes[i].parentElement.parentElement.parentElement;
        //console.log(parElem);
        if(recipes[i].innerText.toLowerCase().includes(input)){
            parElem.style.display = "flex";
        }
        else{
            parElem.style.display = "none";
        }
    }
    //CLOSES MENU IF IN MOBILE FORMAT 
    if(window.matchMedia("(max-width: 800px)")){
        //console.log("mediquery");
        closeMenu();
    }
}

//RESETS THE FILTER
function resetFilter(){
    //console.log("resetFilter() linked");
    //GETS ALL OF THE CHECKBOXES
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    //console.log(checkboxes);

    //CHECKS ALL OF THE BOXES
    for(i = 0; i <checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
}

//FILTER PRODUCTS
function filter(){
    //console.log("filter() linked");
    //GETS THE CHECKED FILTER BOXES
    var categories = categoryCheck();
    var locations = locationCheck();

    //GETS THE PRODUCTS
    var products = document.getElementsByClassName("product");
    var results = new Array();

    //IF NOTHING IS SELECTED SHOW ALL
    if(categories.length == 0 && locations.length == 0){
        for(i = 0; i < products.length; i++){
            //console.log(products[i]);
            products[i].style.display = "flex";
        }
    }
    //IF CATEGORIES ARE NOT SELECTED & ONLY FILTERS BY LOCATION
    else if(categories.length == 0){
        results = filterLocation(locations);
    }
    //IF LOCATIONS ARE NOT SELECTED & ONLY FILTERS BY CATEGORIES
    else if(locations.length == 0){
        results = filterCategory(categories);
    }
    //IF BOTH LOCATIONS & CATEGORIES ARE SELECTED
    else{
        var locResults = filterLocation(locations);
        var catResults = filterCategory(categories);
        for(var x = 0; x < catResults.length; x++){
            // console.log("cat")
            // console.log(catResults[x]);
            for(var y = 0; y < locResults.length; y++){
                // console.log("loc")
                // console.log(locResults[y]);
                if(catResults[x] == locResults[y]){
                    results.push(locResults[y]);
                }
            }
        }
    }

    //IF THERE ARE NO RESULTS, SHOW NONE & SOMETHING IS SELECTED
    if(results.length == 0 && categories.length != 0 && locations.length != 0){
        for(i = 0; i < products.length; i++){
            products[i].style.display = "none";
        }
    }

    //SHOWS ONLY PRODUCTS WITH MATCHES
    var match;
    for(i = 0; i < products.length; i++){
        match = false;
        for(var a = 0; a < results.length; a++){
            if(match == false){
                if(products[i] == results[a]){
                    products[i].style.display = "flex";
                    match = true;
                }
                else{
                    products[i].style.display = "none";
                }
            }
        }
    }
    //CLOSES MENU IF IN MOBILE FORMAT 
    if(window.matchMedia("(max-width: 800px)")){
        //console.log("mediquery");
        closeMenu();
    }
}

//HELPER: FILTERS CATEGORIES & RETURNS PRODUCTS THAT MATCH
function filterCategory(selectedCat){
    //GETS THE PRODUCT CATEGORY
    var cat = document.getElementsByClassName("cat");
    var showProducts = new Array();

    //GOES THROUGH THE SELECTED CATEGORIES
    for(var y = 0; y < selectedCat.length; y++){
        //GETS THE LABEL OF THE SELECTED CATEGORIES
        var lbl = selectedCat[y].labels[0].innerText;
        //GOES THROUGH THE PRODUCTS
        for(var i = 0; i < cat.length; i++){
            var product = cat[i].parentElement.parentElement;
            if(cat[i].innerText.includes(lbl)){
                showProducts.push(product);
            }
        }
    }
    return showProducts;
}

//HELPER: FILTERS LOCATION & RETURNS PRODUCTS THAT MATCH
function filterLocation(selectedLocations){
    //GETS THE PRODUCT LOCATIONS/WHERE
    var where = document.getElementsByClassName("where");
    var showProducts = new Array();

    // var loop = 0;

    //VAR MATCH SHOWS WHETHER ALREADY MATCHED
    var match;
    //GOES THROUGH THE PRODUCTS
    for(i = 0; i < where.length; i++){
        var product = where[i].parentElement.parentElement.parentElement;
        match = false;

        // loop++;
        // console.log("begin first for loop. At loop num " + loop);
        // console.log("match is "+ match);
        // console.log("product is " + where[i].innerText);

        //GOES THROUGH THE SELECTED LOCATIONS
        for(var x = 0; x < selectedLocations.length; x++){
            //GETS THE LABEL OF THE CHECKBOX
            var lbl = selectedLocations[x].labels[0].innerText;
            // console.log("begin second for loop");
            // console.log("selectedLocation is " + lbl);
            //IF A MATCH IS NOT ALREADY FOUND
            if(match == false){
                //console.log("if match is false");
                //CHECKS TO SEE IF THE PRODUCT WHERE MATCHES A SELECTED LOCATION
                if(where[i].innerText.includes(lbl)){
                    //PUSHES TO ARRAY
                    showProducts.push(product);
                    // console.log("product pushed");
                    // console.log(showProducts);
                    //SETS MATCH TO TRUE TO INDICATE MATCH FOUND
                    match = true;
                }
            }
            //console.log("end of second loop match is " + match);
        }
    }
    //console.log(showProducts);
    return showProducts;
}

//HELPER: CHECKS WHICH CATEGORIES ARE CHECKED
function categoryCheck(){
    //GETS ALL OF THE CHECKS
    var checks = document.querySelectorAll('input[type=checkbox');

    //GETS THE CHECKS THAT ARE IN CATEGORY
    var categories = new Array();
    for(i = 0; i < checks.length; i++){
        if(checks[i].parentElement.parentElement.parentElement.id == "category"){
            categories.push(checks[i]);
        }
    }
    //console.log(categories);

    //GETS THE CHECKED CATEGORIES
    var checked_cat = new Array();
    for(index = 0; index < categories.length; index++){
        //console.log(categories[index]);
        if(categories[index].checked == true){
            checked_cat.push(categories[index]);
        }
    }
    return checked_cat;
}

//HELPER: CHECKS WHICH LOCATIONS ARE CHECKED
function locationCheck(){
    //GETS ALL OF THE CHECKS
    var checks = document.querySelectorAll('input[type=checkbox');

    //GETS THE CHECKS THAT ARE IN LOCATION
    var locations = new Array();
    for(i = 0; i < checks.length; i++){
        if(checks[i].parentElement.parentElement.parentElement.id == "location"){
            locations.push(checks[i]);
        }
    }
    //console.log(locations);

    //GETS THE CHECKED LOCATIONS
    var checked_loc = new Array();
    for(index = 0; index < locations.length; index++){
        //console.log(locations[index]);
        if(locations[index].checked == true){
            checked_loc.push(locations[index]);
        }
    }
    return checked_loc;
}

//FOR MOBILE: SHOW THE FILTER & SEARCH 
function showMenu(){
    //console.log("linked");
    //get the side column
    sideList = document.getElementsByClassName("side");
    side = sideList[0];
    //console.log(side);
    //get the button
    filterbttn = document.getElementById("popfilter");

    //if not already showing, show & hide filter button
    if(side.style.display != "block"){
        side.style.display = "block";
        filterbttn.style.display = "none";
    }
}

//FOR MOBILE: CLOSE THE FILTER & SEARCH
function closeMenu(){
    sideList = document.getElementsByClassName("side");
    side = sideList[0];
    filterbttn = document.getElementById("popfilter");

    if(side.style.display == "block"){
        side.style.display = "none";
        filterbttn.style.display = "block";
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