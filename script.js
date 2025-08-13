window.alert(`Welcome to Guess Master.\nThis site is stil under development so you might experience some bugs.\nWe apologize for any error you come across do well to report it to us(link can be found in the footer of the page).\n We hope you enjoy our Game and do not forget to share.\n More features coming soon...`);

function typeEffect(text, color) {
  const output = document.getElementById("output");

  // Clear timeouts if rerunning
  if (output._typingTimeouts) {
    output._typingTimeouts.forEach(clearTimeout);
  }
  output._typingTimeouts = [];

  output.innerHTML = "";
  output.style.color = color;
 output.style.fontFamily = "monospace";
   let i = 0;

   function typeChar() {
       if (i < text.length) {
           const char = text.charAt(i);
           output.innerHTML += char === "\n" ? "<br>" : char;
           
           const timeout = setTimeout(typeChar, 30);
           output._typingTimeouts.push(timeout);
      i++;
    }
  }

  typeChar(); // 👈 Only call it ONCE here
}


function typeEffect2(text, color) {
  const info = document.getElementById("info");

  // Clear timeouts if rerunning
  if (info._typingTimeouts) {
    info._typingTimeouts.forEach(clearTimeout);
  }
  info._typingTimeouts = [];

  info.innerHTML = "";
  info.style.color = color;
 info.style.fontFamily = "monospace";
   let i = 0;

   function typeChar() {
       if (i < text.length) {
           const char = text.charAt(i);
           info.innerHTML += char === "\n" ? "<br>" : char;
           
           const timeout = setTimeout(typeChar, 15);
           info._typingTimeouts.push(timeout);
      i++;
    }
  }

  typeChar(); // 👈 Only call it ONCE here
}
typeEffect2(`Think you got the skills to crack the code and beat the system!\nTry to guess the secret number -but beware, it loves to play hard to get!\nKeep guessing Keep trying... don't worry we'll keep track of how many times you fail -i mean attempt😅!\n`)

function typeEffect3(text, color) {
  const myh1 = document.getElementById("myh1");

  // Clear timeouts if rerunning
  if (myh1._typingTimeouts) {
    myh1._typingTimeouts.forEach(clearTimeout);
  }
  myh1._typingTimeouts = [];

  myh1.innerHTML = "";
  myh1.style.color = color;
 myh1.style.fontFamily = "monospace";
   let i = 0;

   function typeChar() {
       if (i < text.length) {
           const char = text.charAt(i);
           myh1.innerHTML += char === "\n" ? "<br>" : char;
           
           const timeout = setTimeout(typeChar, 30);
           myh1._typingTimeouts.push(timeout);
      i++;
    }
  }

  typeChar(); // 👈 Only call it ONCE here
}
typeEffect3(`Welcome to Guess Master`)


function typeEffect4(text, color) {
  const myh2 = document.getElementById("myh2");

  // Clear timeouts if rerunning
  if (myh2._typingTimeouts) {
    myh2._typingTimeouts.forEach(clearTimeout);
  }
  myh2._typingTimeouts = [];

  myh2.innerHTML = "";
  myh2.style.color = color;
 myh2.style.fontFamily = "monospace";
   let i = 0;

   function typeChar() {
       if (i < text.length) {
           const char = text.charAt(i);
           myh2.innerHTML += char === "\n" ? "<br>" : char;
           
           const timeout = setTimeout(typeChar, 150);
           myh2._typingTimeouts.push(timeout);
      i++;
    }
  }

  typeChar(); // 👈 Only call it ONCE here
}
typeEffect4(`Let the challenge begin!!!`)

function typeEffect5(text, color) {
  const mylabel = document.getElementById("mylabel");

  // Clear timeouts if rerunning
  if (mylabel._typingTimeouts) {
    mylabel._typingTimeouts.forEach(clearTimeout);
  }
  mylabel._typingTimeouts = [];

  mylabel.innerHTML = "";
  mylabel.style.color = color;
 mylabel.style.fontFamily = "monospace";
   let i = 0;

   function typeChar() {
       if (i < text.length) {
           const char = text.charAt(i);
           mylabel.innerHTML += char === "\n" ? "<br>" : char;
           
           const timeout = setTimeout(typeChar, 50);
           mylabel._typingTimeouts.push(timeout);
      i++;
    }
  }

  typeChar(); // 👈 Only call it ONCE here
}
function typeEffect6(text, color) {
  const mylabel2 = document.getElementById("mylabel2");

  // Clear timeouts if rerunning
  if (mylabel2._typingTimeouts) {
    mylabel2._typingTimeouts.forEach(clearTimeout);
  }
  mylabel2._typingTimeouts = [];

  mylabel2.innerHTML = "";
  mylabel2.style.color = color;
 mylabel2.style.fontFamily = "monospace";
   let i = 0;

   function typeChar() {
       if (i < text.length) {
           const char = text.charAt(i);
           mylabel2.innerHTML += char === "\n" ? "<br>" : char;
           
           const timeout = setTimeout(typeChar, 50);
           mylabel2._typingTimeouts.push(timeout);
      i++;
    }
  }

  typeChar(); // 👈 Only call it ONCE here
}

const mylabel2 = document.getElementById("mylabel2")
const myh2 = document.getElementById("myh2")
const myh1 = document.getElementById("myh1")
const info = document.getElementById("info");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const guessinput = document.getElementById("guessinput");
const output = document.getElementById("output");
const okbtn = document.getElementById("okbtn");
const messages = document.getElementById("messages");
const playagain = document.getElementById("playagain");
const username = document.getElementById("username");
const heart = document.getElementById("heart");
const mylabel = document.getElementById("mylabel");
// let guess = Number(guessinp);
 
    let minnum = 1;
    let maxnum = 100;
let answer;
let attempts;
let attempt;
function startgame () {
    answer = Math.floor(Math.random() * (maxnum - minnum + 1));
    typeEffect(``, "");
    typeEffect5(`Username:`, "black")
    typeEffect6(`Enter your Guess`)
    guessinput.value = "";
    attempts = 0;
    playagain.style.display = "none";
    heart.style.display = "none";
    okbtn.style.display = "block";
}
function help () {
    heart.style.display = "block";
 heart.onclick = function () {
   user = username.value.trim();
   let guessent = guessinput.value.trim();
   guess = Number(guessent);
   lasttry = guess;
   if (guess === Number(guess) && guess >= minnum && guess <= maxnum && user !== ""){
     okbtn.style.display ="none";
     playagain.style.display = "inline-block";
     heart.style.display = "none";
       
       user = user.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
       user = user
       .replace(/[^a-zA-Z0-9 .\-_]/g, "")  // remove unwanted symbols
       .replace(/ {2,}/g, " ");  
       typeEffect(`Hey Champ\nDear ${user}\nThe answer was ${answer}\nYour last try was ${lasttry}\nYou tried ${attempts} times.\nKeep going ${user} 🏃\n You are almost there.`, "#4CAF50")
       playagain.onclick = startgame;
          }

    }
    
  }
okbtn.onclick = function () {
    user = username.value.trim();
    let guessent = guessinput.value.trim();
    guess = Number(guessent);
 if (user === "" || guessent === "" || guessent > maxnum || guessent < minnum || isNaN(guessent))  {
        if (user === "") {
            typeEffect(`Please enter a valid username`, "red")
            
        }
        
        else{
            
            if (guessent === "" || guessent > maxnum || guessent < minnum || isNaN(guessent)){
                typeEffect(`Please enter a valid number between ${minnum} and ${maxnum}!`, "red");
            }
            
            
            if (guessent === ""){
                typeEffect(`Do not leave your guess blank`, "red")
            }
        }
    }
    else{

        attempts++;
         
        if (attempts >= 7) {
        
         help();
           
        }
        if (guess > answer){
            typeEffect(`Too high! Try again.`, "red");
        }
        else if (guess < answer) {
    typeEffect(`Too low! Try again`, "red");
}

else {
    let remark = "";
    if (attempts <= 4) {
        remark = "Legendary genius 😎!\n Are you sure you are human?";
    }
      else if (attempts <= 7) {
        remark = "Smart! You’ve got sharp intuition.";
    }
    else if (attempts <= 10)  {
        remark = "Not bad, solid effort."; 
      }
      else {
        remark = "You did not quit Persistence is also a form of genius.";
      }
      if (guess === answer) {
        if (user){
            //  user = user.replace(/[^a-zA-z0-9\’\s]/g, "");
            user = user.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            user = user
            .replace(/[^a-zA-Z0-9 .\-_]/g, "")  // remove unwanted symbols
            .replace(/ {2,}/g, " ");  
          
            typeEffect5(`Hello ${user}`, "black")
          }
        user = user.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        okbtn.style.display = "none";
       heart.style.display = "none";
        user = user
  .replace(/[^a-zA-Z0-9 .\-_]/g, "")  // remove unwanted symbols
  .replace(/ {2,}/g, " ");            // replace 2+ spaces with a single space
          typeEffect(`Correct✅\nDear ${user}.\nThe answer was ${answer}\nIt took you ${attempts} attempts.\nRemark:${remark}`, "green")
          playagain.style.display = "inline-block";

        }
    }
    }
}

playagain.onclick = startgame;

    startgame();

