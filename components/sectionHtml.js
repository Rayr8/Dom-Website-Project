const sectionOne = () => {

    // HTML Intro section
    const section1 = document.createElement("section");
    section1.setAttribute("class", "section1");

    // LEFT DIV
    const leftDiv1 = document.createElement("div");
    leftDiv1.setAttribute("class", "leftDiv1");

    // Create Image for logo
    const htmlLogo = document.createElement("img");
    htmlLogo.src = "images/html-icon.png";
    
    // html heading
    const htmlHead = document.createElement("h2");
    htmlHead.textContent = "HTML";
    // Description
    const htmlDescr = document.createElement("p");

    htmlDescr.textContent = `HTML is the standard markup language for Web pages.
                            With HTML you can create your own Website.
                            HTML is easy to learn - You will enjoy it!`

    // Button 
    const htmlBtn = document.createElement("button");
    htmlBtn.setAttribute("class", "htmlBtn");
    htmlBtn.textContent = "Learn HTML";


    leftDiv1.appendChild(htmlLogo);
    leftDiv1.appendChild(htmlHead);
    leftDiv1.appendChild(htmlDescr);
    leftDiv1.appendChild(htmlBtn);

    // RIGHT DIV
    const rightDiv1 = document.createElement("div");
    rightDiv1.setAttribute("class", "rightDiv1");

    // example heading
    const htmlEx = document.createElement("h1");
    htmlEx.textContent = "HTML Example";

    const htmlCodeBox = document.createElement("div");
    htmlCodeBox.setAttribute("id", "htmlCodeBox");

    // Lines of code
    const htmlLine1 = document.createElement("p");
    htmlLine1.textContent = `<!DOCTYPE html>`;

    const htmlLine2 = document.createElement("p");
    htmlLine2.textContent = `<html>`;

    const htmlLine3 = document.createElement("p");
    htmlLine3.textContent = `<title>HTML Tutorial</title>`;

    const htmlLine4 = document.createElement("p");
    htmlLine4.textContent = `<body>`;

    const htmlLine5 = document.createElement("p");
    htmlLine5.textContent = `<h1>This is a heading</h1>`;

    const htmlLine6 = document.createElement("p");
    htmlLine6.textContent = `<p>This is a paragraph.</p>`;

    const htmlLine7 = document.createElement("p");
    htmlLine7.textContent = `</body>`;

    const htmlLine8 = document.createElement("p");
    htmlLine8.textContent = `</html>`;

    //  Appending code to codebox
    htmlCodeBox.appendChild(htmlLine1);
    htmlCodeBox.appendChild(htmlLine2);
    htmlCodeBox.appendChild(htmlLine3);
    htmlCodeBox.appendChild(htmlLine4);
    htmlCodeBox.appendChild(htmlLine5);
    htmlCodeBox.appendChild(htmlLine6);
    htmlCodeBox.appendChild(htmlLine7);
    htmlCodeBox.appendChild(htmlLine8);


    rightDiv1.appendChild(htmlEx);
    rightDiv1.appendChild(htmlCodeBox);

    // Append both divs
    section1.appendChild(leftDiv1);
    section1.appendChild(rightDiv1);

return section1;

};

export {sectionOne};