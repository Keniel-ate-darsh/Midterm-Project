let description = document.getElementById("description");
let title = document.getElementById("title");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");  
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let img = document.getElementById("image");
let scene = "start";
button1.addEventListener("click", function() {
    title.textContent = "Hello World!";
    description.textContent = "This is a description.";
    scene = "scene1a";
    updateScene(scene);
});
button2.addEventListener("click", function() {
    scene = "scene1b";
    updateScene(scene);
});
button3.addEventListener("click", function() {
    location.reload();
});
button4.addEventListener("click", function() {
    power = "Flight + SuperStrength";
    alert("You have chosen " + power + " as your superpower!");
});
button5.addEventListener("click", function() {
    power = "SuperSpeed";
    alert("You have chosen " + power + " as your superpower!");
});
button6.addEventListener("click", function() {
    power = "Super Healing";
    alert("You have chosen " + power + " as your superpower!");
});
button7.addEventListener("click", function() {
    power = "Telekenisis";
    alert("You have chosen " + power + " as your superpower!");
});
button8.addEventListener("click", function() {
    scene = "scene2a";
    updateScene(scene);
});
function updateScene(scene) {
    if (scene == "start") {
        title.textContent = "You're sound asleep!";
        description.textContent = "You should wake up now to continue the game";
        button3.style.display = "none";
        button4.style.display = "none";
        button5.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "none";
    }
    else if (scene == "scene1a") {
        title.textContent = "You wake up!";
        description.textContent = "You wake up in you normal life in your normal room but little do you know something not so normal is about to happen.";
        img.src = "Awake.jpg";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        button5.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "block";
    }
    else if (scene == "scene1b") {
        title.textContent = "You go back to sleep";
        description.textContent = "You decide to go back to sleep and miss out on everything this game had to offer.";
        img.src = "sleep.jpg";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "block";
        button4.style.display = "none";
        button5.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "none";
    }
    else if (scene == "scene2a") {
        title.textContent = "You go outside";
        description.textContent = "You decide to go outside and try to enjoy the nice day but then a car going 80 in a neighboorhood runs you over and you die but you're the main character so you can transported to a new, better world where superpowers are now everyday things used in everyday life.";
        img.src = "car.jpg";
        button4.style.display = "block";
        button5.style.display = "block";
        button6.style.display = "block";
        button7.style.display = "block";
        button8.style.display = "none";
    }
}
updateScene(scene);