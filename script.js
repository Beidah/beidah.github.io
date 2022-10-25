const setTheme = (mode) => {
  document.getElementById('theme-style').href = `${mode}.css`;
  localStorage.setItem('theme', mode);
}

let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('default');
} else {
  setTheme(theme);
}

for (let i = 0; i < themeDots.length; i++) {
  const dot = themeDots[i];
  dot.addEventListener('click', function() {
    let mode = this.dataset.mode;
    setTheme(mode);
  })
}