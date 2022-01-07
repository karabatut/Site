function openTab(evt, companyName){
    var i, tabcontent, tabLinks;

    tabcontent = document.getElementsByClassName("experienceTabContent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("experienceTabLinks");
    for(i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    document.getElementById(companyName).style.display = "block";
    evt.currentTarget.className += "active";
}

function clickOnDefaultTab(){
    document.getElementById("defaultOpen").click();
}