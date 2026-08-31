const userForm = document.querySelector("form");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const  message = document.getElementById("request");


    function validateName(){

        const userName = fullName.value.trim();

    if (userName === ""){
    alert ("please enter your full name!");
    return false;
}
return true;
}    
    
function validateEmail(){

    const userEmail = email.value.trim();

if(userEmail===""){
        alert("please enter your email!");
        return false;
    }

    if (!userEmail.includes("@") || !userEmail.includes(".")){
        alert("You may forgot to put either @ or . !!");
        return false;
    }
    return true;
    }


    function validateMessage(){

        const userMessage = message.value.trim();
    if (userMessage ===""){
        alert("please enter a message!");
        return false;
    }
    return true;
 }

fullName.addEventListener("input", function(){
    if (fullName.value.trim()!==""){
        console.log("Name entered!");
    }
});
 
email.addEventListener("input", function(){
    if (email.value.trim()!== ""){
        console.log("Email entered!");
    }
});

message.addEventListener("input", function(){
    if (message.value.trim()!==""){
        console.log ("message entered!");
    }
});

userForm.addEventListener("submit", function(event) {    
    
    event.preventDefault();

    if (!validateName()){
        return;
    }
     if (!validateEmail()){
        return;
    }
     if (!validateMessage()){
        return;
    }
    
    alert("Your reservation form is valid! Thank you for your reservation.");    
});