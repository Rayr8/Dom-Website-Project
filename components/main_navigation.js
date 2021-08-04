const mainNav = ()=> {

    // This bigDiv will contain two divs
    const bigDiv = document.createElement("div");
    bigDiv.setAttribute("id", "bigDiv");

    // DIV #1
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1");

    // logo
    const logo = document.createElement("img");
    logo.src = "images/EduCodelogo.png";

    // list
    const headerList = document.createElement("ul");

    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const listItem3 = document.createElement("li");

    // Down Arrows
    const downArrow1 = document.createElement("i"); 
    downArrow1.setAttribute("class", "fas fa-sort-down");

    const downArrow2 = document.createElement("i"); 
    downArrow2.setAttribute("class", "fas fa-sort-down");

    const downArrow3 = document.createElement("i"); 
    downArrow3.setAttribute("class", "fas fa-sort-down");

    // list items
    listItem1.textContent = "Tutorials"
    listItem1.appendChild(downArrow1);
   
    listItem2.textContent = "References"
    listItem2.appendChild(downArrow2);

    listItem3.textContent = "Exercises"
    listItem3.appendChild(downArrow3);

    // append list items to ul
    headerList.appendChild(listItem1);
    headerList.appendChild(listItem2);
    headerList.appendChild(listItem3);

    // Add to div1
    div1.appendChild(logo);
    div1.appendChild(headerList);


    // DIV #2
    const div2 = document.createElement("div");
    div2.setAttribute("id", "div2");

    // Paid Courses
    const paidCourses = document.createElement("a");
    paidCourses.href = "#";
    paidCourses.setAttribute("id", "payUp");
    paidCourses.textContent = "Paid Courses";

    // PERSON ICON (to sign in/out)
    const loginAnch = document.createElement("a");
    loginAnch.href="index.html";
    const icon3 = document.createElement("i");
    icon3.setAttribute("class", "fas fa-user");
    loginAnch.appendChild(icon3);

    // Add to div2 
    div2.appendChild(paidCourses);
    div2.appendChild(loginAnch)
    
    // Add div1 and div2 to parent Bigdiv
    bigDiv.appendChild(div1);
    bigDiv.appendChild(div2);

    return bigDiv;
   
};
  
export {mainNav} ;