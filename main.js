setInterval(function () {
    var img = document.querySelector('.profile-img');
    var src = img.getAttribute('src');
    if (src === 'profile1.png') {
        img.classList.add('fade-out');
        setTimeout(function () {
            img.setAttribute('src', 'profile2.png');
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
        }, 500);
    } else {
        img.classList.add('fade-out');
        setTimeout(function () {
            img.setAttribute('src', 'profile1.png');
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
        }, 500);
    }
}, 5000);

// Add to main.js
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var img = document.querySelector('.profile-img');
    var newSize = 100 - scrollPosition / 10; // Adjust the division factor to control the rate of size change

    // Set minimum and maximum size limits
    newSize = Math.max(60, newSize); // Minimum size
    newSize = Math.min(100, newSize); // Maximum size

    img.style.width = newSize + 'px';
    img.style.height = newSize + 'px';
});
