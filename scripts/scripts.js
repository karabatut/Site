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

function changeTopBarButtonColor(event){
    event.currentTarget.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--tertiary');
}

function topBarPressed(event){
    defaultTopBarButtonColor();
    changeTopBarButtonColor(event);
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