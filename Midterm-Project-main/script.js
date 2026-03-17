let description = document.getElementById("description");
let title = document.getElementById("title");
let ending = document.getElementById("ending");
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
let button12 = document.getElementById("button12");
let button13 = document.getElementById("button13");
let button14 = document.getElementById("button14");
let button15 = document.getElementById("button15");
let button16 = document.getElementById("button16");
let button17 = document.getElementById("button17");
let button18 = document.getElementById("button18");
let button19 = document.getElementById("button19");
let button20 = document.getElementById("button20");
let button21 = document.getElementById("button21");
let button22 = document.getElementById("button22");
let button23 = document.getElementById("button23");
let button24 = document.getElementById("button24");
let button25 = document.getElementById("button25");
let button26 = document.getElementById("button26");
let button27 = document.getElementById("button27")
let group = "";
let hero = "Alive"
let criminal2 = "Alive"
let topHero = "Alive";
let topVillain = "Alive";
let opponent = ""; 
let power = "";
let strength = 0;
let reputation = 0;
let img = document.getElementById("image");
let scene = "start";
document.addEventListener("keydown", function(event){
if(event.key == "h"){
alert("Hint: Training makes you stronger.");
}
});

button1.addEventListener("click", function() {
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
    scene = "powerScene";
    power = "Flight + SuperStrength";
    alert("You have chosen " + power + " as your superpower!");
    powerScene(power);
});
button5.addEventListener("click", function() {
    scene = "powerScene";
    power = "SuperSpeed";
    alert("You have chosen " + power + " as your superpower!");
    powerScene(power);
});
button6.addEventListener("click", function() {
    scene = "powerScene";
    power = "Super Healing";
    alert("You have chosen " + power + " as your superpower!");
    powerScene(power);
});
button7.addEventListener("click", function() {
    scene = "powerScene";
    power = "Telekinesis";
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
button10.addEventListener("click", function(){

    if(scene == "powerScene"){
        scene = "scene3a";
        updateScene(scene);
    }

    else if(scene == "scene4a"){
        scene = "scene5a";
        updateScene(scene);
    }

    else if(scene == "scene5a"){
        scene = "scene6a";
        updateScene(scene);
    }
    else if (scene == "scene5b"){
        scene = "scene6a";
        updateScene(scene);
    }

    else if(topHero == "Dead" || topVillain == "Dead" || hero == "Dead" || criminal2 == "Dead"){
        checkEnding();
    }

});
button11.addEventListener("click", function() {
    opponent = "criminal1";
    scene = "scene4a";
    updateScene(scene);
});
button12.addEventListener("click", function() {
    scene = "scene4b";
    updateScene(scene);
});
button13.addEventListener("click", function() {
    if(opponent == "criminal1"){
    reputation -= 1;
    title.textContent = "You punched the criminal!";
    description.textContent = "You punched the criminal but you were too strong and you ended up killing him";
    img.src = "Punch.jpg";
    button13.style.display = "none";
    button14.style.display = "none";
    button10.style.display = "block";
}
    else if(opponent == "Top Hero"){
        topHero = "Dead";
        reputation -= 10;
        title.textContent = "You punched the top Hero!";
        description.textContent = "You punched the top Hero and you ended up punching a hole through him and you killed him and you are now the top Villain in the city";
        img.src = "Punch.jpg";
        button13.style.display = "none";
        button14.style.display = "none";
        button10.style.display = "block";
    }
    else if(opponent == "Top Villain"){
        topVillain = "Dead";
        reputation += 10;
        title.textContent = "You punched the top Villain!";
        description.textContent = "You punched the top Villain and you ended up punching a hole through him and you killed him and you are now the top Hero in the city";
        img.src = "Punch.jpg";
        button13.style.display = "none";
        button14.style.display = "none";
        button10.style.display = "block";
    }
    else if (opponent == "Hero"){  
        hero = "Dead"
        reputation -= 5;
        title.textContent = "You punched the hero!";
        description.textContent = "You punched the hero and you killed him and you ended up doing a successful bank robbery";
        img.src = "Punch.jpg";
        button13.style.display = "none";
        button14.style.display = "none";
        button10.style.display = "block";
    }
    else if (opponent == "criminal2") {
        title.textContent = "You punched the criminal";
        description.textContent = "You tried to punch the criminal but he made a tornado and you got sucked into it and died"
        img.src = "Dead.jpg"
        hideButtons();
        button3.style.display = "block"
    }


});
button14.addEventListener("click", function() {
    if(opponent == "criminal1"){
        reputation += 1;
        title.textContent = "You tried to fly into the criminal!";
        description.textContent = "You tried to fly into the criminal but you ended up flying into a wall but the debris subded the villian";
        img.src = "Fly.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (opponent == "Top Hero"){
        title.textContent = "You flew into the Top Hero!"
        description.textContent = "You flew into the top hero but he grabbed you and took you to jail"
        img.src = "Jail.jpg";
        hideButtons();
        button3.style.display = "block";
    }
    else if (opponent == "Top Villain"){
        title.textContent = "You flew into the top Villain!"
        description.textContent = "You flew into the top Villain but you were too slow he side stepped you and punched you into the ground. You died"
        img.src = "Dead.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Hero"){
        title.textContent = "You flew into the Hero!"
        description.textContent = "You flew into the hero but he grabbed you and took you to jail"
        img.src = "Jail.jpg";
        hideButtons();
        button3.style.display = "block";
    }
    else if (opponent == "criminal2"){
        criminal2 = "Dead"
        reputation += 5;
        title.textContent = "You flew around the criminal!"
        description.textContent = "The criminal started to make a tornado and you flew around it enough to weaken it and you took down the criminal"
        hideButtons();
        button10.style.display = "block"
        img.src = "Fly.jpg"

    }
});
button15.addEventListener("click", function() {
    if (opponent == "criminal1"){
        reputation += 1;
        title.textContent = "You ran donuts around the criminal!";
        description.textContent = "You ran donuts around the criminal and you made him so dizzy that he passed out";
        img.src = "Donuts.jpg";
        button15.style.display = "none";
        button16.style.display = "none";
        button10.style.display = "block";
    }
    else if (opponent == "Top Hero"){
        title.textContent = "You ran dounts around the Top Hero!"
        description.textContent = "He just stuck his arm out and knocked you out when you ran into it. When you woke up you were in jail"
        img.src = "Jail.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Top Villain"){
        title.textContent = "You ran dounts around the Top Villain!"
        description.textContent = "He just stuck his arm out and killed you out when you ran into it"
        img.src = "Dead.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Hero"){
        title.textContent = "You ran dounts around the Hero!"
        description.textContent = "He just stuck his arm out and knocked you out when you ran into it. When you woke up you were in jail"
        img.src = "Jail.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "criminal2"){
        criminal2 = "Dead"
        reputation += 5;
        title.textContent = "You ran donuts around the criminal!"
        description.textContent = "The criminal started to make a tornado and you ran around it enough to weaken it and you took down the criminal"
        hideButtons();
        button10.style.display = "block"
    }

});
button16.addEventListener("click", function() {
    if (opponent == "criminal1"){
        reputation -= 1;
        title.textContent = "You tried a super sonic punch!";
        description.textContent = "You tried to do a super sonic punch like you saw the flash do in a tv show but you ended up punching the ground and destroying the building and the people inside it.";
        img.src = "SonicPunch.jpg";
        button15.style.display = "none";
        button16.style.display = "none";
        button10.style.display = "block";
    }
    else if (opponent == "Top Hero"){
        topHero = "Dead"
        reputation -= 10;
        title.textContent = "You perfomed a super sonic punch on the Top Hero!"
        description.textContent = "You super sonic punched the Top Hero and all that force was enough to blow a clean hole straight through his chest"
        img.src = "SonicPunch.jpg"
        hideButtons();
        button10.style.display = "block"
    }
    else if (opponent == "Top Villain"){
        topVillain = "Dead"
        reputation += 10
        title.textContent = "You perfomed a super sonic punch on the Top Villain!"
        description.textContent = "You super sonic punched the top Villain and all that force was enough to knock him clean out"
        img.src = "SonicPunch.jpg"
        hideButtons();
        button10.style.display = "block"
    }
    else if (opponent == "Hero"){
        hero = "Dead"
        reputation -=5
        title.textContent = "You perfomed a super sonic punch on the Hero!"
        description.textContent = "You super sonic punched the Hero and all that force was enough to blow a clean hole straight through his chest"
        img.src = "SonicPunch.jpg"
        hideButtons();
        button10.style.display = "block"
    }
    else if (opponent == "criminal2"){
        title.textContent = "You tried to do a super sonic punch!"
        description.textContent = "You tried to punch him but when you did he used his weather powers to make a tornado and he flung you away and you died"
        img.src = "Dead.jpg"
        hideButtons();
        button3.style.display = "block"
    }

});
button17.addEventListener("click", function() {
    if(opponent == "criminal1"){
        title.textContent = "You ran straight at the criminal!";
        description.textContent = "You run straight at him but he slices off your head and you die. Theres no healing back from this.";
        img.src = "Dead.jpg";
        hideButtons();
        button3.style.display = "block";
    }
    else if(opponent == "Top Hero"){
        title.textContent = "You ran straight at the Top Hero!";
        description.textContent = "You run straight at him he grabs you and there is nothing you can do about it. You were then taken to the police station and got arrested";
        img.src = "Jail.jpg";
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Top Villain"){
        topVillain = "Dead"
        title.textContent = "You ran straight at the Top Villain!";
        description.textContent = "You run straight at him he grabs you and there is nothing you can do about it but he got bored and let you go so I guess you win?";
        img.src = "Grab.jpg";
        hideButtons();
        button10.style.display = "block"
    }
    else if (opponent == "Hero"){
        title.textContent = "You ran straight at the Hero!";
        description.textContent = "You run straight at him he grabs you and there is nothing you can do about it. You were then taken to the police station and got arrested";
        img.src = "Jail.jpg";
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "criminal2"){
        criminal2 = "Dead"
        title.textContent = "You ran straight at the criminal!";
        description.textContent = "You run straight at him and he activates his powers and creates a tornado but you survive it and apprehend him.";
        img.src = "Subdue.jpg";
        hideButtons();
        button10.style.display = "block"
    }
});
button18.addEventListener("click", function() {
    if ( opponent == "criminal1"){
        reputation += 1;
        title.textContent = "You talked to the criminal!";
        description.textContent = "You talked to the criminal he tried to slice you but you heal. You convinced him to turn himself in.";
        img.src = "Talk.jpg";
        button17.style.display = "none";
        button18.style.display = "none";
        button10.style.display = "block";
    }
    else if (opponent == "Top Hero"){
        title.textContent = "You talked to the Top Hero!";
        description.textContent = "You talked to the Top Hero but it backfired. He convinced you to turn yourself in.";
        img.src = "Talk.jpg";
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Top Villain"){
        topVillain = "Dead"
        reputation += 10
        title.textContent = "You talked to the Villain!";
        description.textContent = "You talked to the Top Villain it took some time but after he realized he couldnt defeat you he turned himself in";
        img.src = "Talk.jpg";
        hideButtons();
        button10.style.display = "block"
    }
    else if (opponent == "criminal2"){
        reputation += 5;
        title.textContent = "You talked to the criminal!";
        description.textContent = "You talked to the criminal he tried to summon a tornado on you but you heal it off. You convinced him to turn himself in.";
        img.src = "Talk.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    });
button19.addEventListener("click", function() {
    if (opponent == "criminal1"){
        reputation -= 1;
        title.textContent = "You used his weapon against him!";
        description.textContent = "You used his weapon against him and you ended up killing him.";
        img.src = "Weapon.jpg";
        button19.style.display = "none";
        button20.style.display = "none";
        button10.style.display = "block";
    }
    else if (opponent == "Top Hero"){
        topHero = "Dead"
        reputation -= 10
        title.textContent = "You used his weapon against him!";
        description.textContent = "You used his weapon against him and you ended up killing him.";
        img.src = "Weapon1.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (opponent == "Top Villain"){
        topVillain = "Dead"
        reputation += 10
        title.textContent = "You used his weapon against him!";
        description.textContent = "You used his weapon against him and you ended up knocking him out.";
        img.src = "Weapon1.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (opponent == "Hero"){
        hero = "Dead"
        reputation -= 5
        title.textContent = "You used his weapon against him!";
        description.textContent = "You used his weapon against him and you ended up killing him.";
        img.src = "Weapon1.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (opponent == "criminal2"){
        criminal2 = "Dead"
        reputation += 5
        title.textContent = "You used his weapon against him!";
        description.textContent = "You used his weapon of controlling the weather against him and you ended up knocking him out then taking him to jail.";
        img.src = "Weather.jpg";
        hideButtons();
        button10.style.display = "block";
    }
});
button20.addEventListener("click", function() {
    if (opponent == "criminal1"){
        reputation += 1;
        title.textContent = "You tried to use your telekinesis to throw him across the room!";
        description.textContent = "You tried to use your telekinesis to throw him across the room but you ended up just tripping him but it was enough to make him pass out.";
        img.src = "Throw.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (opponent == "Top Hero"){
        title.textContent = "You threw him into the mountain"
        description.textContent = "You threw him into the mountain but it had no affect he came up to you and you gave up and let him arrest you"
        img.src = "Jail.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Top Villain"){
        title.textContent = "You threw him into the mountain"
        description.textContent = "You threw him into the mountain but it had no affect he came up to you and punched a whole threw your chest. You died"
        img.src = "Dead.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "Hero"){
        title.textContent = "You threw him into the mountain"
        description.textContent = "You threw him into the mountain but it had no affect he came up to you and you gave up and let him arrest you"
        img.src = "Jail.jpg"
        hideButtons();
        button3.style.display = "block"
    }
    else if (opponent == "criminal2"){
        title.textContent = "You threw him into the mountain"
        description.textContent = "You threw him into the mountain but it had no affect he came up to you and summoned a tornado on you"
        img.src = "Dead.jpg"
        hideButtons();
        button3.style.display = "block"
    }
});
button21.addEventListener("click", function() {
    strength += 1;
    scene = "scene5b";
    updateScene(scene);
});
button22.addEventListener("click", function() {
    group = "Villain";
    scene = "scene5c";
    updateScene(scene);
});
button23.addEventListener("click", function() {
    scene = "scene6b";
    updateScene(scene);
});
button24.addEventListener("click", function() {
    opponent = "hero";
    scene = "scene6c";
    updateScene(scene);
});
button25.addEventListener("click", function() {
    group = "Hero";
    scene = "scene7a";
    updateScene(scene);
});
button26.addEventListener("click", function(){
    opponent = "criminal2"
    scene = "scene7b"
    updateScene(scene)
})
button27.addEventListener("click", function(){
    scene = "scene7c"
    updateScene(scene);
});
button28.addEventListener("click", function(){
    scene = "scene8a";
    updateScene(scene);
});
function updateScene(scene) {
    if (scene == "start") {
        title.textContent = "You're sound asleep!";
        description.textContent = "You should wake up now to continue the game";
        hideButtons();
        button1.style.display = "block";
        button2.style.display = "block";
        img.src = "Sleep.jpg";
    }
    else if (scene == "scene1a") {
        title.textContent = "You wake up!";
        description.textContent = "You wake up in you normal life in your normal room but little do you know something not so normal is about to happen.";
        img.src = "Awake.jpg";
        hideButtons();
        button8.style.display = "block";
        button9.style.display = "block";
    }
    else if (scene == "scene1b") {
        title.textContent = "You go back to sleep";
        description.textContent = "You decide to go back to sleep and miss out on everything this game had to offer.";
        img.src = "sleep.jpg";
        hideButtons();
        button3.style.display = "block";
    }
    else if (scene == "scene2a") {
        title.textContent = "You go outside";
        description.textContent = "You decide to go outside and try to enjoy the nice day but then a car going 80 in a neighboorhood runs you over and you die but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life. Choose a superpower to start your new life with!";
        img.src = "car.jpg";
        hideButtons();
        button4.style.display = "block";
        button7.style.display = "block";
    }
    else if (scene == "scene2b") {
        title.textContent = "You stay inside";
        description.textContent = "You decide to stay inside and watch some TV but then you get electrecuted by the TV in your house and you die but you're the main character so you get transported to a new, better world where superpowers are now everyday things used in everyday life. Choose a superpower to start your new life with!";
        img.src = "TV.jpg";
        hideButtons();
        button5.style.display = "block";
        button6.style.display = "block";
    }
    else if (scene == "scene3a") {
        title.textContent = "Oh no! a Crime is being taken place!";
        description.textContent = " You decide to explore the new world but then you see a robbery being taken place but you cant really control your new power so what do you do?"
        img.src = "crime.jpg";
        hideButtons();
        button11.style.display = "block";
        button12.style.display = "block";
    }
    else if (scene == "scene4a"){
        title.textContent = "You try to stop the crime!";
        description.textContent = "You confront the criminal. Whats your next move?";
        img.src = "";
        hideButtons();
        if (power == "Flight + SuperStrength") {
            button13.style.display = "block";
            button14.style.display = "block";

        }
        else if (power == "SuperSpeed") {
            button15.style.display = "block";
            button16.style.display = "block";
        }
        else if (power == "Super Healing") {
            button17.style.display = "block";
            button18.style.display = "block";
        }
        else if (power == "Telekinesis") {
            button19.style.display = "block";
            button20.style.display = "block";
        }
    }
    else if (scene == "scene4b") {
        title.textContent = "You run away!";
        description.textContent = "You decided to ignore the crime. Now what do you do?";
        img.src = "Walk.jpg";
        hideButtons();
        button21.style.display = "block";
        button22.style.display = "block";
    }
    else if (scene == "scene5a") {
        if (reputation >= 0) {
            title.textContent = "You are a hero!";
            description.textContent = "You have a positive reputation and you are known as a hero in the city.";
            img.src = "Hero.jpg";
        }
        else if (reputation < 0) {
            if (strength <= 0) {
            title.textContent = "You messed up!";
            description.textContent = "You have a negative reputation and you are known as a villain in the city.";
            img.src = "Villain.jpg";
            }
            else if (strength > 0) {
                title.textContent = "You messed up!";
                description.textContent = "You have a negative reputation because you ran away instead of helping at the scene of the crime.";
                img.src = "Hero.jpg";
            }
        }
    }
    else if (scene == "scene5b") {
        reputation -= 1;
        title.textContent = "You train your power!";
        description.textContent = "You train your power and you become stronger and you can control it alot better.";
        img.src = "Train.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (scene == "scene5c") {
        title.textContent = "You joined a villain group!";
        description.textContent = "You joined a villain group. Whats the first thing you want to do.";
        img.src = "VillainGroup.jpg";
        if (strength > 0) {
            hideButtons();
            button23.style.display = "block";
            button24.style.display = "block";
        }
         else if (strength == 0) {
        hideButtons();
        button21.style.display = "block";
        button23.style.display = "block";
        button24.style.display = "block";

    }
}
    else if (scene == "scene6a") {
        if(group == "Villain"){
            if (strength == 0) {
                title.textContent = "What to do next?";
                description.textContent = "Youre in a villain group what do you want to do next?";
                hideButtons();
                button21.style.display = "block";
                button23.style.display = "block";
                button24.style.display = "block";
            }
            else if (strength > 0) {
                title.textContent = "What to do next?";
                description.textContent = "You now pretty good control of your power and you are in a villain group what do you want to do next?";
                hideButtons();
                button23.style.display = "block";
                button24.style.display = "block";
            }
        }
        else if(group == "Hero"){
            if (strength == 0) {
                title.textContent = "What to do next?";
                description.textContent = "Youre in a hero group what do you want to do next?";
                hideButtons();
                button21.style.display = "block"
                button26.style.display = "block"
                button27.style.display = "block"
            }
            else if (strength > 0) {
                title.textContent = "What to do next?";
                description.textContent = "You now pretty good control of your power and you are in a hero group what do you want to do next?";
                hideButtons();
                button26.style.display = "block";
                button27.style.display = "block";
            }
        }
        else if (group == ""){
                if (strength == 0) {
                title.textContent = "What to do next?";
                description.textContent = "You are not in a group and you have no control of your power what do you want to do next?";
                hideButtons();
                button21.style.display = "block";
                button22.style.display = "block";
                button23.style.display = "block";
                button24.style.display = "block";
                button25.style.display = "block";
            }
            else if (strength > 0) {
                title.textContent = "What to do next?";
                description.textContent = "You have good control of your powers now and want to do something. What should you do?";
                hideButtons();
                button22.style.display = "block";
                button23.style.display = "block";
                button24.style.display = "block";
                button25.style.display = "block";
            }
    }}
    else if (scene == "scene6b") {
        if (strength > 0) {
            opponent = "Top Hero";
            title.textContent = "You went after the top Hero!";
            description.textContent = "You went after the top hero and you beat him and you are now the top hero in the city.";
            img.src = "TopHero.jpg";
                if (power == "Flight + SuperStrength") {
                    title.textContent = "Youre face to face with the top Hero!";
                    description.textContent = "You know this is the top Hero and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopHero.jpg";
                    hideButtons();
                    button13.style.display = "block";
                    button14.style.display = "block";
                }
                else if (power == "SuperSpeed") {
                    title.textContent = "Youre face to face with the top Hero!";
                    description.textContent = "You know this is the top Hero and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopHero.jpg";
                    hideButtons();
                    button15.style.display = "block";
                    button16.style.display = "block";
                }
                else if (power == "Super Healing") {
                    title.textContent = "Youre face to face with the top Hero!";
                    description.textContent = "You know this is the top Hero and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopHero.jpg";
                    hideButtons();
                    button17.style.display = "block";
                    button18.style.display = "block";
                }
                else if (power == "Telekinesis") {
                    title.textContent = "Youre face to face with the top Hero!";
                    description.textContent = "You know this is the top Hero and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopHero.jpg";
                    hideButtons();
                    button19.style.display = "block";
                    button20.style.display = "block";
                }
            }

        else if (strength == 0) {
            title.textContent = "You went after the top Hero!";
            description.textContent = "You went after the top hero but you were so weak he accidently killed you. You are now dead.";
            img.src = "Dead.jpg";
            hideButtons();
            button3.style.display = "block";
        }
    }
    else if (scene == "scene6c") {
        opponent = "Hero"
        if (strength > 0) {
            if (power == "Flight + SuperStrength") {
                title.textContent = "You went to rob a bank!";
                description.textContent = "You went to rob a bank but you were confronted by a superhero";
                img.src = "Hero1.jpg";
                hideButtons();
                button13.style.display = "block";
                button14.style.display = "block";
            }
            else if (power == "SuperSpeed") {
                title.textContent = "You went to rob a bank!";
                description.textContent = "You went to rob a bank but you were confronted by a superhero";
                img.src = "Hero1.jpg";
                hideButtons();
                button15.style.display = "block";
                button16.style.display = "block";
            }
            else if (power == "Super Healing") {
                title.textContent = "You went to rob a bank!";
                description.textContent = "You went to rob a bank but you were confronted by a superhero who has the power of controlling the weather.";
                img.src = "Hero1.jpg";
                hideButtons();
                button17.style.display = "block";
                button18.style.display = "block";
            }
            else if (power == "Telekinesis") {
                title.textContent = "You went to rob a bank!";
                description.textContent = "You went to rob a bank but you were confronted by a superhero who has the power of controlling the weather.";
                img.src = "Hero1.jpg";
                hideButtons();
                button19.style.display = "block";
                button20.style.display = "block";
            }
        }
        else if (strength == 0) {
            title.textContent = "You went to rob a bank!";
            description.textContent = "You went to rob a bank but you were confronted by a superhero. You were so weak that he accidently killed you. You are now dead.";
            img.src = "Dead.jpg";
            hideButtons();
            button3.style.display = "block";
        }
    }
    else if (scene == "scene7a") {
        if ( strength > 0 ){
            if(reputation < 0){
                opponent = "criminal2";
                title.textContent = "You are unworthy!";
                description.textContent = "You are unworthy to join the hero group because of your bad reputation.";
                img.src = "Sad.jpg";
                hideButtons();
                button26.style.display = "block";
                button22.style.display = "block";
        }
            else if(reputation >= 0){
                title.textContent = "You joined the hero group!";
                description.textContent = "You joined the hero group and you are now a common hero in the city.";
                img.src = "HeroGroup.jpg";
                hideButtons();
                button26.style.display = "block";
                button27.style.display ="block";
        }
        }
        else if (strength == 0){
           if(reputation < 0){
                opponent = "criminal2";
                title.textContent = "You are unworthy!";
                description.textContent = "You are unworthy to join the hero group because of your bad reputation.";
                img.src = "Sad.jpg";
                hideButtons();
                button21.style.display = "block"
                button26.style.display = "block";
                button22.style.display = "block";
        }
            else if(reputation >= 0){
                title.textContent = "You joined the hero group!";
                description.textContent = "You joined the hero group and you are now a common hero in the city.";
                img.src = "HeroGroup.jpg";
                hideButtons();
                button21.style.display = "block"
                button26.style.display = "block";
                button27.style.display ="block";
            } 
        }
    }
    else if (scene == "scene7b"){
        if (strength > 0) {
            if (power == "Flight + SuperStrength") {
                title.textContent = "You went to go stop the bank robbery!";
                description.textContent = "You went to go stop the bank robber who has the power of controlling the weather. What should you do?";
                img.src = "Weather.jpg";
                hideButtons();
                button13.style.display = "block";
                button14.style.display = "block";
            }
            else if (power == "SuperSpeed") {
                title.textContent = "You went to go stop the bank robbery!";
                description.textContent = "You went to go stop the bank robber who has the power of controlling the weather. What should you do?";
                img.src = "Weather.jpg";
                hideButtons();
                button15.style.display = "block";
                button16.style.display = "block";
            }
            else if (power == "Super Healing") {
                title.textContent = "You went to go stop the bank robbery!";
                description.textContent = "You went to go stop the bank robber who has the power of controlling the weather. What should you do?";
                img.src = "Weather.jpg";
                hideButtons();
                button17.style.display = "block";
                button18.style.display = "block";
            }
            else if (power == "Telekinesis") {
                title.textContent = "You went to go stop the bank robbery!";
                description.textContent = "You went to go stop the bank robber who has the power of controlling the weather. What should you do?";
                img.src = "Weather.jpg";
                hideButtons();
                button19.style.display = "block";
                button20.style.display = "block";
            }
        }
        else if (strength == 0) {
            title.textContent = "You went to go stop the bank robbery!";
            description.textContent = "You went to go stop the bank robber who has the power of controlling the weather. You were too weak and he killed you. You are now dead.";
            img.src = "Dead.jpg";
        }   
    }
    else if (scene == "scene7c") {
        if (strength > 0) {
            opponent = "Top Villain";
            img.src = "TopVillain.jpg";
                if (power == "Flight + SuperStrength") {
                    title.textContent = "You're face to face with the top Villain !";
                    description.textContent = "You know this is the top Villain and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopVillain.jpg";
                    hideButtons();
                    button13.style.display = "block";
                    button14.style.display = "block";
                }
                else if (power == "SuperSpeed") {
                    title.textContent = "Youre face to face with the top Villain!";
                    description.textContent = "You know this is the top Villain and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopVillain.jpg";
                    hideButtons();
                    button15.style.display = "block";
                    button16.style.display = "block";
                }
                else if (power == "Super Healing") {
                    title.textContent = "Youre face to face with the top Villain!";
                    description.textContent = "You know this is the top Villain and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopVillain.jpg";
                    hideButtons();
                    button17.style.display = "block";
                    button18.style.display = "block";
                }
                else if (power == "Telekinesis") {
                    title.textContent = "Youre face to face with the top Villain!";
                    description.textContent = "You know this is the top Villain and hes strong you need to choose the right move. What will it be?";
                    img.src = "TopVillain.jpg";
                    hideButtons();
                    button19.style.display = "block";
                    button20.style.display = "block";
                }
            }

        else if (strength == 0) {
            title.textContent = "You went after the top Villain!";
            description.textContent = "You went after the top Villain but you were too crushed you instantly. You are now dead.";
            img.src = "Dead.jpg";
            hideButtons();
            button3.style.display = "block";
        }
    }

    else if (scene == "scene8a"){
        endGame()
    }
}
    function powerScene(power){
    if (power == "Flight + SuperStrength") {
        title.textContent = "You have Flight and SuperStrength!";
        description.textContent = "With your new powers you can fly and punch through walls.";
        img.src = "Flight.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (power == "SuperSpeed") {
        title.textContent = "You have SuperSpeed!";
        description.textContent = "With your new power you can run at super speeds.";
        img.src = "Speed.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (power == "Super Healing") {
        title.textContent = "You have Super Healing!";
        description.textContent = "With your new power you can heal yourself extremly fast ALMSOT making you immortal";
        img.src = "Healing.jpg";
        hideButtons();
        button10.style.display = "block";
    }
    else if (power == "Telekinesis") {
        title.textContent = "You have Telekinesis!";
        description.textContent = "With your new power you can now move objects with your mind and control peoples mind";
        img.src = "Telekinesis.jpg";
        hideButtons();
        button10.style.display = "block";
    }
}
function checkReputation() {
    if (reputation >= 10) {
        title.textContent = "You are the top Hero!";
        description.textContent = "You have an exceptional reputation and you are known as the most legendary hero in the city.";
        img.src = "TopHero.jpg";
        reputation = "TopHero"
    }
    else if (reputation < -10) {
        title.textContent = "You are the top Villain!";
        description.textContent = "You have a terrible reputation and you are known as the most feared villain in the city.";
        img.src = "TopVillain.jpg";
        reputation = "TopVillain"
    }
    else if (reputation > 0) {
        title.textContent = "You are a Hero!";
        description.textContent = "You have an exceptional reputation and you are known as a common hero in the city.";
        img.src = "Hero.jpg";
        reputation = "Hero"
    }
        else if (reputation < 0) {
        title.textContent = "You are a Villain!";
        description.textContent = "You have a negative reputation and you are known as a common villain in the city.";
        img.src = "Villain.jpg";
        reputation = "Villain"

    }

}
function checkEnding() {
    checkReputation();
    if (topHero == "Dead") {
        title.textContent = "True Villain ending!";
        ending.textContent = "You have defeated the top Hero and you became the top Villain!";
        img.src = "TopVillain.jpg";
        hideButtons();
        button28.style.display = "block"
    }
    else if (topVillain == "Dead") {
        title.textContent = "True Hero ending!";
        description.textContent = ""
        ending.textContent = "You have defeated the top Villain and you became the top Hero!";
        img.src = "TopHero.jpg";
        hideButtons();
        button28.style.display = "block"
    }
    else if (reputation == "Hero"){
        title.textContent = "Hero ending"
        description.textContent = ""
        ending.textContent = "You did good in this new world. You are known as a Hero"
        img.src = "Hero.jpg"
        hideButtons();
        button28.style.display = "block"
} 
    else if (reputation == "Villain"){
        title.textContent = "Villain ending"
        description.textContent = ""
        ending.textContent = "You did bad in this new world. You are known as a Villain"
        img.src = "Villain.jpg"
        hideButtons();
        button28.style.display = "block"
    }
}
function endGame(){
    title.textContent = "Game Over";
    description.textContent = "Thank you for playing my game";
    ending.textContent = "Final Reputation: " + reputation;
    img.src = "End.jpg";
    hideButtons();
    button3.style.display = "block";
}
function hideButtons(){

let buttons = document.querySelectorAll("button")

for(let i = 0; i < buttons.length; i++){

buttons[i].style.display = "none"

}

}
updateScene(scene);