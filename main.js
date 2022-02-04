function getInputValue(inputPhoneNumber) {
    var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    if ((inputPhoneNumber.value.match(phone))) {
        //document.querySelector('.numberClear').textContent = inputPhoneNumber.value.replace(/\s|-|/g, '');
        var number = inputPhoneNumber.value.replace(/\s|-|/g, '');
        generatelink(number, getOption(), getMessage());
    } else {
        alert("No es un numero válido");
    }
}

function getOption() {
    var selectElement = document.querySelector('#select1');
    var output = selectElement.value;
    //document.querySelector('.countrySimbol').textContent = output;
    return output;
}

function getMessage() {
    var selectElement = document.querySelector('#floatingTextarea2');
    var textContent = selectElement.value.replace(/\s/g, "%20");
    //document.querySelector('.message').textContent = textContent;
    return textContent;
}

function generatelink(number, country, message) {
    window.location = "https://api.whatsapp.com/send/?phone=" + country + number + "&text=" + message;
    //this is the link generator.
}
