
import {mainNav} from "./components/main_navigation.js";
import {subNav} from "./components/sub_navigation.js";
import {sectionOne} from "./components/sectionHtml.js";
import {sectionTwo} from "./components/sectionCss.js";
import {sectionThree} from "./components/sectionJs.js";

// The header, imported main and subnav
const theHeader = document.querySelector("header");

const headerContent1 = mainNav();
const headerContent2 = subNav();

theHeader.appendChild(headerContent1);
theHeader.appendChild(headerContent2);


//  The main content

const myMain = document.getElementById("myMain");

const mainContent1 = sectionOne();
const mainContent2 = sectionTwo();
const mainContent3 = sectionThree();


myMain.appendChild(mainContent1);
myMain.appendChild(mainContent2);
myMain.appendChild(mainContent3);





