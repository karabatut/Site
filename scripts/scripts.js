function openTab(evt, companyName){
    defaultExperienceButtonColor();
    tabOpener(companyName);
}

function defaultExperienceButtonColor(){
    var buttons = document.getElementsByClassName('experienceTabLinks');
    for(let button of buttons){
        button.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    }
}

function defaultTopBarButtonColor(){
    var buttons = document.getElementsByClassName('topBarButton');
    for(let button of buttons){
        button.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    }
}

function changeTopBarButtonColor(element){
    element.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--tertiary');
}

function topBarPressed(event){
    var x = document.getElementsByClassName("hamburgerMenuButton");
    for(let button of x){
        if (button.style.display === "block") {
            button.style.display = "none";
        } 
    }
}

function hamburgerMenu(){
    var x = document.getElementsByClassName("hamburgerMenuButton");
    for(let button of x){
        if (button.style.display === "block") {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    }
    
}

function tabOpener(companyName){
    var i, tabcontent;

    tabcontent = document.getElementsByClassName("experienceTabContent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }    
    document.getElementById(companyName).style.display = "block";
    document.getElementById(getCompanyButtonName(companyName)).style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--tertiary');
}

function clickOnDefaultTab(){
    document.getElementById("kirpiButton").click();
}

function getCompanyButtonName(companyName){
    return companyName.charAt(0).toLowerCase() + companyName.slice(1) + "Button";
}

function pixelArtClick(){
    
    if(window.innerWidth <= 940){

        var x = document.getElementsByClassName("talkBubble");
        var y = document.getElementsByClassName("pixelArt");
        if(x[0].style.display === "inline-block"){
            x[0].style.display = "none";
            y[0].style.animationPlayState = "running";
        }else{
            x[0].style.display = "inline-block"; 
            y[0].style.animationPlayState = "paused";
        }
    }
}

window.addEventListener("scroll", function(){
    var mainSection = document.getElementById("mainSection");
    var aboutMeSection = document.getElementById("aboutMeSection");
    var experienceSection = document.getElementById("experienceSection");
    var gamesSection = document.getElementById("gamesSection");
    if((window.scrollY > mainSection.offsetTop - 250) && (window.scrollY < (mainSection.offsetTop + mainSection.offsetHeight) + 250)){
        defaultTopBarButtonColor();
    }
    if((window.scrollY > aboutMeSection.offsetTop - 250) && (window.scrollY < (aboutMeSection.offsetTop + aboutMeSection.offsetHeight) + 250)){
        defaultTopBarButtonColor();
        changeTopBarButtonColor(document.getElementById("aboutMeSectionButton"));
    }
    if((window.scrollY > experienceSection.offsetTop - 250) && (window.scrollY < (experienceSection.offsetTop + experienceSection.offsetHeight) + 250)){
        defaultTopBarButtonColor();
        changeTopBarButtonColor(document.getElementById("experienceSectionButton"));
    }
    if((window.scrollY > gamesSection.offsetTop - 250) && (window.scrollY < (gamesSection.offsetTop + gamesSection.offsetHeight) + 250)){
        defaultTopBarButtonColor();
        changeTopBarButtonColor(document.getElementById("gamesSectionButton"));
    }
});

document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = "Gel lan buraya";
    } else {
        document.title = "Batut Homepage";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion details");
  
    accordions.forEach((detail) => {
      detail.addEventListener("toggle", function () {
        if (this.open) {
          // Close others
          accordions.forEach((other) => {
            if (other !== this) {
              other.removeAttribute("open");
            }
          });
  
          // Scroll to this accordion
          setTimeout(() => {
            const yOffset = -80; // adjust this to match your topBar height
            const y = this.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 100);
        }
      });
    });
  });
  