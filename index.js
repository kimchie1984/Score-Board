//!---->Home Score <------//


let homeScore = 0
let homeScoreEl = document.getElementById("home-score-el")

function incrementHomePts1() {
  homeScore += 1
  homeScoreEl.innerText = homeScore
}

function incrementHomePts2() {
  homeScore += 2
  homeScoreEl.innerText = homeScore
}

function incrementHomePts3() {
  homeScore += 3
  homeScoreEl.innerText = homeScore
}

//------>Guest Score<-----//

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score-el")


function incrementGuestPts1() {
  guestScore += 1
  guestScoreEl.innerText = guestScore
}

function incrementGuestPts2() {
  guestScore += 2
  guestScoreEl.innerText = guestScore
}

function incrementGuestPts3() {
  guestScore += 3
  guestScoreEl.innerText = guestScore
}

//------>Refresh<-----//


function refresh() {
  let result = 0
  homeScoreEl.innerText = result
  guestScoreEl.innerText = result
  homeScore = 0
  guestScore = 0
}

