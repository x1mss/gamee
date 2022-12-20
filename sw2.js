let tg = window.Telegram.WebApp;

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(result)
})

let result = ""

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let crot = document.querySelector(".crot")
let bomb = document.querySelector(".bomb")
let bomb2 = document.querySelector(".bomb2")
let hero = document.querySelector(".hero")
let p = document.querySelector("p")
let score = 0

crot.onclick = () => {
    score += 1
    p.innerHTML = "Очки: " + score
    if (score > 10) {
    bomb.style.display = "none"
    bomb2.style.display = "none"
    crot.style.display = "none"
    document.querySelector("body").style.background = "url(win.jpg)"
    tg.MainButton.setText("Вы выиграли!")
        result = "win"
        tg.MainButton.show()
     }
    }

bomb.onclick = () => {
    score -= 1
    p.innerHTML = "Очки: " + score
    if (score < -5) {
    bomb.style.display = "none"
    bomb2.style.display = "none"
    crot.style.display = "none"
    hero.style.display = "none"
    document.querySelector("body").style.background = "url(lose.jpg)"
    tg.MainButton.setText("Вы проиграли!")
        result = "lose"
        tg.MainButton.show()}
    }

bomb2.onclick = () => {
    score -= 1
    p.innerHTML = "Очки: " + score
    if (score < -5) {
    bomb.style.display = "none"
    bomb2.style.display = "none"
    crot.style.display = "none"
    hero.style.display = "none"
    document.querySelector("body").style.background = "url(lose.jpg)"
    tg.MainButton.setText("Вы проиграли!")
        result = "lose"
        tg.MainButton.show()}

    }

hero.onclick = () => {
    score += 4
    p.innerHTML = "Очки: " + score
    if (score > 10) {
    bomb.style.display = "none"
    bomb2.style.display = "none"
    crot.style.display = "none"
    hero.style.display = "none"
    document.querySelector("body").style.background = "url(win.jpg)"
    tg.MainButton.setText("Вы выиграли!")
        result = "win"
        tg.MainButton.show()
     }
    }


setInterval(function() {
    crot.style.top = Math.random() * 500 + "px"
    crot.style.left = Math.random() * 290  + "px"
} , 1000)

setInterval(function() {
    bomb.style.top = Math.random() * 500 + "px"
    bomb.style.left = Math.random() * 290  + "px"
} , 1000)

setInterval(function() {
    bomb2.style.top = Math.random() * 500 + "px"
    bomb2.style.left = Math.random() * 290  + "px"
} , 500)

setInterval(function() {
    hero.style.top = Math.random() * 500 + "px"
    hero.style.left = Math.random() * 290  + "px"
    let vis = Math.random()
    if (vis > 0.8){
    hero.style.display = "block"
    }
    else{
    hero.style.display = "none"
    }
} , 3000)