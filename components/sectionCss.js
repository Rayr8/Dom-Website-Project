const sectionTwo = () => {

    const section2 = document.createElement("section");
    section2.setAttribute("class", "section2");


    const leftDiv2 = document.createElement("div");
    leftDiv2.setAttribute("class", "leftDiv2");
    const cssLogo = document.createElement("img");
    cssLogo.src = "images/css-icon.png";
    leftDiv2.appendChild(cssLogo);

     const cssHead = document.createElement("h2");
     cssHead.textContent = "CSS";
    
     const cssDescr = document.createElement("p");
 
     cssDescr.textContent = `CSS is the language we use to style an HTML document.
                            CSS describes how HTML elements should be displayed.
                            This tutorial will teach you CSS from basic to advanced.`
 
     const cssBtn = document.createElement("button");
     cssBtn.setAttribute("class", "cssBtn");
     cssBtn.textContent = "Learn CSS"
 
 
     leftDiv2.appendChild(cssLogo);
     leftDiv2.appendChild(cssHead);
     leftDiv2.appendChild(cssDescr);
     leftDiv2.appendChild(cssBtn);

    
     const rightDiv2 = document.createElement("div");
     rightDiv2.setAttribute("class", "rightDiv2");
 
     const cssEx = document.createElement("h1");
     cssEx.textContent = "CSS Example";
 
     const cssCodeBox = document.createElement("div");
     cssCodeBox.setAttribute("id", "cssCodeBox");
 
     const cssLine1 = document.createElement("p");
     cssLine1.textContent = `body {`;

     const cssLine2 = document.createElement("p");
     cssLine2.textContent = `background-color: lightblue;`;

     const cssLine3 = document.createElement("p");
     cssLine3.textContent = `}`;

     const cssLine4 = document.createElement("p");
     cssLine4.textContent = `h1 {`;

     const cssLine5 = document.createElement("p");
     cssLine5.textContent = `  color: white;`;

     const cssLine6 = document.createElement("p");
     cssLine6.textContent = `  text-align: center;`;

     const cssLine7 = document.createElement("p");
     cssLine7.textContent = `}`;
 

     cssCodeBox.appendChild(cssLine1);
     cssCodeBox.appendChild(cssLine2);
     cssCodeBox.appendChild(cssLine3);
     cssCodeBox.appendChild(cssLine4);
     cssCodeBox.appendChild(cssLine5);
     cssCodeBox.appendChild(cssLine6);
     cssCodeBox.appendChild(cssLine7);
 
     rightDiv2.appendChild(cssEx);
     rightDiv2.appendChild(cssCodeBox);
 
     section2.appendChild(leftDiv2);
     section2.appendChild(rightDiv2);
 
 return section2;
 
 };
 
 export {sectionTwo};