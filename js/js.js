let span = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 1000) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
    if (this.scrollY >= 1900) {
        span.classList.add("color");
    } else {
        span.classList.remove("color");
    }
    if (this.scrollY >= 2500) {
        span.classList.remove("color");
    }
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};




