const card = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 1;
card.addEventListener("click", () => {
  const newCard = document.createElement('div');
  newCard.classList.add("new-card", "fade-in");
  newCard.innerText = count++;
  newCard.addEventListener("click", () => {
    newCard.remove();
  });
  console.log(newCard);
  container.append(newCard);
});
