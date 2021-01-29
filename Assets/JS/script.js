$(document).ready(() => {

    const btnToTop = $("#scrollToTop")
    const navLinks = $(".nav-link")
    const navbar = $(".navbar")

    $(window).scroll(() => {
        // Within top half of intro section
        if ($(this).scrollTop() < window.innerHeight / 2) {
            // hide button 
            btnToTop.addClass("d-none")
            // reset navbar
            navLinks.removeClass("text-light")
            navbar.removeClass("navbar-dark")
        } else {
            // show button
            btnToTop.removeClass("d-none")
            // lighten navbar
            navLinks.addClass("text-light")
            navbar.addClass("navbar-dark")
        }
    })
})