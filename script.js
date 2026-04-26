document.getElementById('coffeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.innerHTML = "Sending...";
    status.style.color = "#c7a17a";

    setTimeout(() => {
        status.innerHTML = "Success! We will contact you shortly.";
        status.style.color = "#4CAF50";
        this.reset();
    }, 2000);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.padding = "20px 8%";
        header.style.boxShadow = "none";
    }
});
