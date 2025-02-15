document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 300);
    });
});

function downloadResume() {
    window.print();
}
