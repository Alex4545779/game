const kmopa = document.getElementById("knopa");
const kolyaska = document.getElementById("kolyaska");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (kmopa.classList != "jump") {
        kmopa.classList.add("jump")
    }
    setTimeout(function () {
        knopa.classList.remove("jump")
    }, 400
    )
}

let isAlive = setInterval( function() {
    let knopaTop = parseInt(window.getComputedStyle(knopa).getPropertyValue("top"));
    let kolyaskaLeft = parseInt(window.getComputedStyle(kolyaska).getPropertyValue("left"));

    if (kolyaskaLeft < 47 && kolyaskaLeft > 0 && knopaTop >= 200) {
        alert("GAME OVER!!!")
    }
}, 10);