// faq-section
document.querySelectorAll('.question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('[data-icon]');

    // Toggle the 'active' class to expand/collapse the answer
    answer.classList.toggle('active');

    // Adjust max-height to expand/collapse answer
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    } else {
      answer.style.maxHeight = '0';
    }

    // Toggle the rotation class for the icon
    icon.classList.toggle('rotate-180');
  });
});

document.querySelectorAll('[data-icon]').forEach((icon) => {
  icon.addEventListener('click', () => {
    // Toggle the rotation class for the icon
    icon.classList.toggle('rotate-180');
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
  if (isNaN(value) || value < 0 || value > money) {
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

