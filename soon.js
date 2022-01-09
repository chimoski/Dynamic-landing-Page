const countdown = document.querySelector('.countdown');
const launchDate = new Date("Jan 24, 2022 12:00:00").getTime();
// const day = Math.floor(dist / (1000 * 60 * 60 * 24));
//     const hour = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
//     const sec = Math.floor((dist % (1000 * 60)) / 1000);



const intrvl = setInterval(() => {
    const dist = launchDate - new Date().getTime();
    const day = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hour = Math.floor(dist / (1000 * 60 * 60) - day * 24);
    const min = Math.floor(((dist / (1000 * 60 * 60) - day * 24) - hour) * 60);
    const sec = Math.floor(((((dist / (1000 * 60 * 60) - day * 24) - hour) * 60) - min) * 60);




    countdown.innerHTML = `
        <div>${day}<span class = 'span'>Day/s</span></div>
        <div>${hour}<span class = 'span'>Hour/s</span></div>
        <div>${min}<span class = 'span'>Minuite/s</span></div>
        <div>${sec}<span class = 'span'>Second/s</span></div>
        `





    if (dist < 0) {
        clearInterval(intrvl);
        countdown.style.color = ' #17a2b8'
        countdown.innerHTML = 'Launched';
    }
}, 1000);
