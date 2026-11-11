
// Project P15 - Website JavaScript

// Select all elements with reveal animation
const revealElements = document.querySelectorAll(".reveal");

// Create intersection observer
const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Stop observing once animation happens
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

// Observe every reveal element
revealElements.forEach((element) => {
    observer.observe(element);
});


// Smooth navigation scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Console confirmation
console.log(
    "Project P15 Website Loaded Successfully!"
);
