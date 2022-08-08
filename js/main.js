const button = document.querySelector(".btn"),
quote = document.querySelector("p"),
author = document.querySelector("span");

const copy = document.getElementById("copy");
const speech = document.getElementById("speech");


function changeQuote () {

    button.innerText = "Loading quote .."

    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(result => {
          quote.innerText = result.content ;
          author.innerText = result.author ;
          button.innerText = "new quote";
      })

}

function copyContent () {
    navigator.clipboard.writeText(quote.innerText)
}

function speechContent () {
    const utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`)
    speechSynthesis.speak(utterance);
}

button.addEventListener("click" , changeQuote);
copy.addEventListener("click" , copyContent);
speech.addEventListener("click" , speechContent);