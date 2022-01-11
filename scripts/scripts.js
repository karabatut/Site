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
   /* defaultTopBarButtonColor();
    changeTopBarButtonColor(event.currentTarget);*/
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
    document.getElementById("provenButton").click();
}

function getCompanyButtonName(companyName){
    return companyName.charAt(0).toLowerCase() + companyName.slice(1) + "Button";
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