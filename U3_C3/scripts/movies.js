// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movdiv=document.getElementById("movies");
let i;

async function getmovie(){
    try{
        const q=document.getElementById("search").value;
        const res=await fetch(`http://www.omdbapi.com/?t=${q}&apikey=4da2ec90`);
        const data=await res.json();
        // console.log(data);
        add(data);
    } catch(err){
        console.log(err);
    }
}

function add(data){
    movdiv.innerHTML=null;
    
        let i1=document.createElement("img");
        i1.src=data.Poster;
        i1.setAttribute("class","im")
        let i2=document.createElement("h5");
        i2.innerText=data.Title;
        let i3=document.createElement("button");
        i3.innerText="Book Now";
        i3.setAttribute("class","book_now");
        
        function book(){
            
            window.Location.href="checkout.html";
            localStorage.setItem("movie",JSON.stringify(movdiv));
            // console.log("tru")
        }
        
        movdiv.append(i1,i2,i3);
        i3.addEventListener("click",function(){
            book();
        })
        // localStorage.setItem("movie",JSON.stringify(data));
}

async function main(){
    let d= await getmovie();
    if(d==undefined){
        return false;
    }
    add(data);
}

function debounce(func,delay){
    if(i){
        clearTimeout(i);
    }
    i=setTimeout(function(){
        func();
    },delay);
}