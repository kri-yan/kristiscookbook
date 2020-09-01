/* CONVERT FROM ONE UNIT TO ANOTHER */
function convert(input, output, msg){
    /* GETS THE INPUT VALUE & TURNS IT INTO A FLOAT */
    var str_val = document.getElementById(input).value;
    val = parseFloat(str_val);
    // console.log(val);

    //IF EMPTY STRING, REMOVE MESSAGE & DISPLAY NOTHING
    if(str_val == ""){
        // console.log("true");
        document.getElementById(output).value = "";
        var msg = document.getElementById(msg);
        msg.innerText = ""
    }
    //IF NOT A NUMBER, ADD AN ERROR MESSAGE 
    else if(str_val != "" && isNaN(val)){
        var msg = document.getElementById(msg);
        msg.innerText = "Please Enter a Valid Number"
    }
    else{
        if(msg == "volMsg"){
            outputVal = helper_vol(val, input);
        }
        else if(msg =="weightMsg"){
            outputVal = helper_weight(val, input);
        }
        else if(msg =="tempMsg"){
            outputVal = helper_temp(val, input);
        }
        document.getElementById(output).value = outputVal;
    }
}

/* HELPER: CONVERTS VOLUME */
function helper_vol(inputVal, input){
    //REMOVE THE ERROR MESSAGE
    var msg = document.getElementById("volMsg");
    msg.innerText = "";

    //GETS THE UNITS & SETS INPUT VS OUTPUT 
    if(input == "inputVol1"){
        var inputUnit = document.getElementById("optionVol1").value;
        var outputUnit = document.getElementById("optionVol2").value;
    }
    else{       
        var inputUnit = document.getElementById("optionVol2").value;
        var outputUnit = document.getElementById("optionVol1").value;
        
    }

    //CONVERTS INPUTVAL INTO CUPS
    if(inputUnit == "tsp"){
        inputVal = inputVal / 48;
    }
    else if(inputUnit == "tbsp"){
        inputVal = inputVal / 16; 
    }
    else if(inputUnit == "cup"){
        inputVal = inputVal;
    }
    else if(inputUnit == "pt"){
        inputVal = inputVal * 2;
    }
    else if(inputUnit == "qt"){
        inputVal = inputVal * 4;
    }
    else if(inputUnit == "gal"){
        inputVal = inputVal * 16;
    }
    else if(inputUnit =="mL"){
        inputVal = inputVal / 236.58824;
    }
    else if(inputUnit = "liter"){
        inputVal = inputVal * 4.2267528377;
    }
    else{
        msg.innerText = "Error: Please Try Again Later"
    }
    // console.log("input" + inputVal);

    //CONVERTS CUPS TO OUTPUT UNIT
    // console.log(outputUnit)
    var outputVal;
    if(outputUnit == "tsp"){
        outputVal = inputVal * 48;
    }
    else if(outputUnit == "tbsp"){
        outputVal = inputVal * 16; 
    }
    else if(outputUnit == "cup"){
        outputVal = inputVal;
    }
    else if(outputUnit == "pt"){
        outputVal = inputVal / 2;
    }
    else if(outputUnit == "qt"){
        outputVal = inputVal / 4;
    }
    else if(outputUnit == "gal"){
        outputVal = inputVal / 16;
    }
    else if(outputUnit =="mL"){
        outputVal = inputVal * 236.58824;
    }
    else if(outputUnit = "liter"){
        outputVal = inputVal / 4.2267528377;
    }
    else{
        msg.innerText = "Error: Please Try Again Later"
    }
    // console.log("output" + outputVal);
    outputVal = outputVal.toFixed(4);
    return outputVal;
}

/* HELPER: CONVERTS WEIGHT */
function helper_weight(inputVal, input){
    //REMOVE THE ERROR MESSAGE
    var msg = document.getElementById("weightMsg");
    msg.innerText = "";

    //GETS THE UNITS & SETS INPUT VS OUTPUT 
    if(input == "inputWeight1"){
        var inputUnit = document.getElementById("optionWeight1").value;
        var outputUnit = document.getElementById("optionWeight2").value;
    }
    else{       
        var inputUnit = document.getElementById("optionWeight2").value;
        var outputUnit = document.getElementById("optionWeight1").value;
    }

    //CONVERTS INPUTVAL INTO OZ
    if(inputUnit == "oz"){
        inputVal = inputVal;
    }
    else if(inputUnit == "lb"){
        inputVal = inputVal * 16;
    }
    else if(inputUnit == "g"){
        inputVal = inputVal / 28.349523;
    }
    else{
        msg.innerText = "Error: Please Try Again Later"
    }
    // console.log("input" + inputVal);

    //CONVERTS OZ TO OUTPUT UNIT
    var outputVal;
    if(outputUnit == "oz"){
        outputVal = inputVal;
    }
    else if(outputUnit == "lb"){
        outputVal = inputVal / 16;
    }
    else if(outputUnit == "g"){
        outputVal = inputVal * 28.349523;
    }
    else{
        msg.innerText = "Error: Please Try Again Later"
    }
    // console.log("output" + outputVal);
    outputVal = outputVal.toFixed(4);
    return outputVal;
}

/* HELPER: CONVERTS TEMPERATURE */
function helper_temp(inputVal, input){
    //REMOVE THE ERROR MESSAGE
    var msg = document.getElementById("tempMsg");
    msg.innerText = "";

    //GETS THE UNITS & SETS INPUT VS OUTPUT 
    if(input == "inputTemp1"){
        var inputUnit = document.getElementById("optionTemp1").value;
        var outputUnit = document.getElementById("optionTemp2").value;
    }
    else{       
        var inputUnit = document.getElementById("optionTemp2").value;
        var outputUnit = document.getElementById("optionTemp1").value;
    }

    //CONVERTS INPUTVAL INTO F
    if(inputUnit == "degF"){
        inputVal = inputVal;
    }
    else if(inputUnit == "degC"){
        inputVal = (inputVal * (9/5)) + 32
    }
    else{
        msg.innerText = "Error: Please Try Again Later"
    }
    // console.log("input" + inputVal);

    //CONVERTS OZ TO OUTPUT UNIT
    var outputVal;
    if(outputUnit == "degF"){
        outputVal = inputVal;
    }
    else if(outputUnit == "degC"){
        outputVal = (inputVal - 32) * (5/9);
    }
    else{
        msg.innerText = "Error: Please Try Again Later"
    }
    // console.log("output" + outputVal);
    outputVal = outputVal.toFixed(4);
    return outputVal;
}

/* CUPS TO GRAMS CONVERTER */
function ctg_convert(input, output){
    // console.log("ctg");
    //GETS THE TYPE OF INGREDIENT, INPUT VALUE, OUTPUT ELEMENT
    var type = document.getElementById("ingredient").value;
    var msg = document.getElementById("ctgMsg");
    var output = document.getElementById(output);

    var str_inputVal = document.getElementById(input).value;
    inputVal = parseFloat(str_inputVal);
    // console.log(type);

    //IF EMPTY STRING, REMOVE MESSAGE & DISPLAY NOTHING
    if(str_inputVal == ""){
        // console.log("true");
        document.getElementById(output).value = "";
        msg.innerText = ""
    }
    //IF NOT A NUMBER, ADD AN ERROR MESSAGE 
    else if(str_inputVal != "" && isNaN(inputVal)){
        msg.innerText = "Please Enter a Valid Number"
    }
    else{
    msg.innerText = "";
    var outputVal;
    //INPUT IS IN CUPS
    if(input == "inputC"){
        //ap flour
        if(type == "ap_flour"){
            outputVal = inputVal * 120;
        }
        //cake flour
        else if(type == "cake_flour"){
            outputVal = inputVal * 110;
        }
        //cocoa powder
        else if(type == "cocoa_powder"){
            outputVal = inputVal * 84
        }
        //matcha powder
        else if(type == "matcha_powder"){
            outputVal = inputVal * 96
        }
        //brown sugar
        else if(type == "brown_sugar"){
            outputVal = inputVal * 213
        }
        //white sugar
        else if(type == "white_sugar"){
            outputVal = inputVal * 198
        }
        //syrup
        else if(type == "syrup"){
            outputVal = inputVal * 340;
        }
        //butter
        else if(type == "butter"){
            outputVal = inputVal * 226;
        }
        //vegetable oil
        else if(type == "vegetable_oil"){
            outputVal = inputVal * 198;
        }
        //milk
        else if(type == "milk"){
            outputVal = inputVal * 227
        }
        else{
            msg.innerText = "Error: Please Try Again Later";
        }
        outputVal = outputVal.toFixed(4);
        output.value = outputVal;
    }

    //INPUT IS IN GRAMS
    if(input == "inputG"){
        //ap flour
        if(type == "ap_flour"){
            outputVal = inputVal / 120;
        }
        //cake flour
        else if(type == "cake_flour"){
            outputVal = inputVal / 110;
        }
        //cocoa powder
        else if(type == "cocoa_powder"){
            outputVal = inputVal / 84
        }
        //matcha powder
        else if(type == "matcha_powder"){
            outputVal = inputVal / 96
        }
        //brown sugar
        else if(type == "brown_sugar"){
            outputVal = inputVal / 213
        }
        //white sugar
        else if(type == "white_sugar"){
            outputVal = inputVal / 198
        }
        //syrup
        else if(type == "syrup"){
            outputVal = inputVal / 340;
        }
        //butter
        else if(type == "butter"){
            outputVal = inputVal / 226;
        }
        //vegetable oil
        else if(type == "vegetable_oil"){
            outputVal = inputVal / 198;
        }
        //milk
        else if(type == "milk"){
            outputVal = inputVal / 227
        }
        else{
            msg.innerText = "Error: Please Try Again Later";
        }
        outputVal = outputVal.toFixed(4);
        output.value = outputVal;
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