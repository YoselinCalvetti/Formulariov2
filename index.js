function formValidation(event) {
    event.preventDefault();

    let number = document.getElementById("inputNumber").value;
    let cvc = document.getElementById("inputCVC").value;
    let amount2 = document.getElementById("inputAmount2").value;
    let firstName = document.getElementById("inputFirstName").value;
    let lastName = document.getElementById("inputLastName").value;
    let city = document.getElementById("inputCity").value;
    let state = document.getElementById("inputState").value;
    let zip = document.getElementById("inputZip").value;
    let textarea = document.getElementById ("message-text").value;
    let alert = document.getElementById("alert")

    if (number === "") {
        document.getElementById("inputNumber").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (cvc === "") {
        document.getElementById("inputCVC").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (amount2 === "") {
        document.getElementById("inputAmount2").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (firstName === "") {
        document.getElementById("inputFirstName").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (lastName === "") {
        document.getElementById("inputLastName").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (city === "") {
        document.getElementById("inputCity").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (state === "Choose...") {
        document.getElementById("inputState").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }


    if (zip === "") {
        document.getElementById("inputZip").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (textarea === "") {
        document.getElementById("message-text").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }
    
 if (alert ==="") {
    document.getElementById("alert").style.visibility = 'visible'; 
 }

}