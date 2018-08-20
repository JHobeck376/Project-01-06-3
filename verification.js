window.addEventListener("load", function(){
  document.getElementById("done").onclick = validateEverything;
})

function validateEverything() {
  validateFirstName();
  validateLastName();
  validateAge();
  validateDate();
  validatePurpose();
  validateRef1First();
  validateRef1Last();
  validateRef1Num();
  validateRef2First();
  validateRef2Last();
  validateRef2Num();
  validateRef3First();
  validateRef3Last();
  validateRef3Num();
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

function validatePurpose() {
  var purpose = document.getElementById("purpose");
  if(purpose.validity.valueMissing){
    purpose.setCustomValidity("Please select your Purpose for Volunteering");
  }else{
    purpose.setCustomValidity("");
  }
}

function validateRef1First() {
  var refFirst = document.getElementById("refs1");
  if(refFirst.validity.valueMissing){
    refFirst.setCustomValidity("Please enter your First Reference's First Name");
  }else{
    refFirst.setCustomValidity("");
  }
}

function validateRef1Last() {
  var refLast = document.getElementById("refs4");
  if(refLast.validity.valueMissing){
    refLast.setCustomValidity("Please enter your First Reference's Last Name");
  }else{
    refLast.setCustomValidity("");
  }
}

function validateRef1Num() {
  var refNum = document.getElementById("refs5");
  if(refNum.validity.valueMissing){
    refNum.setCustomValidity("Please enter your First Reference's Number");
  }else if(refNum.validity.patternMismatch){
    refNum.setCustomValidity("Please enter a Valid Phone Number");
  }else{
    refNum.setCustomValidity("")
  }
}

function validateRef2First() {
  var refFirst = document.getElementById("refs2");
  if(refFirst.validity.valueMissing){
    refFirst.setCustomValidity("Please enter your Second Reference's First Name");
  }else{
    refFirst.setCustomValidity("");
  }
}

function validateRef2Last() {
  var refLast = document.getElementById("refs6");
  if(refLast.validity.valueMissing){
    refLast.setCustomValidity("Please enter your Second Reference's Last Name");
  }else{
    refLast.setCustomValidity("");
  }
}

function validateRef2Num() {
  var refNum = document.getElementById("refs7");
  if(refNum.validity.valueMissing){
    refNum.setCustomValidity("Please enter your Second Reference's Number");
  }else if(refNum.validity.patternMismatch){
    refNum.setCustomValidity("Please enter a Valid Phone Number");
  }else{
    refNum.setCustomValidity("")
  }
}

function validateRef3First() {
  var refFirst = document.getElementById("refs3");
  if(refFirst.validity.valueMissing){
    refFirst.setCustomValidity("Please enter your Third Reference's First Name");
  }else{
    refFirst.setCustomValidity("");
  }
}

function validateRef3Last() {
  var refLast = document.getElementById("refs8");
  if(refLast.validity.valueMissing){
    refLast.setCustomValidity("Please enter your Third Reference's Last Name");
  }else{
    refLast.setCustomValidity("");
  }
}

function validateRef3Num() {
  var refNum = document.getElementById("refs9");
  if(refNum.validity.valueMissing){
    refNum.setCustomValidity("Please enter your Third Reference's Number");
  }else if(refNum.validity.patternMismatch){
    refNum.setCustomValidity("Please enter a Valid Phone Number");
  }else{
    refNum.setCustomValidity("")
  }
}



// var formElements = $('form').find('input');
// $.each(formElements, function(index, elm){
//     switch (elm.type){
//       case 'text':
//         if(!elm.value){
//           alert($(elm).attr('data-fname'));
//           $(elm).css('border-color', 'red');
//         }
//         break;
//       case 'date':
//
//         break;
//     }
// });
