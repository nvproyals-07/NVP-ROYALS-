/* =========================================================
   NVP ROYALS
   script.js
   ========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 800);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

        menuButton.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            menuButton.classList.remove("active");

        });

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   RIPPLE CLICK ANIMATION
========================================================= */

const rippleButtons =
    document.querySelectorAll(".ripple");


rippleButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const circle =
            document.createElement("span");


        const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );


        const rect =
            this.getBoundingClientRect();


        circle.style.width =
            diameter + "px";

        circle.style.height =
            diameter + "px";


        circle.style.left =
            event.clientX -
            rect.left -
            diameter / 2 +
            "px";


        circle.style.top =
            event.clientY -
            rect.top -
            diameter / 2 +
            "px";


        circle.classList.add(
            "ripple-effect"
        );


        this.appendChild(circle);


        setTimeout(function () {

            circle.remove();

        }, 650);

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

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

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.offsetTop -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =========================================================
   BUTTON PRESS EFFECT
========================================================= */

document.querySelectorAll(
    ".royal-button, .social-card, .product-link"
).forEach(function (element) {

    element.addEventListener(
        "mousedown",
        function () {

            this.style.transform =
                "scale(0.96)";

        }
    );


    element.addEventListener(
        "mouseup",
        function () {

            this.style.transform =
                "";

        }
    );


    element.addEventListener(
        "mouseleave",
        function () {

            this.style.transform =
                "";

        }
    );

});


/* =========================================================
   IMAGE PARALLAX EFFECT
========================================================= */

const hero =
    document.querySelector(".hero");

window.addEventListener(
    "mousemove",
    function (event) {

        if (!hero) return;

        if (window.innerWidth < 768) {
            return;
        }


        const x =
            (event.clientX /
                window.innerWidth -
                0.5) *
            10;


        const y =
            (event.clientY /
                window.innerHeight -
                0.5) *
            10;


        const glowOne =
            document.querySelector(
                ".glow-one"
            );


        const glowTwo =
            document.querySelector(
                ".glow-two"
            );


        if (glowOne) {

            glowOne.style.transform =
                `translate(${x}px, ${y}px)`;

        }


        if (glowTwo) {

            glowTwo.style.transform =
                `translate(${-x}px, ${-y}px)`;

        }

    }
);


/* =========================================================
   PREVENT EMPTY SOCIAL LINKS
========================================================= */

document.querySelectorAll(
    '.social-card[href="#"], .footer-social a[href="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

        }
    );

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cNVP ROYALS",
    "color:#ffe58a;font-size:25px;font-weight:bold;"
);

console.log(
    "%cLEGACY OF PURITY",
    "color:#ffffff;font-size:13px;"
);