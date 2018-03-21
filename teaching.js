//(function() {
    function surpriseTheUser(text) {
        var surpriseElement = document.getElementById("surprise");
        console.log(surpriseElement);
        surpriseElement.innerHTML = text;
    }

    window.onload = function () {
        var eyesImage = document.getElementById("eyes");
        eyesImage.onclick = function() { surpriseTheUser("You are great!"); };
    };
//})()
