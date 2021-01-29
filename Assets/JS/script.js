$(document).ready(() => {

    const btnToTop = $("#scrollToTop")
    const navLinks = $(".nav-link")

    $(window).scroll(() => {
        // Within top half of intro section
        if ($(this).scrollTop() < window.innerHeight / 2) {
            // hide button 
            btnToTop.addClass("d-none")
            // reset nav links
            navLinks.removeClass("text-light")
        } else {
            // show button
            btnToTop.removeClass("d-none")
            // lighten nav links
            navLinks.addClass("text-light")
        }
    })
})