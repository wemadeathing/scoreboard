let homeScore = 0
let guestScore = 0  

function addOne() {
    homeScore += 1
    document.getElementById("home-score").innerText = homeScore
}

function addTwo() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore
}

function addThree() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore
}

// guest

function gaddOne() {
    guestScore += 1
    document.getElementById("guest-score").innerText = guestScore
}

function gaddTwo() {
    guestScore += 2
    document.getElementById("guest-score").innerText = guestScore
}

function gaddThree() {
    guestScore += 3
    document.getElementById("guest-score").innerText = guestScore
}
