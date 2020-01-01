const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const logoname = document.querySelector('.name h1');
const displayProjectContainer = document.querySelector('.displayProjectContainer');

// TO:DO add the ability to click Jonny Monty to take you to the about page
// const logo = document.querySelectorAll('#group path');

const header = document.querySelector('header');
const sectionOne = document.querySelector('#home');
// const projects = document.querySelector('.nav-projects');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach((link, index) => {
        if (link.style.animation.includes('navLinkFade')) {
            link.style.animation = `navLinkLeave 0.3s ease`;
        } else {
            link.style.animation = `navLinkFade 0.3s ease ${index / 7 + 0.3}s forwards`;
        }
    });

    hamburger.classList.toggle('toggle');

});

logoname.addEventListener('click', () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

// Active navigation on scroll
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('.nav-links li a');
    let fromTop = window.scrollY + 100;

    navigationLinks.forEach(link => {
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

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
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

// Lose Focus on mobile
 if (screen.width <= 768)
 {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('boxclicked');
        });
    });
 }

 // Display the projects gif
 function DisplayProject(project) {
     const projectElement = document.createElement('div');
     projectElement.setAttribute('class', 'projectContainer');
     projectElement.onclick = closeProject;
     const innercode = `<div class="project">
        <img src="gif/${project}.gif"></img>
     </div>`;

     projectElement.innerHTML = innercode;

     displayProjectContainer.appendChild(projectElement);
 }

 // Close the gif project
 function closeProject() {
     displayProjectContainer.innerHTML = "";
 }