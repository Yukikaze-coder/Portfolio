const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

const hoverSign = document.querySelector('.hover-sign');

//const videoList =[video1, video2, video3];
const videoList = [video1, video2, video3].filter(Boolean);

videoList.forEach(function(video) {
    video.addEventListener("mouseover", function() {
        video.play();
        hoverSign.classList.add("active");
    });
    video.addEventListener("mouseout", function() {
        video.pause();
        hoverSign.classList.remove("active");
    });
});

// Sidebar elements //
menu.addEventListener("click", function() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// Social box logic
document.addEventListener('DOMContentLoaded', function() {
    // Contact form logic
    const form = document.getElementById('contactForm');
    if (form) {
        const sendBtn = document.getElementById('sendBtn');
        const inputs = Array.from(form.querySelectorAll('input'));

        function checkInputs() {
            const allFilled = inputs.every(input => input.value.trim() !== '');
            sendBtn.disabled = !allFilled;
        }

        checkInputs();
        inputs.forEach(input => input.addEventListener('input', checkInputs));

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const subject = `Contact from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const mailto = `mailto:morandinilouis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailto;
        });
    }

    // Social box logic
    // Select the social-box container
    const socialBox = document.querySelector('.social-box');
    if (socialBox) {
        // Phone link
        const phoneLink = socialBox.querySelector("a i.bxs-phone")?.parentElement;
        if (phoneLink) {
            phoneLink.addEventListener('click', function(e) {
                const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
                if (isMobile) {
                    window.location.href = 'tel:+819025201603';
                } else {
                    alert('This function is only available on mobile devices.');
                }
                e.preventDefault();
            });
        }

        // GitHub link
        const githubLink = socialBox.querySelector("a i.bxl-github")?.parentElement;
        if (githubLink) {
            githubLink.setAttribute('href', 'https://github.com/Yukikaze-coder');
            githubLink.setAttribute('target', '_blank');
        }

        // LinkedIn link
        const linkedinLink = socialBox.querySelector("a i.bxl-linkedin-square")?.parentElement;
        if (linkedinLink) {
            linkedinLink.setAttribute('href', 'https://www.linkedin.com/in/luigi-morandini-22307b34b');
            linkedinLink.setAttribute('target', '_blank');
        }
    }
});