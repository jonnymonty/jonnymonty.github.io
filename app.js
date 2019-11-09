const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const logo = document.querySelectorAll('#group path');
const header = document.querySelector('header');
const sectionOne = document.querySelector('#home');
const projects = document.querySelector('.nav-projects');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
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