const answer = document.getElementById("answer");
const dateText = document.getElementById("date");

const today = new Date();
const isFriday = today.getDay() === 5; // primer logike

if (isFriday) {
  answer.textContent = "YES";
  answer.classList.add("yes");
} else {
  answer.textContent = "NO";
  answer.classList.add("no");
}

dateText.textContent = today.toDateString();