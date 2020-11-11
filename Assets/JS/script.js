const navbar = $(".navbar")

// Change navbar bg to transparent when not at top of page
$(window).scroll(() => {
    if ($(this).scrollTop() > navbar.height()) {
        navbar.addClass("transparent")
    } else {
        navbar.removeClass("transparent")
    }
})