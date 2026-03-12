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
let button9 = document.getElementById("button9");
let button10 = document.getElementById("button10");
let button11 = document.getElementById("button11");


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
    powerScene(power);
});
button5.addEventListener("click", function() {
    power = "SuperSpeed";
    alert("You have chosen " + power + " as your superpower!");
    powerScene(power);
});
button6.addEventListener("click", function() {
    power = "Super Healing";
    alert("You have chosen " + power + " as your superpower!");
    powerScene(power);
});
button7.addEventListener("click", function() {
    power = "Telekenisis";
    alert("You have chosen " + power + " as your superpower!");
    powerScene(power);
});
button8.addEventListener("click", function() {
    scene = "scene2a";
    updateScene(scene);
});
button9.addEventListener("click", function() {
    scene = "scene2b";
    updateScene(scene);
});
button10.addEventListener("click", function() {
    scene = "scene3a";
    updateScene(scene);
});
button11.addEventListener("click", function() {
    scene = "scene4a";
    updateScene(scene);
});
button12.addEventListener("click", function() {
    scene = "scene4b";
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
        button9.style.display = "none";
        button10.style.display = "none";
        button11.style.display = "none";
        button12.style.display = "none";
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
        button9.style.display = "block";
        button10.style.display = "none";
        button11.style.display = "none";
        button12.style.display = "none";
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
        button9.style.display = "none";
        button10.style.display = "none";
        button11.style.display = "none";
        button12.style.display = "none";
    }
    else if (scene == "scene2a") {
        title.textContent = "You go outside";
        description.textContent = "You decide to go outside and try to enjoy the nice day but then a car going 80 in a neighboorhood runs you over and you die but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life.";
        img.src = "car.jpg";
        button4.style.display = "block";
        button5.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "block";
        button8.style.display = "none";
        button9.style.display = "none";
        button10.style.display = "none";
        button11.style.display = "none";
        button12.style.display = "none";
    }
    else if (scene == "scene2b") {
        title.textContent = "You stay inside";
        description.textContent = "You decide to stay inside and watch some TV but then you get electrecuted by the TV in your house and you die but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life.";
        img.src = "TV.jpg";
        button4.style.display = "none";
        button5.style.display = "block";
        button6.style.display = "block";
        button7.style.display = "none";
        button8.style.display = "none";
        button9.style.display = "none";
    }
    else if (scene == "scene3a") {
        title.textContent = "You use your power to fight crime!";
        description.textContent = " You decide to explore the new world but then you see a robbery being taken place but you cant really control your new power so what do you do?"
        img.src = "crime.jpg";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        button5.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "none";
        button9.style.display = "none";
        button10.style.display = "none";
        button11.style.display = "block";
        button12.style.display = "block";
    }

}
    function powerScene(power){
    if (power == "Flight + SuperStrength") {
        title.textContent = "You have Flight and SuperStrength!";
        description.textContent = "With your new powers you can fly and punch through walls.";
        img.src = "Flight.jpg";
        button4.style.display = "none";
        button7.style.display = "none";
        button10.style.display = "block";
    }
    else if (power == "SuperSpeed") {
        title.textContent = "You have SuperSpeed!";
        description.textContent = "With your new power you can run at super speeds but you can't control your speed so you end up running into a wall and die but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life.";
        img.src = "Speed.jpg";
        button5.style.display = "none";
        button6.style.display = "none";
        button10.style.display = "block";
    }
    else if (power == "Super Healing") {
        title.textContent = "You have Super Healing!";
        description.textContent = "With your new power you can heal yourself and others but you can't control your healing so you end up healing a disease that was meant to be deadly and it ends up spreading and killing everyone but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life.";
        img.src = "Healing.jpg";
        button5.style.display = "none";
        button6.style.display = "none";
        button10.style.display = "block";
    }
    else if (power == "Telekenisis") {
        title.textContent = "You have Telekenisis!";
        description.textContent = "With your new power you can move objects with your mind but you can't control your telekenisis so you end up moving a car into a building and killing everyone inside but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life.";
        img.src = "Telekenisis.jpg";
}
}
updateScene(scene);