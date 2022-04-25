// Store the wallet amount to your local storage with key "amount"


function addamount(){

    let a=document.querySelector("wallet");
    let b=document.getElementById("amount").value;
    a.innerText=b;
    localStorage.setItem("amount",JSON.stringify(a));
    
    // console.log("sonu")


}

