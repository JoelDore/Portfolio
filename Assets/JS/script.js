$(document).ready(() => {

    const btnToTop = $("#scrollToTop")
    const navLinks = $(".nav-link")
    const navbar = $(".navbar")
    const projects = $(".overlay")

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

    // Populate modal with project data on click
    projects.click((event) => {

        // Define data-attr values
        const imageSrc = $(event.target).data("imagesrc")
        const name = $(event.target).data("name")
        const desc = $(event.target).data("desc")
        const techs = $(event.target).data("tech").split(",")
        const summary = $(event.target).data("summary")
        const github = $(event.target).data("github")
        const deployed = $(event.target).data("deployed")

        const projectImage = $("#projectImage")
        const projectWebm = $("#projectWebm")
        const githubLink = $("#projectGithub")
        const deployedLink = $("#projectDeployed")

        // Add source to img/video
        if (imageSrc.slice(-5) === ".webm") {
            projectImage.hide().removeAttr("src")
            projectWebm.show().attr("src", imageSrc)
        } else {
            projectWebm.hide().removeAttr("src")
            projectImage.show().attr("src", imageSrc)
        }

        $("#projectName").text(name)
        $("#projectDescription").text(desc)
        $("#projectSummary").html(summary)

        // Update techs
        $("#projectTechnologies").empty()
        techs.forEach(tech => {
            const button = `<button class="btn btn-secondary m-1" disabled>${tech}</button>`
            $("#projectTechnologies").append(button)
        })

        // Add github/deployed links if relevant
        if (github) {
            githubLink.show().attr("href", github);
        }
        else githubLink.hide();

        if (deployed) {
            deployedLink.show().attr("href", deployed);
        }
        else deployedLink.hide();
    })

})