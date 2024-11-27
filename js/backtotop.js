const backToTopButton = document.getElementById('backToTop');

// ĐIỀU KIỆN XUẤT HIỆN
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
