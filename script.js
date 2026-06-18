function show(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    alert("NAME: "+name+"\nEmail: "+email+"\n\nSubmitted Successfully");

}

function vis(){
    let card=document.getElementById("menu");
    if(card.style.display === "none"){
        card.style.display = "block";
    }
    else{
        card.style.display = "none";
    }
}

