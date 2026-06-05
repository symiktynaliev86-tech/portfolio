const terminalBtn = document.getElementById("terminalBtn");
const terminal = document.getElementById("terminal");

terminalBtn.addEventListener("click", () => {
    terminal.classList.toggle("hidden");
});

const themeBtn = document.getElementById("themeToggle");

if (document.documentElement.classList.contains("light")) {
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.documentElement.classList.toggle("light");

    const isLight =
        document.documentElement.classList.contains("light");

    themeBtn.textContent =
        isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );
});

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});

},{
threshold:0.15
});

document
.querySelectorAll(".reveal")
.forEach(el => observer.observe(el));