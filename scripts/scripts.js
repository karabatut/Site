function openTab(evt, companyName){
    var i, tabcontent, tabLinks;

    tabcontent = document.getElementsByClassName("experienceTabContent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName('experienceTabLinks');

    for(i = 0; i < tabLinks.length; i++){
        tabLinks[i].style.backgroundColor = "#b55400";
        tabLinks[i].className = tabLinks[i].className.replace("active", "");    
    }
    
    document.getElementById(companyName).style.display = "block";
    document.getElementById(getCompanyButtonName(companyName)).style.backgroundColor = "red";
   // evt.currentTarget.style.backgroundColor = "red";
    evt.currentTarget.className += "active";
    
}

function clickOnDefaultTab(){
    document.getElementById("provenButton").click();
}

function getCompanyButtonName(companyName){
    return companyName.charAt(0).toLowerCase() + companyName.slice(1) + "Button";
}