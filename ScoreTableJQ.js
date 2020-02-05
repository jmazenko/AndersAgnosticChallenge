'use strict';

$(document).ready(function () {
    var leftNum, leftName, leftScore, rightNum, rightName, rightScore, newRow;
    if (!sessionStorage.names) {
        sessionStorage.names = ["A.J. Pero", "Bill Ward", "Brann Dailor", "Clive Burr", "Charlie Benante",
            "Dave Lombardo", "Danny Carey", "Gene Hoglan", "George Kollias", "Igor Cavalera",
            "Pete Sandoval", "Martin Lopez", "Mick Harris", "Mike Portnoy", "Mikkey Dee",
            "Nicko McBrain", "Sean Reinert", "Tom Hunting", "Tomas Haake", "Vinnie Paul"];
    }
    if (!sessionStorage.scores) {
        sessionStorage.scores = [1000, 18000, 10000, 12000, 16000,
            19000, 20000, 14000, 2000, 3000,
            5000, 4000, 7000, 17000, 8000,
            15000, 6000, 9000, 11000, 10000];
        sessionStorage.numPlayers = 20;
    }
    var tempNames = (sessionStorage.names).split(",");
    var tempScores = (sessionStorage.scores).split(",");
    var tempEntries = [];
    var i;
    for (i = 0; i < Number(sessionStorage.numPlayers); i++) {
        tempEntries.push({ name: tempNames[i], score: tempScores[i] });
    }
    tempEntries.sort(function (a, b) { return b.score - a.score });
    var j;
    for (j = 0; j < 10; j++) {
        leftNum = document.createElement("td");
        leftNum.innerHTML = j + 1;
        leftName = document.createElement("td");
        leftName.innerHTML = tempEntries[j].name;
        leftScore = document.createElement("td");
        leftScore.innerHTML = tempEntries[j].score;
        rightNum = document.createElement("td");
        rightNum.innerHTML = j + 11;
        rightName = document.createElement("td");
        rightName.innerHTML = tempEntries[j + 10].name;
        rightScore = document.createElement("td");
        rightScore.innerHTML = tempEntries[j + 10].score;
        newRow = document.createElement("tr");
        newRow.append(leftNum, leftName, leftScore, rightNum, rightName, rightScore);
        $("table").append(newRow);
    }

    $("form").submit(function () {
        if ($("#newname").val() == "" || $("#newscore").val() == "") {
            alert("Error; please complete both fields");
        }
        else {
            $("tr:not(#headrow)").remove();
            sessionStorage.names = sessionStorage.names + ", " + $("#newname").val();
            sessionStorage.scores = sessionStorage.scores + ", " + $("#newscore").val();
            sessionStorage.numPlayers = Number(sessionStorage.numPlayers) + 1;
            tempNames = (sessionStorage.names).split(",");
            tempScores = (sessionStorage.scores).split(",");
            var tempEntries = [];
            var h;
            for (h = 0; h < Number(sessionStorage.numPlayers); h++) {
                tempEntries.push({ name: tempNames[h], score: tempScores[h] });
            }
            tempEntries.sort(function (a, b) { return b.score - a.score });
            var k;
            for (k = 0; k < 10; k++) {
                leftNum = document.createElement("td");
                leftNum.innerHTML = k + 1;
                leftName = document.createElement("td");
                leftName.innerHTML = tempEntries[k].name;
                leftScore = document.createElement("td");
                leftScore.innerHTML = tempEntries[k].score;
                rightNum = document.createElement("td");
                rightNum.innerHTML = k + 11;
                rightName = document.createElement("td");
                rightName.innerHTML = tempEntries[k + 10].name;
                rightScore = document.createElement("td");
                rightScore.innerHTML = tempEntries[k + 10].score;
                newRow = document.createElement("tr");
                newRow.append(leftNum, leftName, leftScore, rightNum, rightName, rightScore);
                $("table").append(newRow);
            }
        }
    });
});