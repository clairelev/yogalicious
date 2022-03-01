var fields={}

document.addEventListener("DOMContentLoaded", function() {
 fields.fname = document.getElementById('fname');
 fields.lname = document.getElementById('lname');
 fields.email = document.getElementById('email');
 fields.reason = document.getElementById('reason');
 fields.subject = document.getElementById('subject');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

 function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.fname, isNotEmpty);
    valid &= fieldValidation(fields.lname, isNotEmpty);
    valid &= fieldValidation(fields.reason, isNotEmpty);
    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    return valid;
   }

   class User {
    constructor(fname, lname,reason, email,subject) {
    this.fname = fname;
    this.lname = lname;
    this.reason = reason;
    this.subject = subject;
    this.email = email;
    
    }
   }

 function Submit(){
     if (isValid()){
         let usr= new User(fname.value,lname.value,reason.value,email.value,subject.value);
         alert("Thanks for getting in touch");
        
     }
     else {
         alert("There was an error");
     }
 }