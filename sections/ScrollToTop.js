const scrollToTopButton = document.querySelector(".scroll-to-top-button");

window.addEventListener("scroll", () => {
    let viewHeight = window.innerHeight;
    let scrollHeight = window.scrollY;

    if(scrollHeight > viewHeight / 2)
    {
        scrollToTopButton.classList.add("scroll-to-top-button-show");
        return;
    }
    scrollToTopButton.classList.remove("scroll-to-top-button-show");
})

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

scrollToTopButton.style.cursor = "pointer";