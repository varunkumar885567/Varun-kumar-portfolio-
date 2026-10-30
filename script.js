// ==========================================
// 3D PHOTO MOUSE EFFECT
// ==========================================

const photoPlatform = document.querySelector(".photo-platform");

if (photoPlatform) {

    document.addEventListener("mousemove", function (event) {

        const x =
            (window.innerWidth / 2 - event.clientX) / 45;

        const y =
            (window.innerHeight / 2 - event.clientY) / 45;

        photoPlatform.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });


    document.addEventListener("mouseleave", function () {

        photoPlatform.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

}


// ==========================================
// PHOTO CHECK
// ==========================================

const profilePhoto =
    document.getElementById("profilePhoto");

const photoError =
    document.getElementById("photoError");


if (profilePhoto) {

    profilePhoto.addEventListener("error", function () {

        profilePhoto.style.display = "none";

        if (photoError) {
            photoError.style.display = "flex";
        }

    });

}


// ==========================================
// NAVBAR ACTIVE SECTION
// ==========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// SMOOTH NAVIGATION
// ==========================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});