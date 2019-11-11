const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const name = document.querySelector('.name h1');

// TO:DO add the ability to click Jonny Monty to take you to the about page
// const logo = document.querySelectorAll('#group path');

const header = document.querySelector('header');
const sectionOne = document.querySelector('#home');
// const projects = document.querySelector('.nav-projects');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach((link, index) => {
        if (link.style == `animation: 0.3s ease ${index / 7 + 0.3}s 1 normal forwards running navLinkFade;`) {
            link.style.animation = '';
            link.style.animation = `navLinkLeave 0.3s ease forwards`;
        } else {
            link.style.animation = `navLinkFade 0.3s ease ${index / 7 + 0.3}s forwards`;
        }
    });

    hamburger.classList.toggle('toggle');

});

name.addEventListener('click', () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

// Active navigation on scroll
window.addEventListener('scroll', event =>{
    let navigationLinks = document.querySelectorAll('.nav-links li a');
    let fromTop = window.scrollY + 100;

    navigationLinks.forEach(link =>{
        let section = document.querySelector(link.hash);

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Navigation style on scroll
const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);