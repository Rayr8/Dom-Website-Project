const sectionThree = () => {

    const section3 = document.createElement("section");
    section3.setAttribute("class", "section3");


    const leftDiv3 = document.createElement("div");
    leftDiv3.setAttribute("class", "leftDiv3");
    const jsLogo = document.createElement("img");
    jsLogo.src = "images/javascript-icon.png";
    leftDiv3.appendChild(jsLogo);

     const jsHead = document.createElement("h2");
     jsHead.textContent = "JavaScript";
    
     const jsDescr = document.createElement("p");
 
     jsDescr.textContent = `JavaScript is the world's most popular programming language.
                            JavaScript is the programming language of the Web.
                            JavaScript is easy to learn.
                            This tutorial will teach you JavaScript from basic to advanced.`
 
     const jsBtn = document.createElement("button");
     jsBtn.setAttribute("class", "jsBtn");
     jsBtn.textContent = "Learn JavaScript"
 
 
     leftDiv3.appendChild(jsLogo);
     leftDiv3.appendChild(jsHead);
     leftDiv3.appendChild(jsDescr);
     leftDiv3.appendChild(jsBtn);

    
     const rightDiv3 = document.createElement("div");
     rightDiv3.setAttribute("class", "rightDiv3");
 
     const jsEx = document.createElement("h1");
     jsEx.textContent = "JavaScript Example";
 
     const jsCodeBox = document.createElement("div");
     jsCodeBox.setAttribute("id", "jsCodeBox");
 
    //  lines of code
     const jsLine1 = document.createElement("p");
     jsLine1.textContent = `<button onclick="myFunction()">Click Me!</button>`;

     const jsLine2 = document.createElement("p");
     jsLine2.textContent = `<script>`;

     const jsLine3 = document.createElement("p");
     jsLine3.textContent = `function myFunction() {`;

     const jsLine4 = document.createElement("p");
     jsLine4.textContent = `let x = document.getElementById("demo");`;

     const jsLine5 = document.createElement("p");
     jsLine5.textContent = `x.style.fontSize = "25px";`;

     const jsLine6 = document.createElement("p");
     jsLine6.textContent = `x.style.color = "red";`;

     const jsLine7 = document.createElement("p");
     jsLine7.textContent = `}`;

     const jsLine8 = document.createElement("p");
     jsLine8.textContent = `</script>`;

    // append to code box/build lines of code
     jsCodeBox.appendChild(jsLine1);
     jsCodeBox.appendChild(jsLine2);
     jsCodeBox.appendChild(jsLine3);
     jsCodeBox.appendChild(jsLine4);
     jsCodeBox.appendChild(jsLine5);
     jsCodeBox.appendChild(jsLine6);
     jsCodeBox.appendChild(jsLine7);
     jsCodeBox.appendChild(jsLine8);
     
 
     rightDiv3.appendChild(jsEx);
     rightDiv3.appendChild(jsCodeBox);
 
     section3.appendChild(leftDiv3);
     section3.appendChild(rightDiv3);
 
 return section3;
 
 };
 
 export {sectionThree};