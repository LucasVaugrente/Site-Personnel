const contact_block = document.querySelectorAll(".contact-block .social_text");

contact_block.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.children[1].classList.add("revealed");
    })

    element.addEventListener("mouseout", () => {
        element.children[1].classList.remove("revealed");
    })
});