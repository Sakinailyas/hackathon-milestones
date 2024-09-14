const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skills.style.display === 'none') {
    skills.style.display = 'block';
    toggleButton.textContent = 'Hide Skills'; // Updated text content
  } else {
    skills.style.display = 'none';
    toggleButton.textContent = 'Show Skills'; // Updated text content
  }
});