// faq
document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('[data-icon]');
  
      // Check if the answer is currently expanded
      if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        // Collapse the answer
        answer.style.maxHeight = '0';
        icon.classList.remove('rotate-180');
      } else {
        // Expand the answer
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        icon.classList.add('rotate-180');
      }
    });
});







// utilities function 
function getInputNumById(id) {
  return Number(document.getElementById(id).value);
}

function getElementNumById(id) {
  return Number(document.getElementById(id).innerText);
}


let money = getElementNumById("money")


document.getElementById("noakhali-btn").addEventListener("click", ()=>{
  const inputValue = getInputNumById("noakhali-input")

  const donate = money - inputValue
  console.log(donate);
  document.getElementById("total-donate").innerText = inputValue;
  document.getElementById("money").innerText = donate;

  
})

