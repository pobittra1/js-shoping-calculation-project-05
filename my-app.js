//chocolate area here
document.getElementById("kitkat-buy-btn").addEventListener('click' , function(){
  const valueIs = getValue("kitkat-quantity" , "kitkat-price") ; 
  setValue(valueIs , "chocolate");

})

//rose area here
document.getElementById("rose-buy-btn").addEventListener('click' , function(){
    const valueIs = getValue("rose-quantity" , "rose-price") ; 
    setValue(valueIs , "rose");
  
  })


//diary area here
document.getElementById("diary-buy-btn").addEventListener('click' , function(){
    const valueIs = getValue("diary-quantity" , "diary-price") ; 
    setValue(valueIs , "diary");
  
  })

  document.getElementById("kitkat-quantity").addEventListener("blur" , function(e){
    const kitkatQuantityValue = parseInt(e.target.value);
    const kitkatPerPrice = parseInt(document.getElementById("kitkat-price").innerText) ;
    const totalValue = parseInt(document.getElementById("total").innerText) ;
    const setValueOn = document.getElementById("total");
    const valueSet = (kitkatQuantityValue * kitkatPerPrice) + totalValue ;
    if(isNaN(valueSet)){
      setValueOn.innerText = "00" ;
    }
    else{
      setValueOn.innerText = valueSet ;
    }
    
  
  })
document.getElementById("rose-quantity").addEventListener("blur" , function(e){
  const kitkatQuantityValue = parseInt(e.target.value);
  const kitkatPerPrice = parseInt(document.getElementById("rose-price").innerText) ;
  const totalValue = parseInt(document.getElementById("total").innerText) ;
  const setValueOn = document.getElementById("total");
  const valueSet = (kitkatQuantityValue * kitkatPerPrice) + totalValue ;
  if(isNaN(valueSet)){
    setValueOn.innerText = "00" ;
  }
  else{
    setValueOn.innerText = valueSet ;
  }
  

})
document.getElementById("diary-quantity").addEventListener("blur" , function(e){
  const kitkatQuantityValue = parseInt(e.target.value);
  const kitkatPerPrice = parseInt(document.getElementById("diary-price").innerText) ;
  const totalValue = parseInt(document.getElementById("total").innerText) ;
  const setValueOn = document.getElementById("total");
  const valueSet = (kitkatQuantityValue * kitkatPerPrice) + totalValue ;
  if(isNaN(valueSet)){
    setValueOn.innerText = "00" ;
  }
  else{
    setValueOn.innerText = valueSet ;
  }
  

})

document.getElementById("apply-btn").addEventListener("click" , function(){
  const totalValue = parseInt(document.getElementById("total").innerText) ;
  const applyFieldValue = document.getElementById("promo-code").value ;
  if(applyFieldValue == "NIRPO"){
    const allCostValue = document.getElementById("all-total");
    allCostValue.innerText = totalValue - (totalValue * 0.1) ;
  }
  else{
    alert("please enter right cupon code");
    const applyField = document.getElementById("promo-code") ;
    applyField.value = "" ;
  }
  
})
