
/* that is
if to add a mobile menu section
does not do anything yet */
 
const selectElement = (element) => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active')
});
