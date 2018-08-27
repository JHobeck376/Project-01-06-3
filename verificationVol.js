/*
    Project 1-06-3
    
    Author: Jacob Hobeck
    Date:   8.20.18
    
    Filename: verification.js
    
    This form is applicable to the following files:
    
    fieldWork.html
    offWork.html
    volunteer.html
    
    Since the form is extensive, this is how the form file pathways work for the 2 forms:
    
    volunteer.html -> thanksVol.html
    
    This JavaScript file had no comments to begin with, so the comments and everything imcompused by the comments are what are new
*/

// global variables
var formValidity = false;
var falseColor = "rgb(255, 233, 233)";

// on load event listeners
if (window.addEventListener) {
    window.addEventListener("load", formSetUp, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", formSetUp);
}

// function to set up the form
function formSetUp() {
    initialResponsive();
    removeSelectDefault();
    createEventListeners();
}

// function to make the form responsive
function initialResponsive() {
    var offWork = document.getElementById("officeWork");
    var fieldWork = document.getElementById("fieldWork");
    var currentWork;
    offWork.style.display = "none";
    fieldWork.style.display = "none";
}

// function to remove the select defauts
function removeSelectDefault() {
    var removeDefault = document.getElementsByTagName("select");
    for (var i = 0; i < removeDefault.length; i++) {
        removeDefault[i].selectedIndex = -1;
    }
}

// function to create event listeners
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    // disables the submit button
    if (form.addEventListener) {
        form.addEventListener("submit", formValidate, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", formValidate);
    }
    var buttons = document.getElementById("buttonsFieldset");
    // responsive form
    if (buttons.addEventListener) {
        buttons.addEventListener("change", checkboxResponsive, false);
    } else if (buttons.attachEvent) {
        buttons.attachEvent("onchange", checkboxResponsive);
    }
}

// function to validate the form
function formValidate(submit) {
    if (submit.preventDefault) {
        submit.preventDefault();
    } else {
        submit.returnValue = false;
    }
    formValidity = true;

    formBasics();
    validateReferences();
    checkboxSubmit();

    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    } else {
        window.scroll(0, 0);
    }
}

// function to validate the form basics

function formBasics() {
    var inputElements = document.querySelectorAll("#formBasics input");
    var select = document.getElementsByTagName("select")[0];
    var purposeBox = document.getElementById("purpose");
    var errorDiv = document.getElementById("errorDiv");
    var fieldsetValidity = true;
    var elementNum = inputElements.length;
    var currentElement;
    try {
        // This validates the input boxes
        for (var i = 0; i < elementNum; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = falseColor;
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        // this validates the age select
        if (select.selectedIndex === -1) {
            select.style.border = "1px solid red";
            selectValidity = false;
        } else {
            select.style.border = "";
        }
        // this validates the purpose box
        if (purposeBox.value === "" || purposeBox.value === placeholder) {
            purposeBox.style.background = falseColor;
            fieldsetValidity = false;
        } else {
            currentElement.style.background = "white";
        }

        if (fieldsetValidity === false) {
            throw "Please complete all of the form basics";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    } catch (msg) {
        errorDiv.style.background = "grey";
        errorDiv.style.color = "red";
        errorDiv.style.display = "block";
        errorDiv.style.width = "50%";
        errorDiv.style.textAlign = "center";
        errorDiv.style.margin = "0 auto";
        errorDiv.style.fontSize = "1.4em"
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// function to validate references
function validateReferences() {
    var refBoxes = document.querySelectorAll("#references input");
    var elementNum = refBoxes.length;
    var errorDiv = document.getElementById("errorDivRefs");
    var crButtons = document.querySelectorAll("#cRecord input");
    var buttons = crButtons.length;
    var fieldsetValidity = true;
    var currentElement;
    try {
        for (var i = 0; i < elementNum; i++) {
            currentElement = refBoxes[i];
            if (currentElement.value === "") {
                currentElement.style.background = falseColor;
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        // validating the cRecord buttons
        if (!crButtons[0].checked && !crButtons[1].checked) {
            for (var i = 0; i < buttons; i++) {
                currentElement = crButtons[i];
                currentElement.style.outline = "1px solid red";
            }
            fieldsetValidity = false;
        } else {
            for (var i = 0; i < buttons; i++) {
                currentElement = crButtons[i];
                currentElement.style.outline = "";
            }
        }

        if (fieldsetValidity === false) {
            throw "Please complete all of the reference information";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    } catch (msg) {
        errorDiv.style.background = "grey";
        errorDiv.style.color = "red";
        errorDiv.style.display = "block";
        errorDiv.style.width = "50%";
        errorDiv.style.textAlign = "center";
        errorDiv.style.margin = "0 auto";
        errorDiv.style.fontSize = "1.4em"
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// function for responsiveness with office and field
function checkboxResponsive() {
    var fieldButton = document.querySelectorAll("#fieldWorkButton input")[0];
    var officeButton = document.querySelectorAll("#officeWorkButton input")[0];
    var errorDiv = document.getElementById("errorDivButtons");
    var fieldWork = document.getElementById("fieldWork");
    var officeWork = document.getElementById("officeWork");
    // responsive if else statements
    // fieldWork
    if (fieldButton.checked) {
        fieldWork.style.display = "block";
    } else {
        fieldWork.style.display = "none";
    }
    // officeWork
    if (officeButton.checked) {
        officeWork.style.display = "block";
    } else {
        officeWork.style.display = "none";
    }
    // if else for when one is selected then unselected
    if (!fieldButton.checked && !officeButton.checked) {
        errorDiv.style.background = "grey";
        errorDiv.style.color = "red";
        errorDiv.style.display = "block";
        errorDiv.style.width = "50%";
        errorDiv.style.textAlign = "center";
        errorDiv.style.margin = "0 auto";
        errorDiv.style.fontSize = "1.4em"
        errorDiv.innerHTML = "Please select one of these two options";
        formValidity = false;
    } else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
}

// function to ensure submission for the checkboxes
function checkboxSubmit() {
    var fieldButton = document.querySelectorAll("#fieldWorkButton input")[0];
    var officeButton = document.querySelectorAll("#officeWorkButton input")[0];
    var errorDiv = document.getElementById("errorDivButtons");
    var fieldWork = document.getElementById("fieldWork");
    var officeWork = document.getElementById("officeWork");
    if (!fieldButton.checked && !officeButton.checked) {
        errorDiv.style.background = "grey";
        errorDiv.style.color = "red";
        errorDiv.style.display = "block";
        errorDiv.style.width = "50%";
        errorDiv.style.textAlign = "center";
        errorDiv.style.margin = "0 auto";
        errorDiv.style.fontSize = "1.4em"
        errorDiv.innerHTML = "Please select one of these two options";
        formValidity = false;
    } else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
}

// fieldWork validation
function validateFieldWork() {
    // this has a fieldset with an id of "fieldWorkOption" / an input checkbox with an id of "agree"
    var optionButtons = document.querySelectorAll("#fieldWorkOption input");
    var reqCheckbox = document.getElementById("agree");
    var errorDiv = document.getElementById("errorDivField");
    if (!reqCheckbox.checked) {
        errorDiv.style.background = "grey";
        errorDiv.style.color = "red";
        errorDiv.style.display = "block";
        errorDiv.style.width = "50%";
        errorDiv.style.textAlign = "center";
        errorDiv.style.margin = "0 auto";
        errorDiv.style.fontSize = "1.4em"
        errorDiv.innerHTML = "You must agree to volunteer with ViaReach";
        formValidity = false;
    }
    if (!optionButtons[0].checked && !optionButtons[1].checked) {
            for (var i = 0; i < buttons; i++) {
                currentElement = crButtons[i];
                currentElement.style.outline = "1px solid red";
            }
            fieldsetValidity = false;
        } else {
            for (var i = 0; i < buttons; i++) {
                currentElement = crButtons[i];
                currentElement.style.outline = "";
            }
        }
}

// officeWork validation
function validateOfficeWork() {
    
}

// these functions below are in an in progress change. They are being combined into more purposeful functions. These are what my initial JavaScript was

//function validateFirstName() {
//    var nameFirst = document.getElementById("fName");
//    if (nameFirst.validity.valueMissing) {
//        nameFirst.setCustomValidity("Please enter your First Name");
//    } else {
//        nameFirst.setCustomValidity("");
//    }
//}
//
//function validateLastName() {
//    var nameLast = document.getElementById("lName");
//    if (nameLast.validity.valueMissing) {
//        nameLast.setCustomValidity("Please enter your Last Name");
//    } else {
//        nameLast.setCustomValidity("");
//    }
//}
//
//function validateAge() {
//    var age = document.getElementById("age");
//    if (age.validity.valueMissing) {
//        age.setCustomValidity("Please select your age");
//    } else {
//        age.setCustomValidity("");
//    }
//}
//
//function validateDate() {
//    var date = document.getElementById("reqDate");
//    if (date.value === "") {
//        date.setCustomValidity("Please select your Desired Date");
//    } else {
//        date.setCustomValidity("");
//    }
//}
//
//function validatePurpose() {
//    var purpose = document.getElementById("purpose");
//    if (purpose.validity.valueMissing) {
//        purpose.setCustomValidity("Please select your Purpose for Volunteering");
//    } else {
//        purpose.setCustomValidity("");
//    }
//}
//
//function validateRef1First() {
//    var refFirst = document.getElementById("refs1");
//    if (refFirst.validity.valueMissing) {
//        refFirst.setCustomValidity("Please enter your First Reference's First Name");
//    } else {
//        refFirst.setCustomValidity("");
//    }
//}
//
//function validateRef1Last() {
//    var refLast = document.getElementById("refs4");
//    if (refLast.validity.valueMissing) {
//        refLast.setCustomValidity("Please enter your First Reference's Last Name");
//    } else {
//        refLast.setCustomValidity("");
//    }
//}
//
//function validateRef1Num() {
//    var refNum = document.getElementById("refs5");
//    if (refNum.validity.valueMissing) {
//        refNum.setCustomValidity("Please enter your First Reference's Number");
//    } else if (refNum.validity.patternMismatch) {
//        refNum.setCustomValidity("Please enter a Valid Phone Number");
//    } else {
//        refNum.setCustomValidity("")
//    }
//}
//
//function validateRef2First() {
//    var refFirst = document.getElementById("refs2");
//    if (refFirst.validity.valueMissing) {
//        refFirst.setCustomValidity("Please enter your Second Reference's First Name");
//    } else {
//        refFirst.setCustomValidity("");
//    }
//}
//
//function validateRef2Last() {
//    var refLast = document.getElementById("refs6");
//    if (refLast.validity.valueMissing) {
//        refLast.setCustomValidity("Please enter your Second Reference's Last Name");
//    } else {
//        refLast.setCustomValidity("");
//    }
//}
//
//function validateRef2Num() {
//    var refNum = document.getElementById("refs7");
//    if (refNum.validity.valueMissing) {
//        refNum.setCustomValidity("Please enter your Second Reference's Number");
//    } else if (refNum.validity.patternMismatch) {
//        refNum.setCustomValidity("Please enter a Valid Phone Number");
//    } else {
//        refNum.setCustomValidity("")
//    }
//}
//
//function validateRef3First() {
//    var refFirst = document.getElementById("refs3");
//    if (refFirst.validity.valueMissing) {
//        refFirst.setCustomValidity("Please enter your Third Reference's First Name");
//    } else {
//        refFirst.setCustomValidity("");
//    }
//}
//
//function validateRef3Last() {
//    var refLast = document.getElementById("refs8");
//    if (refLast.validity.valueMissing) {
//        refLast.setCustomValidity("Please enter your Third Reference's Last Name");
//    } else {
//        refLast.setCustomValidity("");
//    }
//}
//
//function validateRef3Num() {
//    var refNum = document.getElementById("refs9");
//    if (refNum.validity.valueMissing) {
//        refNum.setCustomValidity("Please enter your Third Reference's Number");
//    } else if (refNum.validity.patternMismatch) {
//        refNum.setCustomValidity("Please enter a Valid Phone Number");
//    } else {
//        refNum.setCustomValidity("")
//    }
//}
//
//function validateEverything() {
//    validateFirstName();
//    validateLastName();
//    validateAge();
//    validateDate();
//    validatePurpose();
//    validateRef1First();
//    validateRef1Last();
//    validateRef1Num();
//    validateRef2First();
//    validateRef2Last();
//    validateRef2Num();
//    validateRef3First();
//    validateRef3Last();
//    validateRef3Num();
//}
