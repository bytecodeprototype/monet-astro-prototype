// Dark Mode Toggle
window.toggleDarkMode = function() {
    document.documentElement.classList.toggle('dark-mode');
    const isNowDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isNowDark);
};
