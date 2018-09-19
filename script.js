var menuBtn = document.querySelector('#menu-btn-div');
var navBar = document.querySelector('nav');
var gridContainer = document.querySelector('.grid-container');
var mainBtn = document.querySelector('.main-toggle');
var mainContent = document.querySelector('main');
var asideContent = document.querySelector('aside');

menuBtn.addEventListener('click', function() {
  if (navBar.style.display === 'none') {
    navBar.style.display = 'block';
    gridContainer.style.gridTemplateColumns = "200px 51% 35%";
    gridContainer.style.gridTemplateAreas = '"nav header header""nav subheader subheader""nav bottomhdr bottomhdr""nav charts charts""nav bar bar""nav main aside"';
  } else {
    navBar.style.display = 'none';
    gridContainer.style.gridTemplateColumns = "60% 40%";
    gridContainer.style.gridTemplateAreas = '"header header""subheader subheader""bottomhdr bottomhdr""charts charts""bar bar""main aside"';
  }
});

