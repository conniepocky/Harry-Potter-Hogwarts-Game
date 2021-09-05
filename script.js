var footsteps = document.getElementById("snape")

var yay = document.getElementById("yay")

var input = document.getElementById("hi");

var info = document.getElementById("text")

var ques;

var name;

var paper;

var house;

var friend;

var food;

var dumbledoreLessons;

var button = document.getElementById("button")

var owlName;

var year;

var img = document.getElementById("img")

function lucky() {
	info.innerHTML = "The quidditch captian tells you that you can join the team since Dumbledore said you were very good at it 😄 Click to continue"
}

function ohNoes() {
  if (house == "slytherin") {
    info.innerHTML = "Snape doesn't even notice you don't have your homework, he is too busy giving Neville detention!"
  } else {
    info.innerHTML = "Snape takes 50 points from your house for not doing homework!"
  }
}

function happyWaffle() {
  info.innerHTML = "You did your homework and got 50 points for " + house + " too!!!"
  
  button.onclick = lucky
}

function trials() {
  info.innerHTML = "At the quidditch trials you become a the " + house + " seeker, " + friend + " is the Keeper!! Click to continue" 
  
  button.onclick = ohNoes
  
  
}

function yr2Day2() {
  info.innerHTML = "At Lunchtime after potions class you discover that Quidditch Trials are right now! Sadly you have some homework to do 📚😞. Do you skip the homework or do it??"
  
  if (input.value == "do homework") {
    button.onclick = happyWaffle
  } else if (input.value == "skip") {
    button.onclick = trials
  }
}

function hogwarts() {
  
  img.src = "http://i0.kym-cdn.com/photos/images/newsfeed/000/225/397/potter-tacos.jpg"
  
  info.innerHTML = "You eat waffles and tacos at the feast and dream about getting a Nimbus 2000 :) Click to continue"
  
  button.onclick = yr2Day2
}

function yr2Start() { 
  img.src = "http://cdn.playbuzz.com/cdn/7aa950b4-eaa0-417d-93af-3bd332dc8086/dec8c31c-3c84-4ae3-b8e1-ba6f1da345d1_560_420.jpg"
  
  info.innerHTML = "Your second year at Hogwarts begins, you and " + friend + " plan to join the quidditch team this year :D On the train what sweets do you buy?"
  
  button.onclick = hogwarts
}

function endOfYr1() {
  info.innerHTML = "Year One has come to an end! " + friend + " tells you they will see you next year at HOGWARTS 🧙‍ Click to continue"
  
  button.onclick = yr2Start
}


function ending2() {
  info.innerHTML = "You eat lots of " + food + " at the end of term feast." + house + " won the house cup, somebody called  Waffle NomNomNom becomes your friend 🤩"
  
  friend = "Waffle NomNomNom";
  
  button.onclick = endOfYr1
  
}

function christmas() {
  info.innerHTML = "Sadly " + house + " lost the house cup 😭 At the feast you make friends with someone called Waffle Baguette 😛 Click to continue"
  
  friend = "Waffle Baguette"
  
  lessons = false;
  
  button.onclick = endOfYr1
}

function dumbledoreSavesU() {
  info.innerHTML = "The real Dumbledore stuns Voldemort who quickly apperates away, Dumbledore gives you 100 house points and tells you that you will be given private lessons from him next year. Click to continue"
  
  lessons = true;
  
  button.onclick = ending2;
  
  
}

function spell() {
  info.innerHTML = "Wingardium Leviosar! You cry and the Fake Dumbledore gets lifted in the air. Suddenly they cry Diffindo! And the rock you were hiding behind gets sliced in half. Behind you someone crys Stupefy! Click to continue"
  
  button.onclick = dumbledoreSavesU
}

function madVoldy() {
  info.innerHTML = "Dumbledore looks enraged, but surprisingly he turns around to reveal Lord Voldemort at the back of his head. AVADA KEDAVERA! He screams, you dodge and hide behind a large rock. Do you cast a spell or hide?"
  
  if (input.value == "spell") {
    button.onclick = spell
  } else if (input.value == "hide") {
    button.onclick = dumbledoreSavesU
  }

}
  
function dumbledore() {
  
  img.src = "https://vignette.wikia.nocookie.net/p__/images/a/ac/Albus_Dumbledore.jpg/revision/latest/scale-to-width-down/350?cb=20180317215516&path-prefix=protagonist"
  
  info.innerHTML = "You find Professor Dumbledore standing in the middle of the training grounds waiting for you. Welcome, welcome he says I'm glad you turned up. What do you say to him?"
  
  button.onclick = madVoldy
}

function filch() {
  info.innerHTML = "You stun Filch using stupefy and dash to the training grounds. But you don't find what you expected there... Click to continue"
  
  button.onclick = dumbledore
}

function goTrials() {
  info.innerHTML = "You take the letter from " + owlName + " and quickly run down to the training grounds to meet with your captian. As you run down you to the grounds you see a cat guarding the front door with Filch the caretaker. Do you cast a spell at them or go back to your common room 🤨"
  
  img.src = "http://s3.crackedcdn.com/phpimages/article/1/1/3/603113_v2.jpg"
  
  
  if (input.value == "spell") {
    button.onclick = filch
  } else if (input.value == "go back") {
    button.onclick = christmas
  }
  
  
}

function quidditch() {
  info.innerHTML = "During the night you recieved an owl from the quidditch captian telling you to come down to the training grounds immediatly. Should you go?"
  
  if (input.value == "yes") {
    button.onclick = goTrials
  } else if (input.value == "no") {
    button.onclick = christmas
  }
}

function correctQ() {
  info.innerHTML = "Madam Hooch gives your house 10 points! You got it right! 🤩 Click to continue"
  
  button.onclick = quidditch
}

function incorrectQ() {
  info.innerHTML = "You got it wrong! 😱 Madam Hooch takes a point from your house! Click to continue"
  
  button.onclick = quidditch
}

function hoochQuestion() {
  info.innerHTML = "Madam Hooch asks you what you say when you want your broom  to go into your hand? Type 1 for Up! or 2 for Come Here or 3 for Wingardium Leviosar"
  
  if (input.value == 1) {
    button.onclick = correctQ
  } else if (input.value == 2 || input.value == 3){
    button.onclick = incorrectQ
  }
}

function flyingLesson() {
  info.innerHTML = "Madam Hooch gives Malfoy a detention and Neville is feeling happy 😄 Click to continue"
  
  button.onclick = hoochQuestion
}

function waffleLauncher() {
  info.innerHTML = "You use your waffle potion to launch waffles everywhere and cast Wingardium Leviosar to lift Malfoy of his broom! Suddenly Malfoy drops his wand but you dive down and catch it! The " + house + "s clap and cheer for you 😊😊😊 Click to Continue."
  
  button.onclick = flyingLesson
}

function saveNeville() {
  info.innerHTML = "Malfoy leaps onto a broom and takes Nevilles Wand! You quickly leap onto the broom and chase Malfoy! You have never rode a broom before but you find it remarkably easy! Do you cast a spell at Malfoy or continue chasing him?"
  
  if (input.value == "spell") {
    button.onclick = waffleLauncher
  } else if (input.value == "chase") {
    button.onclick = flyingLesson
  }
  
 
}

function slytherinsAreMean() {
  
  img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Draco_Mal.JPG/220px-Draco_Mal.JPG"
  
  info.innerHTML = "The MudBlood, Weasely and Potter all walk away to sulk. Click to continue!"
  
  button.onclick = flyingLesson
}

function flying() {
  
  if (house == "slytherin") {
  
      info.innerHTML = "A gang of slytherins are being mean to some gryffindors do you join them?"

      if (input.value == "yes") {
        button.onclick = slytherinsAreMean
      } else if (input.value == "no") {
        button.onclick = flyingLesson
      }
    
  } else {
          info.innerHTML = "Your first class is flying! Neville is very nervous and Malfoy is being mean to him 😱! Do you use your waffle potion to make Neville feel better???"

      if (input.value == "yes") {
        button.onclick = saveNeville
      } else if (input.value == "no") {
        button.onclick = flyingLesson
      }
    
  }
}

function waffles() {
  info.innerHTML = "Your potion made the waffles taste like a peice of toast but Hermione's taste like the most PROFESSIONAL WAFFLES EVER! She gives you 100 of hers because she has 1000. Click to continue"
  
  button.onclick = flying
}

function expelled() {
  info.innerHTML = "Dumbledore expells you GAME OVER!"
}

function lovelySnape() {
  img.src = "https://www.cnet.com/a/img/G7075StY4jDjUxq0-skiddgMfcI=/940x0/2016/01/14/365f60ee-4d02-4fbe-baa5-bc06c2b35749/snape1.jpg"
  info.innerHTML = "Snape takes 20 points from your house and tells you that you will be making a Waffle Potion!!! You sit next to Draco Malfoy and Hermione Granger! The waffle potion makes waffles, do you eat them?"
  
  if (input.value == "eat") {
    button.onclick = waffles
  } else {
    button.onclick = sad
  }
}

function happyOwl() {
  info.innerHTML = "In the common room you see " + owlName + " flying around outside you watch the owl for a while until you realize you are late for potions class with THE AMAZING PROFESSOR SNAPE!!!! You tiptoe down the stairs and run to potions class. On your way you find a large chunk of wood in the hallway you cry WINGARDIUM LEVIOSAR! and it moves out the way. Click to continue"
  
  button.onclick = lovelySnape
}

function firstFriend() {
  
  paper = true;
  
  input.value = ""
  
  info.innerHTML = "You glance at the paper and realize its a list of every student at Hogwarts! It tells you everyone's name, house and year! You thank the ravenclaw. Click to continue"
  
  
  yay.play()
  
  button.onclick = happyOwl
  
}

function ignore() {
  info.innerHTML = "The ravenclaw continues to pester you until Flitwick gives them a detention. They move to sit next to someone else. Click to contiue."
  
  paper = false;
  
  button.onclick = happyOwl
}

function sadFlitwick() {
  info.innerHTML = "Flitwick glares at you, the entire class are already seated, you sit next to a ravenclaw who passes you a sheet of paper! Do you read it or ignore them?"
  
  if (input.value == "read") {
    firstFriend()
  } else if (input.value == "ignore") {
    
    ignore()
    
  }
  
}

function introToHagrid() {
  
  input.value = ""
  
  info.innerHTML = "Me name is Rubeus Hagrid, keeper of keys and grounds at Hogwarts. But you can call meh Hagrid. Lemme take yeh to ur lesson. Click to continue"
  
  button.onclick = sadFlitwick
}

function hagrid() {
  
  input.value = ""
  
  info.innerHTML = "You twirl round the corner and fell into a huge giant! What yeh doin ere? Cries the giant. Click to continue."
  
  button.onclick = introToHagrid
}

function smartFriend() {
  info.innerHTML = "For the entire lesson you someone manage to do everything right! You got 20 points for " + house
  
  button.onclick = happyOwl
}

function lessonOne() {
  info.innerHTML = "Flitwick smiles as you sit down in your seat right on time for class. Click to continue"
  button.onclick = smartFriend
}

function wakeUp() {
  info.innerHTML = "You wake up and dash over to your first class. Charms with Professor Flitwick! While you walk through the corridors, you hear mysterious footsteps... Do you follow them or go to your class? Type class to go to your class or follow if you follow the noise."
  
  footsteps.play()
  
  if (input.value == "class") {
    lessonOne()
  } else if (input.value == "follow") {
    hagrid()
  }
  
}

function bed() {
  info.innerHTML = "You walk up stairs into your common room and go to bed. You are very tired. Click to continue"
  
  input.value = ""
  
  button.onclick = wakeUp
  
}
function feast() {
  var text = "You devour waffles, turkey, chips, pumpkin pasties, pumpkin juice and chocolate frogs at the feast with your fellow " + house + "s" + " what food do you want to eat?"
  info.innerHTML = text
  
  food = input.value
  
  button.onclick = bed
}

function gry() {
  info.innerHTML = "The Gryffindors cheer wildly, Snape doesn't seem too happy though. Click to continue."
  house = input.value
  button.onclick = feast
}

function sly() {
  info.innerHTML = "The Slytherins cheer wildly, Mcgonagall doesn't seem too happy though. Click to continue."
  button.onclick = feast
  house = input.value
}

function lol() {
  info.innerHTML = "What's that?"
}

function hp() {
  info.innerHTML = "The Hufflepuff's clap happily, everyone likes a Hufflepuff. Click to continue."
  button.onclick = feast 
  house = input.value
}

function rc() {
  info.innerHTML = "The Ravenclaw's clap proudly, everyone likes a wise Ravenclaw. Click to continue."
  button.onclick = feast
  house = input.value
}

function check() { 
  //info.innerHTML = input.value;
  if (input.value == "gryffindor") {
    gry()
  } else if (input.value == "slytherin") {
    sly()
  } else if (input.value == "ravenclaw") {
    rc()
    
  } else if (input.value == "hufflepuff") {
    hp()
  } else {
    lol()
  }
  
  input.value = " "
}

function sort() {
  
  var speech = "Mcgonagall shouts " + name + " and you wish to be sorted into..."
  
  info.innerHTML = speech
  
  button.onclick = check
  
}

function owl() {
  
  owlName = input.value
  
  input.value = "gryffindor"
  
  s()
}

function s() {
  sort()
}

function start() {
  info.innerHTML = "You Arrive at Hogwarts with all your luggage and an owl called..."
  
  input.value = "Hedwig"
  
  button.onclick = owl
} 


function submit() {
  
  name = input.value
  
  start()
  
}
