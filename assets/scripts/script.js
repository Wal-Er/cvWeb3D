//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
   el.onclick = () => {
      const pageTurnId = el.getAttribute('data-page');
      const pageTurn = document.getElementById(pageTurnId);

      if (pageTurn.classList.contains('turn')) {
         pageTurn.classList.remove('turn');
      } else {
         pageTurn.classList.add('turn');
      }
   }
});
//contact me button when click
//create reverse index function
//back profile button when click
//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)
