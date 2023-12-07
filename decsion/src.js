document.addEventListener('DOMContentLoaded', function () {
  const questionInput = document.getElementById('questionInput');
  const decisionButton = document.getElementById('decisionButton');
  const resultContainer = document.getElementById('resultContainer');

  // Add input event listener to allow only numbers
  questionInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;

    // Replace non-numeric characters with an empty string
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  });

  decisionButton.addEventListener('click', function () {
    const question = questionInput.value.trim();

    if (question === '') {
      alert('Please enter a valid question.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

    let answer;

    switch (randomNumber) {
      case 1:
        answer = "It is certain";
        break;
      case 2:
        answer = "Without a doubt";
        break;
      case 3:
        answer = "You may rely on it";
        break;

      case 4:
        answer = "You won the lottery";
        break;
      case 5:
        answer = "Try harder";
        break;
      case 6:
        answer = "Foxes forever";
        break;
      case 7:
        answer = "You have bad luck";
        break;
      case 8:
        answer = "You have a second chance";
        break;
      case 9:
        answer = "Don't give up";
        break;
      case 10:
        answer = "You win";
        break;

      default:
        answer = "Cannot predict now";
        break;
    }

    resultContainer.innerHTML = `<p>Your question: ${question}</p><p>Answer: ${answer}</p>`;
  });
});
