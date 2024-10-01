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
  return Number(document.getElementById(id).value); //for convert string to number
}
function getElementNumById(id) {
  return Number(document.getElementById(id).innerText);  //for convert string to number
}

// main functionality
let money = getElementNumById("money")
let totalDonate = getElementNumById("total-donate");
document.getElementById("noakhali-btn").addEventListener("click", ()=>{
  const inputValue = getInputNumById("noakhali-input")
  money -= inputValue;

  totalDonate += inputValue;
  document.getElementById("total-donate").innerHTML = totalDonate;

  document.getElementById("money").innerText = money;

  document.getElementById("noakhali-input").value = "";   //for reamove input value
});



//propper validation

document.getElementById("noakhali-input").addEventListener("input", () => {
  const value = getInputNumById("noakhali-input");
  if (isNaN(value) || value < 0) {
    const errorMsg = document.getElementById("noakhali-error");
    errorMsg.classList.remove("hidden")
    const button = document.getElementById("noakhali-btn");
    button.setAttribute("disabled", true);
  } else{
    const errorMsg = document.getElementById("noakhali-error");
    errorMsg.classList.add("hidden")
    const button = document.getElementById("noakhali-btn");
    button.removeAttribute("disabled");
  }
})