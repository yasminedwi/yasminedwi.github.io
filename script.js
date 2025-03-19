document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.innerHTML = "☀️"; // Change icon to sun
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.innerHTML = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.innerHTML = "🌙";
        }
    });
});
