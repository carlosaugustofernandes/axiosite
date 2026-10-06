document.addEventListener("DOMContentLoaaded", () => {
    const links = document.querySelector('.nav-btn, .titulo-cta');

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});
