var form = document.querySelector("masaiForm");
var userData = JSON.parse(localStorage.getItem("userData"));
masaiForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
    }


    localStorage.setItem("index", JSON.stringify(data))
    window.location.href = "index.html"



});