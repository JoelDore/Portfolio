const navbar = $(".navbar")
const navbarNameText = $("#nav-name")

// Navbar scroll event
$(window).scroll(() => {
    if ($(this).scrollTop() > navbar.height()) {
        // transparent bg, remove name
        navbar.addClass("transparent")
        navbarNameText.text("")
    } else {
        navbar.removeClass("transparent")
        navbarNameText.text("Joel Dore")
    }
})