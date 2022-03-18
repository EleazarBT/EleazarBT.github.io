function getInputValue(inputPhoneNumber) {
  var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
  if (inputPhoneNumber.value.match(phone)) {
    //document.querySelector('.numberClear').textContent = inputPhoneNumber.value.replace(/\s|-|/g, '');
    var number = inputPhoneNumber.value.replace(/\s|-|/g, "");
    if (number == 938253432) {
      alert("Hola dani, te extraño y tq mucho");
    } else if (number == 923484250) {
      alert("Holi Vale, tq mejor amiga");
    } else if (number == 926711737 || number == 5898200) {
      alert("Holi bb, tq mucho muchote eres la mejor ammy bb");
    } else if (number == 928089435) {
      alert("Holi bb greissy, tq mucho pero le pertenes a Armando");
    } else if (number == 942724056) {
      alert("Hola Romi, q tal? Espero no estes enojada");
    }
    generatelink(number, getOption(), getMessage());
  } else {
    alert("No es un numero válido");
  }
}

function getOption() {
  var selectElement = document.querySelector("#select1");
  var output = selectElement.value;
  //document.querySelector('.countrySimbol').textContent = output;
  return output;
}

function getMessage() {
  var selectElement = document.querySelector("#floatingTextarea2");
  var textContent = selectElement.value.replace(/\s/g, "%20");
  //document.querySelector('.message').textContent = textContent;
  return textContent;
}

function generatelink(number, country, message) {
  window.location =
    "https://api.whatsapp.com/send/?phone=" +
    country +
    number +
    "&text=" +
    message;
}
