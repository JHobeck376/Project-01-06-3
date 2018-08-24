/*
    Project 1-06-3
    
    Author: Jacob Hobeck
    Date:   8.20.18
    
    Filename: verification.js
    
    This form is applicable to the following files:
    
    signUp.html
    
    Since the form is extensive, this is how the form file pathways work for the 2 forms:
    
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
    removeSelectDefault();
}

// function to remove the select defauts
function removeSelectDefault() {
    var removeDefault = document.getElementsByTagName("select");
    for (var i = 0; i < removeDefault.length; i++){
        removeDefault[i].selectedIndex = -1;
    }
}