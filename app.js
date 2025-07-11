// Get all project videos
const projectVideos = document.querySelectorAll('.project-vidbox video');
const hoverSigns = document.querySelectorAll('.hover-sign');

// Function to detect mobile devices
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) || 
           (window.innerWidth <= 768);
}

// Function to setup video behavior
function setupVideoPlayback() {
    // Remove existing event listeners first
    projectVideos.forEach(function(video, index) {
        video.removeEventListener("mouseover", video.playHandler);
        video.removeEventListener("mouseout", video.pauseHandler);
    });

    if (isMobileDevice()) {
        // Mobile: Auto-play all project videos continuously
        projectVideos.forEach(function(video, index) {
            video.autoplay = true;
            video.play();
            // Show hover signs on mobile
            if (hoverSigns[index]) {
                hoverSigns[index].classList.add("active");
            }
        });
    } else {
        // Desktop: Keep hover functionality
        projectVideos.forEach(function(video, index) {
            // Store handlers for later removal
            video.playHandler = function() {
                video.play();
                if (hoverSigns[index]) {
                    hoverSigns[index].classList.add("active");
                }
            };
            video.pauseHandler = function() {
                video.pause();
                if (hoverSigns[index]) {
                    hoverSigns[index].classList.remove("active");
                }
            };
            
            video.addEventListener("mouseover", video.playHandler);
            video.addEventListener("mouseout", video.pauseHandler);
        });
    }
}

// Initialize video playback
setupVideoPlayback();

// Handle window resize to switch between mobile and desktop behavior
window.addEventListener('resize', function() {
    setupVideoPlayback();
});

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
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