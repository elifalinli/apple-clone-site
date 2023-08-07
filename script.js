
/* that is
to add a mobile menu section
*/
 
const selectElement = (element) => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active')
});
