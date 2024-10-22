let mini = 1;
let maxi = 100;
let a = Math.floor(Math.random() * (maxi - mini) + mini);
let message = [];
console.log(a);
let p = document.querySelector("#pg");
let sub = document.querySelector("#submitter");
let dibba = document.querySelector("#dibba");
let rem = document.querySelector("#gr");
let c = 10;
let update = document.querySelector("#update");
update.innerHTML = ` `;
rem.innerHTML = `<h3>${c}</h3>`;
sub.addEventListener("click", function () {
  if (a == dibba.value) {
    dibba.value = "";
    update.innerHTML = `<h1>You guessed right</h1>`;
    dibba.disabled = true;
  } else {
    message.push(dibba.value);
    if (dibba.value < a) {
      update.innerHTML = `<h1>You guessed low</h1>`;
    } else {
      update.innerHTML = `<h1>You guessed high</h1>`;
    }
    dibba.value = "";
    console.log("Try again ");
    p.innerHTML = `<h3>${message}</h3>`;
    c--;
    rem.innerHTML = `<h3>${c}</h3>`;
  }
  if (c == 0) {
    update.innerHTML = `<h1>Game Over</h1>`;
    dibba.disabled = true;
  }
});
