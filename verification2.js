window.addEventListener("load", function(){
  document.getElementById("donePart2").onclick = validateEverythingPart2;
})

function validateEverythingPart2() {
  validateFirstName();
  validateLastName();
  validateAge();
  validateDate();
  validateEContactFirst();
  validateEContactLast();
  validateEContactNum();
}
function validateFirstName() {
  var nameFirst = document.getElementById("fName");
  if(nameFirst.validity.valueMissing){
    nameFirst.setCustomValidity("Please enter your First Name");
  }else{
    nameFirst.setCustomValidity("");
  }
}

function validateLastName() {
  var nameLast = document.getElementById("lName");
  if(nameLast.validity.valueMissing){
    nameLast.setCustomValidity("Please enter your Last Name");
  }else{
    nameLast.setCustomValidity("");
  }
}

function validateAge() {
 var age = document.getElementById("age");
 if(age.validity.valueMissing){
   age.setCustomValidity("Please select your age");
 }else{
   age.setCustomValidity("");
 }
}

function validateDate() {
  var date = document.getElementById("reqDate");
  if(date.value === ""){
    date.setCustomValidity("Please select your Desired Date");
  }else{
    date.setCustomValidity("");
  }
}
function validateEContactFirst() {
  var eContactFirst = document.getElementById("eContact1");
  if(eContactFirst.validity.valueMissing){
    eContactFirst.setCustomValidity("Please enter your Emergency Contact's First Name");
  }else{
    eContactFirst.setCustomValidity("");
  }
}

function validateEContactLast() {
  var refLast = document.getElementById("eContact2");
  if(refLast.validity.valueMissing){
    refLast.setCustomValidity("Please enter your Emergency Contact's Last Name");
  }else{
    refLast.setCustomValidity("");
  }
}

function validateEContactNum() {
  var refNum = document.getElementById("eContact3");
  if(refNum.validity.valueMissing){
    refNum.setCustomValidity("Please enter your Emergency Contact's Number");
  }else if(refNum.validity.patternMismatch){
    refNum.setCustomValidity("Please enter a Valid Phone Number");
  }else{
    refNum.setCustomValidity("")
  }
}
