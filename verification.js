/*
    Project 1-06-3
    
    Author: Jacob Hobeck
    Date:   8.20.18
    
    Filename: verification.js
    
    This form is applicable to the following files:
    
    fieldWork.html
    offWork.html
    signUp.html
    volunteer.html
    
    Since the form is extensive, this is how the form file pathways work for the 2 forms:
    
    signUp.html -> thanksSign.html
    volunteer.html -> fieldWork.html || offWork.html -> thanksVol.html
    
    This JavaScript file had no comments to begin with, so the comments and everything imcompused by the comments are what are new
*/

// on load event listeners
if (window.addEventListener){
 window.addEventListener("load", formSetUp, false);   
} else if (window.attachEvent){
    window.attachEvent("onload", formSetUp);
}

// function to set up the form
function formSetUp() {
    initialResponsive();
}

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

// function to validate the form basics

// these five functions below are in an in progress change. They are being combined into more purposeful functions
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

// function to make the form responsive
function initialResponsive() {
    var offWork = document.getElementById("offWork");
    var fieldWork = document.getElementById("fieldWork");
    var currentWork;
    offWork.style.display = "none";
    fieldWork.style.display = "none";
}