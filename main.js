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
