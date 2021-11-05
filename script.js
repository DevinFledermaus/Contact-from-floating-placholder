function activate() {
    let hidden = document.querySelectorAll("#hidden");
    hidden.forEach((p) => {
        p.style.display = "block";
    });
    let button = document.querySelectorAll(".btn");
    button.forEach((btn) => {
        btn.style.display = "none";
    });
}