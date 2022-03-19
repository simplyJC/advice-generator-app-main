const buttonGenerate = document.querySelector('[data-button-generate]');
const content = document.querySelector('[data-content]');
const idNumber = document.querySelector('[data-id');

async function generateRandomAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice')
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  const { id, advice } = response.slip;
  idNumber.innerHTML = `${id}`;
  content.innerHTML = `${advice}`;
}

const buttonGenerateHandler = () => {
  buttonGenerate.classList.toggle('card__button-roll--loading');
  setTimeout(() => {
    buttonGenerate.classList.toggle('card__button-roll--loading');
  }, 1500);
  generateRandomAdvice();
};

buttonGenerate.addEventListener('click', buttonGenerateHandler);
