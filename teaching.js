window.onload = function () {
    var eyesImage = document.getElementById("eyes");
    eyesImage.onclick = function() { surpriseTheUser("You are great!"); };
};

function surpriseTheUser(text) {
    var surpriseElement = document.getElementById("surprise");
    surpriseElement.innerHTML = text;
}
