//SEARCHS POSTS
function search(){
    //console.log("test_function linked");
    //GETTING THE SEARCH INPUT 
    var input = document.getElementById("inputSearch").value;
    input = input.toLowerCase();
    //console.log("input is " + input);

    //GETS THE TITLES OF THE BLOG POSTS
    var posts;
    posts = document.getElementsByClassName("title");
    
    //HIDES OR SHOWS POSTS BASED ON INPUT
    var parElem;
    for(i = 0; i < input.length; i++){     
        if(!posts[i].innerHTML.toLowerCase().includes(input)){
            parElem = posts[i].parentElement.parentElement.parentElement;
            parElem.style.display = "none";
        }
        else{
            parElem = posts[i].parentElement.parentElement.parentElement;
            parElem.style.display = "block";
        }
   }
}

//CLEARS THE INPUT
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

//SHOW ALL THE POSTS
function showAll(){
    //console.log("showAll() linked");
    //GETS ALL OF THE POSTS
    var posts;
    posts = document.getElementsByClassName("post");
    //CLEARS THE INPUT
    clearInput();
    //DISPLAYS THE POST IF NOT ALREADY DISPLAYED
    for(i = 0; i < posts.length; i++){
        if(posts[i].parentElement.style.display = "none"){
            posts[i].parentElement.style.display = "block";
        }
    }
}

//SORT THE POSTS
function sortby(){
    //GETS THE SELECTED VALUE
    var selectedValue = document.getElementById("sortby").value;
    console.log(selectedValue);
    //SORT BY OLDEST
    if(selectedValue == "oldest"){
        dateSort("oldest");
    }
    //SORT BY NEWEST
    else if(selectedValue == "newest"){
        dateSort("newest");
    }
    //SORT BY A-Z
    else if(selectedValue == "atoz"){
        alphaSort("atoz");
    }
    //SORT BY Z-A
    else if(selectedValue == "ztoa"){
        alphaSort("ztoa");
    }
    else{
        console.log("nothing");
    }
}

//SORT BY ALPHA
function alphaSort(type){
    //GETS THE POSTS
    var posts = document.getElementsByClassName("title");
    //console.log(posts);
    //CREATE A DICTIONARY
    const names = [];
    var index = 0;
    //ADD EACH POST TO DICTIONARY WHERE {ELEM: POST, TITLE: TITLENAME}
    for(i = 0; i < posts.length; i++){
        var titleName = posts[i].innerHTML.toLowerCase();
        //console.log("titleName is " + titleName);
        names[index] = {elem: posts[i], title: titleName};
        index++;
    }
    //SORT BASED ON A TO Z OR Z TO A
    if(type == "atoz"){
        names.sort(compareAtoZ);
    }
    else if(type == "ztoa"){
        names.sort(compareZtoA);
    }
    else{
        console.log("do nothing");
    }
}

//SORT BY DATE
function dateSort(type){
    //GETS THE POSTS
    var posts = document.getElementsByClassName("date");
    //CREATE A DICTIONARY
    const dates = [];
    var index = 0;
    //ADD EACH POST TO THE DICTIONARY WHERE {ELEM: POST, DATE: DATEOBJECT}
    for(i = 0; i < posts.length; i++){
        var dateString = posts[i].innerHTML;
        //console.log("dateString is " + dateString);
        dates[index] = {elem:posts[i], date: new Date(dateString)};
        index++;
        //console.log(dates);;
    }
    //SORT BASED ON EITHER OLDEST OR NEWEST
    if(type == "oldest"){
        dates.sort(compareOld);
    }
    else if(type == "newest"){
        dates.sort(compareNew);
    }
    //console.log(dates);
}

//COMPARE FUNCTION TO SORT BY OLDEST
function compareOld(a, b){
    let val = 0;
    // console.log("a is ");
    // console.log(a);
    // console.log("b is ");
    // console.log(b);
    //A IS LATER THAN B
    if(a.date > b.date){
        val = 1;
        //GETS THE PARENT ELEMENTS OF A & B
        var b_parent = b.elem.parentElement.parentElement.parentElement;
        var a_parent = a.elem.parentElement.parentElement.parentElement;
        //CHANGES THE ORDER SO B APPEARS BEFORE A
        b_parent.parentElement.insertBefore(b_parent, a_parent);
    }
    else if(a.date < b.date){
        val = -1;
    }
    // console.log(val);
    return val;
}

//COMPARE FUNCTION TO SORT BY NEWEST
function compareNew(a, b){
    let val = 0;
    //A IS EARLIER THAN B
    if(a.date > b.date){
        val = -1;
    }
    else if(a.date < b.date){
        val = 1;
        //GETS THE PARENT ELEMENTS OF A & B
        var b_parent = b.elem.parentElement.parentElement.parentElement;
        var a_parent = a.elem.parentElement.parentElement.parentElement;
        //CHANGES THE ORDER SO THAT B APPEARS BEFORE A
        b_parent.parentElement.insertBefore(b_parent, a_parent);
    }
    return val;
}

//COMPARE FUNCTION TO SORT A TO Z
function compareAtoZ(a, b){
    let val = 0;
    console.log("a is ");
    console.log(a);
    console.log("b is ");
    console.log(b);
    // A COMES AFTER B
    if(a.title > b.title){
        val = 1;
        //GETS THE PARENT ELEMENTS OF A & B
        var b_parent = b.elem.parentElement.parentElement.parentElement;
        var a_parent = a.elem.parentElement.parentElement.parentElement;
        //CHANGES THE ORDER SO B APPEARS BEFORE A
        b_parent.parentElement.insertBefore(b_parent, a_parent);
    }
    else if(a.title < b.title){
        val = -1;
    }
    console.log(val);
    return val;
}

//COMPARE FUNCTION TO SORT Z to A
function compareZtoA(a, b){
    let val = 0;
    console.log("a is ");
    console.log(a.title);
    console.log("b is ");
    console.log(b.title);
    // A COMES AFTER B
    if(a.title > b.title){
        val = -1;
    }
    else if(a.title < b.title){
        val = 1;
         //GETS THE PARENT ELEMENTS OF A & B
         var b_parent = b.elem.parentElement.parentElement.parentElement;
         var a_parent = a.elem.parentElement.parentElement.parentElement;
         //CHANGES THE ORDER SO B APPEARS BEFORE A
         b_parent.parentElement.insertBefore(b_parent, a_parent);
    }
    console.log(val);
    return val;
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