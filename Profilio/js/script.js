document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var navbar = document.querySelector('.navbar');
    var navLinks = navbar.querySelectorAll('ul li a');
    

    // active navbar fo small screen device
    
menu.addEventListener('click', function() {
    this.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    });
    // remove class whene click in "a" after change class Name
    navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    });
    });
});
//  for active a when scrolling 
let html = document.querySelector(".HTML")
let js = document.querySelector(".JS")
let css = document.querySelector(".css")
let RECT = document.querySelector(".REACT")
let SASS = document.querySelector(".SASS")
let Bootstraps = document.querySelector('.Bootstraps')
let sections = document.querySelectorAll("section")
let navlinkss = document.querySelectorAll("ul li a")
let progress = document.querySelectorAll(".the-progress h3 span")
let skills_section = document.querySelector(".skils-section")
window.onscroll=() =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -130;
        let hieght = sec.offsetHeight;
        let id = sec.getAttribute("id")
        if(top>offset && top < offset + hieght){
            navlinkss.forEach(links=>{
                links.classList.remove("active")
                document.querySelector("ul li a[href*="+ id +"]").classList.add("active")
            })
        }
    })
    if(window.scrollY >= skills_section.offsetTop - 350){
        html.style.width = "90%"
        css.style.width = "80%"
        js.style.width ="70%"
        Bootstraps.style.width ='70%'
        RECT.style.width ="60%"
        SASS.style.width = "70%"
    }
} 

