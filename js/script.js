const anim = lottie;

anim.loadAnimation({
    container: document.querySelector('#lottie-test'),
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: './animate/first-screen.json'
});