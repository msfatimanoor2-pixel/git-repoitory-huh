let score_A = document.getElementById("scoreA")
let score_B = document.getElementById("scoreB")
let countA = 0
let countB = 0

function Add_One_A () {
countA +=1
score_A.innerText = countA
}

function Add_Three_A () {
countA +=3
score_A.innerText = countA
}

function Add_Five_A () {
countA +=5
score_A.innerText = countA
}

function Add_One_B () {
countB +=1
score_B.innerText = countB
}

function Add_Three_B () {
countB +=3
score_B.innerText = countB
}

function Add_Five_B () {
countB +=5
score_B.innerText = countB
}

function reset() {
    countA = 0
    countB = 0
    score_B.innerText = countB
    score_A.innerText = countA
}