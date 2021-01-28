$(document).ready(() => {

    const btnToTop = $("#scrollToTop")

    $(window).scroll(() => {
        if ($(this).scrollTop() < window.innerHeight / 2) {
            btnToTop.addClass("d-none")
        } else {
            btnToTop.removeClass("d-none")
        }
    })
})