const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const originalText = document.querySelector("h1").innerText;
const originalColor = document.querySelector("h1").style.color;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {

        if(index < iteration) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if(iteration >= originalText.length){ 
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30);
}
