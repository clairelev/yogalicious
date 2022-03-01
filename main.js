//---------------------NAVIGATION


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', ()=>{
    //Toggle nav
    nav.classList.toggle('nav-active');
    


    //Animate Links
navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = ''
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

    }

});

//Burger Close
burger.classList.toggle('closeburger');
    });

}


//-------------------------TIME
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting');

// Show Time
function showTime() {
    let today = new Date()
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

//AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

//12hr Format
hour = hour % 12 || 12;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

setTimeout(showTime, 1000);
}

//Add Zero
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Greeting
function setGreeting() {
    let today = new Date(),
        hour = today.getHours();

        if(hour < 12) {
            greeting.textContent = 'Good Morning';
        } else if (hour < 18) {
            greeting.textContent = 'Good Afternoon';
        } else {
            greeting.textContent = 'Good Evening';

        }
        
}

function getName() {
    if(localStorage.getItem('detectivename') === null) {
        detectivename.textContent = '[Enter Name]';
    } else {
        detectivename.textContent = localStorage.getItem('detectivename');
    }
}


const detname = { 
    name: function setName(e) {
        if(e.type === 'keypress') {
            if(e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('detectivename', e.target.innerText);
                detectivename.blur();
            }
        }   else {
            localStorage.setItem('detectivename', e.target.innerText);
        }
    }
}
localStorage.getItem('detectivename');


detectivename.addEventListener('keypress', detname.name);
detectivename.addEventListener('blur', detname.name);







//Run
showTime();
setGreeting();
getName();
navSlide();



function mainpage(){
    window.location='main.html';
    
}

function indexpage(){
    window.location='index.html';
    
}


function experience() {  
    var experiences = document.getElementById("experiences");  
    document.getElementById("experienced").value = experiences.options[experiences.selectedIndex].text; } 


    
  function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var detage = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        detage--;
    }
    return detage;}
    { if(localStorage.getItem('detectiveage') == null) {
            detectiveage.textContent = '[Enter Age]';
        } else {
            detectiveage.textContent = localStorage.getItem('detectiveage');
        }
    }
    
    
    const detage = { 

        age: function setAge(e) {
            if(e.type === 'keypress') {
                if(e.which == 13 || e.keyCode == 13) {
                    localStorage.setItem('detectiveage', e.target.innerText);
                    detectiveage.blur();
                }
            }   else {
                localStorage.setItem('detectiveage', e.target.innerText);
            }
        }
    }
    localStorage.getItem('detectiveage');
    
    
    detectiveage.addEventListener('keypress', detage.age);
    detectiveage.addEventListener('blur', detage.age);

function myalert() {
            alert("Great experience!");
        }
    