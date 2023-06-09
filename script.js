let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        navbar1.style.top = 0;
    } else {
        navbar1.style.top = "-60px";
    }

    lastScroll = window.scrollY;
});