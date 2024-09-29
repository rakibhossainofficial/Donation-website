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
  