const country = document.getElementById("countrySelect");

const link = document.getElementById("LinkGenerate");




function getInputValue(inputtxt) {
    var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    if ((inputtxt.value.match(phone))) {

        var number = document.querySelector('.numberClear').textContent = inputtxt.value.replace(/\s|-|/g, '');
        generatelink(number, getOption());
        return true;
    } else {
        alert("No es un numero válido");
        return false;
    }
}

function getOption() {
    var selectElement = document.querySelector('#select1');
    // var numberInput = document.getElementById("numberInput");
    var output = selectElement.value;
    document.querySelector('.countrySimbol').textContent = output;
    return output;
}

function generatelink(number, country) {
    window.location = "https://api.whatsapp.com/send/?phone=" + country + number;
}
//https://api.whatsapp.com/send/?phone=51942461070