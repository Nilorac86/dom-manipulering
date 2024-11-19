const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");

button.addEventListener("click", (event) => {

    console.log("The button has been clicked");
});


button1.addEventListener("click", (event) => {
    const innerText= button1.innerText;

    if (innerText === "Click me to change this text"){
    button1.innerText= "Now I have a new text!";
    }else {
        button1.innerText = "Click me to change this text";
    }
    
});

const linkButton = document.querySelector(".link-btn");
const linkDiv = document.querySelector(".links");

linkButton.addEventListener("click", () => {

    if (linkDiv.classList.contains("close")){
        linkDiv.classList.revmove("close");
        linkButton.innerText = "Hide links";

    } else {
        linkDiv.classList.add("close");
        linkButton.innerText = "Show links";
    }

});

const fieldset = document.querySelector(".input");
const input = document.querySelector(".input input");
const feedback = document.querySelector(".feedback");


input.addEventListener("input", (event) => {
    const value = event.target.value;

    if (inputIsValid(value)){
        fieldset.classList.add("valid");
        fieldset.classList.remove("error");
    }else {
        fieldset.classList.add("error");
        fieldset.classList.remove("valid");
    }
    console.log(value);
    
});

function inputIsValid(value){
    return value.length >= 7;
}





