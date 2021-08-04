
const theBody = document.body;
theBody.style.backgroundImage = "url('images/code4.jpg')";
theBody.style.backgroundSize = "cover";

const div = document.createElement('div');
div.classList.add('style');

const logo = document.createElement("img");
logo.src = "images/EduCodelogo.png";

theBody.appendChild(logo);

const p = document.createElement('p');
p.textContent = "Click on the button to register for the courses."; 
div.appendChild(p);

document.body.appendChild(div);

// logo
//const logo = document.createElement("img");
//logo.src = "images/EduCodelogo.png";
//backgroundImage.appendChild(logo)


const register = document.getElementById("register");
    // Create a break line element
const br = document.createElement("br"); 

function Click_Fun() {

    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    // Create an input element for full name
    const FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

    // Create an input element for date of birth
    const DOB = document.createElement("input");
     DOB.setAttribute("type", "text");
     DOB.setAttribute("name", "dob");
     DOB.setAttribute("placeholder", "Date Of Birth");

    // Create an input element for email id
    const EID = document.createElement("input");
     EID.setAttribute("type", "text");
     EID.setAttribute("name", "emailID");
     EID.setAttribute("placeholder", "E-Mail ID");
  
     // Create an input element for password
    const PWD = document.createElement("input");
     PWD.setAttribute("type", "password");
     PWD.setAttribute("name", "password");
     PWD.setAttribute("placeholder", "Password");
  
    // Create an input element for retype-password
    const RPWD = document.createElement("input");
     RPWD.setAttribute("type", "password");
     RPWD.setAttribute("name", "reTypePassword");
     RPWD.setAttribute("placeholder", "ReEnter Password");
  
    // create a submit button
    const s = document.createElement("input");
     s.setAttribute("type", "submit");
     s.setAttribute("value", "Submit");
                  
     // Append the full name input to the form
     form.appendChild(FN); 
                  
     // Inserting a line break
     form.appendChild(br.cloneNode()); 
                  
     // Append the DOB to the form
     form.appendChild(DOB); 
     form.appendChild(br.cloneNode()); 
                  
     // Append the emailID to the form
     form.appendChild(EID); 
     form.appendChild(br.cloneNode()); 
                  
     // Append the Password to the form
     form.appendChild(PWD); 
     form.appendChild(br.cloneNode()); 
                  
     // Append the ReEnterPassword to the form
     form.appendChild(RPWD); 
     form.appendChild(br.cloneNode()); 
                 
     // Append the submit button to the form
     form.appendChild(s); 
  
     document.getElementsByTagName("body")[0]
     .appendChild(form)};

    //  Courses
    // The header, imported main and subnav
const theHeader = document.querySelector("header");

const headerContent1 = mainNav();
const headerContent2 = subNav();

theHeader.appendChild(headerContent1);
theHeader.appendChild(headerContent2);

