// Mobile Menu Toggle Button
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function () {
  this.classList.toggle('active');
  navMenu.classList.toggle('active');

  if (searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
  }
});

// Search Button
const searchToggle = document.getElementById('search-toggle');
const searchForm = document.getElementById('search-form');

searchToggle.addEventListener('click', function () {
  searchForm.classList.toggle('active');

  if (navToggle.classList.contains('active')) {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// FAQ Accordion
const faq = document.querySelector('.faq');
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function (item) {
  let question = item.querySelector('.accordion-question');

  question.addEventListener('click', function () {
    for (let item of accordionItems) {
      if (item != this.parentNode) {
        item.classList.remove('active');
      }
    }
    if (this.parentNode.classList.contains('active')) {
      this.parentNode.classList.remove('active');
    } else {
      this.parentNode.classList.add('active');
    }
  });
});
