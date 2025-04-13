// JavaScript functionality can be added here in the future.
const toggleCheckbox = document.getElementById('toggle-checkbox');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
    document.body.classList.add('dark-mode');
    toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
