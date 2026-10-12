document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       CURRENT YEAR
    ================================================== */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }



    /* ==================================================
       TYPING EFFECT
    ================================================== */

    const typingElement =
        document.getElementById("typingText");


    if (typingElement) {

        const words = [

            "Web Developer",

            "PHP Developer",

            "Laravel Developer",

            "React Developer"

        ];


        let wordIndex = 0;

        let charIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentWord =
                words[wordIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1700
                    );

                    return;

                }

            }

            else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1)
                        % words.length;

                }

            }


            setTimeout(

                typeEffect,

                deleting
                    ? 55
                    : 95

            );

        }


        typeEffect();

    }



    /* ==================================================
       NAVBAR SCROLL
    ================================================== */

    const navbar =
        document.querySelector(
            ".custom-navbar"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 30
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            }

            else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }
    );



    /* ==================================================
       ACTIVE NAVIGATION
    ================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveLink() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 130;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    )
                    ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();



    /* ==================================================
       BACK TO TOP
    ================================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 500
            ) {

                backToTop.classList.add(
                    "show"
                );

            }

            else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



    /* ==================================================
       DARK / LIGHT MODE
    ================================================== */

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    const savedTheme =
        localStorage.getItem(
            "resume-theme"
        );


    if (
        savedTheme === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );


        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    }



    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(

                "resume-theme",

                isLight
                    ? "light"
                    : "dark"

            );


            themeToggle.innerHTML =

                isLight

                    ? '<i class="bi bi-sun-fill"></i>'

                    : '<i class="bi bi-moon-stars-fill"></i>';

        }
    );



    /* ==================================================
       MOBILE MENU
    ================================================== */

    const mobileNavLinks =
        document.querySelectorAll(
            "#mainNavbar .nav-link"
        );


    const mainNavbar =
        document.getElementById(
            "mainNavbar"
        );


    mobileNavLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (

                        window.innerWidth < 992 &&

                        mainNavbar.classList.contains(
                            "show"
                        )

                    ) {

                        const toggler =
                            document.querySelector(
                                ".custom-toggler"
                            );


                        toggler.click();

                    }

                }
            );

        }
    );



    /* ==================================================
       SCROLL REVEAL
    ================================================== */

    const revealElements =
        document.querySelectorAll(
            ".skill-card, .project-card, .timeline-item, .education-card, .info-item"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        function (element) {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity .7s ease, transform .7s ease";


            observer.observe(
                element
            );

        }
    );

});