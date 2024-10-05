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

//propper validation function,error!
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

// History tab  function 
function btnToggle(mainBtn, shiftBtn) {
  document.getElementById(shiftBtn).classList.remove("btn-main")
  document.getElementById(shiftBtn).classList.add("btn-secondery")
  document.getElementById(mainBtn).classList.add("btn-main")
  document.getElementById(mainBtn).classList.remove("btn-secondery")
  
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

  const creatEl = document.createElement("div");
  creatEl.innerHTML = `
    <h2 class="title "> ${inputValue} Taka is  ${document.getElementById("noakhali-title").innerText} </h2>
    <p class="description"> Date : ${new Date().toLocaleDateString()}</p>
  `
  document.getElementById("history-container").append(creatEl);
});

//propper validation
document.getElementById("noakhali-input").addEventListener("input", () => {
  errorAlert("noakhali-input", "noakhali-error", "noakhali-btn");
});


// History button toggle
document.getElementById("history-tab").addEventListener("click", () => {
  btnToggle("history-tab","donation-tab")
  document.getElementById("history-container").classList.remove("hidden")
  document.getElementById("donation-container").classList.add("hidden")
})

document.getElementById("donation-tab").addEventListener("click", () => {
  btnToggle("donation-tab","history-tab")
  document.getElementById("history-container").classList.add("hidden")
  document.getElementById("donation-container").classList.remove("hidden")
})

