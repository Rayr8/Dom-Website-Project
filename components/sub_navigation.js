const subNav = ()=> {
    // Create a nav tag
    const myNav = document.createElement("nav");

    // Create an ul 
    const myNavList = document.createElement("ul");

    // Create li items to place in ul
    const navListItem1 = document.createElement("li");
    const item1Anch = document.createElement("a");
    item1Anch.href = "#";
    item1Anch.setAttribute("id", "test");
    const homeIcon = document.createElement("i");
    homeIcon.setAttribute("class", "fas fa-home");
    item1Anch.appendChild(homeIcon);
    navListItem1.appendChild(item1Anch);

    const navListItem2 = document.createElement("li");
    const item2Anch = document.createElement("a");
    item2Anch.href = "#";
    item2Anch.textContent = "HTML";
    navListItem2.appendChild(item2Anch);

    const navListItem3 = document.createElement("li");
    const item3Anch = document.createElement("a");
    item3Anch.href = "#";
    item3Anch.textContent = "CSS";
    navListItem3.appendChild(item3Anch);

    const navListItem4 = document.createElement("li");
    const item4Anch = document.createElement("a");
    item4Anch.href = "#";
    item4Anch.textContent = "JAVASCRIPT";
    navListItem4.appendChild(item4Anch);


    const navListItem5 = document.createElement("li");
    const item5Anch = document.createElement("a");
    item5Anch.href = "#";
    item5Anch.textContent = "SQL";
    navListItem5.appendChild(item5Anch);

    const navListItem6 = document.createElement("li");
    const item6Anch = document.createElement("a");
    item6Anch.href = "#";
    item6Anch.textContent = "PYTHON";
    navListItem6.appendChild(item6Anch);

    const navListItem7 = document.createElement("li");
    const item7Anch = document.createElement("a");
    item7Anch.href = "#";
    item7Anch.textContent = "PHP";
    navListItem7.appendChild(item7Anch);

    const navListItem8 = document.createElement("li");
    const item8Anch = document.createElement("a");
    item8Anch.href = "#";
    item8Anch.textContent = "JAVA";
    navListItem8.appendChild(item8Anch);

    const navListItem9 = document.createElement("li");
    const item9Anch = document.createElement("a");
    item9Anch.href = "#";
    item9Anch.textContent = "C++";
    navListItem9.appendChild(item9Anch);

    const navListItem10 = document.createElement("li");
    const item10Anch = document.createElement("a");
    item10Anch.href = "#";
    const globeIcon = document.createElement("i");
    globeIcon.setAttribute("class", "fas fa-globe-africa");
    item10Anch.appendChild(globeIcon);
    navListItem10.appendChild(item10Anch);

    const navListItem11 = document.createElement("li");
    const item11Anch = document.createElement("a");
    item11Anch.href = "#";
    const searchIcon = document.createElement("i");
    searchIcon.setAttribute("class","fas fa-search");
    item11Anch.appendChild(searchIcon);
    navListItem11.appendChild(item11Anch);

    // Append li items to ul
    myNavList.appendChild(navListItem1);
    myNavList.appendChild(navListItem2);
    myNavList.appendChild(navListItem3);
    myNavList.appendChild(navListItem4);
    myNavList.appendChild(navListItem5);
    myNavList.appendChild(navListItem6);
    myNavList.appendChild(navListItem7);
    myNavList.appendChild(navListItem8);
    myNavList.appendChild(navListItem9);
    myNavList.appendChild(navListItem10);
    myNavList.appendChild(navListItem11);

    // append ul to nav
    myNav.appendChild(myNavList);

    return myNav;
};

export {subNav};