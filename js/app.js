
/*Define Global Variables*/

 //nav
const pageNavEl = document.querySelector('.page__header'); 
const navContainer = document.querySelector('.navbar__menu');
const menuButton = document.querySelector('.nav-sm-btn');
const menu = document.querySelector('.menu');
//page heading text
const headingText = document.querySelector('.welcome-text');
//sections
const sections = document.getElementsByTagName('section');
//scroll up button
const scrollUpButton = document.getElementById('scrollup-button');

/* End Global Variables*/
 
/* Begin Main Functions*/

//nav background
if(document.documentElement.scrollTop > headingText.offsetTop || document.body.scrollTop > headingText.offsetTop){
    pageNavEl.style.backgroundColor = "#c6213d";
}else{
    pageNavEl.style.background = "none";
}

// build the nav

navEl = document.createElement('ul'); 

for(const section of sections){
    const Element = document.createElement('li');
    Element.textContent = section.dataset.nav;
    navEl.appendChild(Element);
}
navContainer.appendChild(navEl);


// Build menu on small screens
pageNavEl.lastElementChild.appendChild(navEl.cloneNode(true));
const links = document.querySelectorAll('.page__header li');

//create mode button
const modeButtonEl = document.createElement('div');
modeButtonEl.innerHTML =
`<div class="mode-wrap change-due-mode">
    <div class="mode-button"><img src="assests/moon.svg"></div>
</div>`;
navContainer.appendChild(modeButtonEl);
// Select dark mode button
const darkButton = document.querySelectorAll('.mode-wrap');

//dark mode function
function darkMode(){
    const changeEle = document.querySelectorAll('.change-due-mode');
    changeEle.forEach(e =>{
        e.classList.toggle('dark');
    });
};

/*End Main Functions*/

/* Begin Events*/

//scroll to section when link clicked
links.forEach(link =>{
 
    link.addEventListener('click', function(event){
        console.log(link.textContent);
        for(section of sections){
            if(link.textContent === section.dataset.nav){
                section.scrollIntoView({behavior:'smooth'});
                return;
            }
        }
    });
});




//while scroll functions
window.onscroll = ()=>{

    for(let i=0;i<sections.length;i++){
        if(document.documentElement.scrollTop >= sections[i].offsetTop && document.documentElement.scrollTop < sections[i].offsetTop + sections[i].offsetHeight
        || document.body.scrollTop >= sections[i].offsetTop && document.body.scrollTop < sections[i].offsetTop + sections[i].offsetHeight){
                
            for(const link of links){
                if(link.textContent == sections[i].dataset.nav){
                    let result = [],
                        node = link.parentNode.firstChild;

                    while ( node ) {
                        if ( node !== link && node.nodeType === Node.ELEMENT_NODE ) 
                        result.push( node );
                        node = node.nextElementSibling || node.nextSibling;
                    }
                    result.forEach(e =>{
                        e.classList.remove('active');
                    });
                    link.classList.add('active');
                    if(menu.classList.contains('active')){
                        menu.classList.remove('active');
                    }
                }
            }
            return;

        }else{
            links.forEach(e =>{
                e.classList.remove('active');
            });
        }
    }

    //scroll to show and hide the top button
    if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30){
        scrollUpButton.style.display = "block";
    }else{
        scrollUpButton.style.display = "none";
    }

    //show and hide nav background
    if(document.documentElement.scrollTop > headingText.offsetTop || document.body.scrollTop > headingText.offsetTop){
        pageNavEl.style.backgroundColor = "#c6213d";
    }else{
        pageNavEl.style.background = "none";
    }

};



links.forEach(link =>{
    link.onclick = function(){
        pageNavEl.style.backgroundColor = "#c6213d";
    }
});


//show and hide menu
menuButton.onclick = function(){
    menu.classList.toggle('active');
};

//scroll to top button
scrollUpButton.onclick = function(){
    window.scrollTo({top:0,behavior:'smooth'});
};

//Dark mode 
darkButton.forEach(button =>{
    button.addEventListener('click', function(){darkMode()});
});    
