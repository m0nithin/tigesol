const eggs = document.getElementsByClassName('egg');
const eggs_small = document.getElementsByClassName('egg_s');
for (let i = 0; i < eggs.length; i++) {
    eggs[i].addEventListener('click', function(event) {
        const id = eggs[i].getAttribute('data-id');
        const target = document.getElementById(id);
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
}
for (let i = 0; i < eggs_small.length; i++) {
    eggs_small[i].addEventListener('click', function(event) {
        const id = eggs[i].getAttribute('data-id');
        const target = document.getElementById(id);
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
}

$('.accordian').click(function() {
    $(this).find('.accordian_body').toggleClass('active');
    $(this).find('.plusminus').toggleClass('active');
    $(this).find('.accordian_header').toggleClass('active');
    $(this).find('.plusbox').toggleClass('active');
});

document.querySelector('.avatar__avatar img').addEventListener('error', () => {
    setRandomAvatar();
});

function setRandomAvatar() {
    const idx = getRandomNumber(0, 4999);
    const imagePath = `/assets/avatars/${idx}.jpeg`;

    document.querySelector('.avatar__avatar img').src = imagePath;
}

let GENERATING = false;

function generateAvatar() {
    if (GENERATING) return;
    GENERATING = true;

    document
        .querySelector('.avatar__loading')
        .classList.add('avatar__loading_active');
    setTimeout(setRandomAvatar, 700);
    setTimeout(() => {
        document
            .querySelector('.avatar__loading')
            .classList.remove('avatar__loading_active');

        GENERATING = false;
    }, 2200);
}

function downloadAvatar() {
    const url = document.querySelector('.avatar__avatar img').src;

    downloadURI(url, 'peng-avatar.jpeg');
}

function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    link.click();
    setTimeout(() => {
        link.remove();
    }, 0);
}

function copy() {
    window.navigator.clipboard.writeText($('#numbers').html().trim());
}

function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}