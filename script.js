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



// utilities function 
function getInputNumById(id) {
  return parseFloat(document.getElementById(id).value); //for convert string to number
}
function getElementNumById(id) {
  return parseFloat(document.getElementById(id).innerText); //for convert string to number
}

//propper validation function
function errorAlert(id, errorText, btn) {
  const value = getInputNumById(id)
  if (isNaN(value) || value < 0 || value > money) {
      document.getElementById(errorText).classList.remove("hidden")
      document.getElementById(btn).setAttribute("disabled" , true)
  } else {
    document.getElementById(errorText).classList.add("hidden")
    document.getElementById(btn).removeAttribute("disabled")
  };
};

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
  errorAlert("noakhali-input", "noakhali-error", "noakhali-btn");
});

