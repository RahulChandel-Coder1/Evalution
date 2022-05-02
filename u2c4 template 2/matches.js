var data1 = JSON.parse(localStorage.getItem("index"));
var inputData = document.querySelector("#filterVenue");
console.log(data1)

function display(data1) {
    product.innerhtml = null;

    data1.forEach(element => {
        var tr = document.createElement("tr")
        var th1 = document.createElement("th")
        matchNumd = element.matchNum;

        var th2 = document.createElement("th")
        teamA = element.teamA;
        var th3 = document.createElement("th")
        teamB = element.teamB;
        var th4 = document.createElement("th")
        date = element.date;
        var th5 = document.createElement("th")
        venue = element.venue;
        var th6 = document.createElement("th")
        filtered = element.filter;

        data1.append(tr, th1, th2, th3, th4, th5, th6)
    });

    Filter.addEventListener("change", function() {
        if (filter.value == "null") {
            display(data1);
        } else {
            var filter = data1.filter(function(element) {
                return element.catagory == filter.value;
            })
            display(filtered);
        }


    })
    display(data1)
}