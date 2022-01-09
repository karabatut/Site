function openTab(evt, companyName){
    defaultButtonColor();
    tabOpener(companyName);
}

function defaultButtonColor(){
    var buttons = document.getElementsByClassName('experienceTabLinks');
    for(let button of buttons){
        button.style.backgroundColor = "#222831";
    }
}

function tabOpener(companyName){
    var i, tabcontent;

    tabcontent = document.getElementsByClassName("experienceTabContent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }    
    document.getElementById(companyName).style.display = "block";
    document.getElementById(getCompanyButtonName(companyName)).style.backgroundColor = "#b55400";
}

function clickOnDefaultTab(){
    document.getElementById("provenButton").click();
}

function getCompanyButtonName(companyName){
    return companyName.charAt(0).toLowerCase() + companyName.slice(1) + "Button";
}