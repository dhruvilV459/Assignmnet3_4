function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
function getInputValue() {
    // Selecting the input element and get its value 
    var usd_Amount = document.getElementById("usd").value
    var cad_Amount = document.getElementById("cad").value
    
    if(usd_Amount !== null && cad_Amount.length == 0){
        if(isNumber(usd_Amount)){
            cad_Amount = 1.32*usd_Amount
            document.getElementById("cad").value  = cad_Amount
        }else{
            alert("Please Enter numerical Input")
        }
    }else if(cad_Amount !== null && usd_Amount.length == 0){
        if(isNumber(cad_Amount)){
            usd_Amount = 0.76*cad_Amount
            document.getElementById("usd").value  = usd_Amount
        }else{
            alert("Please Enter numerical Input")
        }
    }
    else{
        alert("Inappropriate Input. Please Enter value in only one field")
    }
}

