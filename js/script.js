// Scroll animation
let aboutUsText = document.querySelectorAll(".about-us-text");
let scrollAnimation = (item) => {
    for (let i = 0; i < item.length; ++i) {
        if (document.documentElement.scrollTop > item[i].offsetTop - innerHeight / 2) {
            item[i].style.opacity = 1;
        }
    }
}

window.onscroll = () => {
    scrollAnimation(aboutUsText);
}

