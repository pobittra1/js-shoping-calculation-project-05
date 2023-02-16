

function getValue(idName, perValueId){
    const inputField = document.getElementById(idName);
    const inputFieldValue = parseInt(inputField.value);
    if(isNaN(inputFieldValue)){
        alert("please enter a number of value");
        inputField.value = "" ;
        return "00";
    }
    else{
       const perValuePriceString = document.getElementById(perValueId).innerText ;
       const perValuePrice = parseInt(perValuePriceString);
       const quantityWiseValue = perValuePrice * inputFieldValue ;
       inputField.value = "" ;
       return quantityWiseValue ;
    }
   
}

function setValue(valueIs , setPlace){
    const quantityWiseValue = valueIs ;
    const setPlaceArea = document.getElementById(setPlace);
    setPlaceArea.innerText = quantityWiseValue ;
}



function totalValue(valueIs){
    
}
// function setValue(setValueId){
//     const totalPricePreviousValue = document.getElementById(setValueId);
//     totalPricePreviousValue.innerText = withQuantityValue ;
// }
