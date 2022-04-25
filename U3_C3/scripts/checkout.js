// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


    let a=document.querySelector("wallet");
    let b=JSON.parse(localStorage.getItem("amount"));
    a=b;
    function confBooking(){
        if(b>100){
            alert("Booking Successful")
        }
        else{
            alert("Insufficient Balance !")
        }
    }

    


let m=JSON.parse(localStorage.getItem("movie"));
console.log(m);
// console.log("tru");

