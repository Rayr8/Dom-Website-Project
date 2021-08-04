export const Footer = (() => {
const div = document.createElement('div');
div.classList.add('footers');

const p = document.createElement('p');
p.textContent = "Powered by Raeesah and Natasha &copy. All rights reserved"; 
div.appendChild(p);

document.body.appendChild(div);

//let a = document.createElement('a');
//div.appendChild(a);
//let href = document.createElement('href');
const footer = document.createElement('footer');

const instaLink = document.createElement('instagram')
instaLink.href = "https:www.instagram.com"
const footerInsta = document.createElement('i');
footerInsta.className = 'fa fa-instagram';
instaLink.appendChild(footerInsta);
footer.appendChild(instaLink);

const FBLink = document.createElement('facebook')
FBLink.href = "https:www.facebook.com"
const footerFB = document.createElement('i');
footerFB.className = 'fa fa-facebook';
FBLink.appendChild(footerFB);
footer.appendChild(FBLink);

const pintLink = document.createElement('pinterest')
instaLink.href = "https:www.pinterest.com"
const footerPint = document.createElement('i');
footerPint.className = 'fa fa-pinterest';
pintLink.appendChild(footerPint);
footer.appendChild(pintLink);
return {div};
})();
//export default {}


  