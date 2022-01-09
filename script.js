//dom selectors

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    names = document.getElementById('name'),
    focus = document.getElementById('focus');


// display time

function showTime() {
    let today = new Date(),
        hours = today.getHours(),
        mins = today.getMinutes(),
        secs = today.getSeconds();

    // set am/pm
    const amPm = hours >= 12 ? 'PM' : 'AM';
    // 12 hours format 
    hours = hours % 12 || 12;

    // output time
    time.innerHTML = `${hours}<span>:</span>${addZeros(mins)}<span>:</span>${addZeros(secs)} ${amPm}`;

    // add zeros
    function addZeros(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n
    }

    setTimeout(showTime, 1000);
}

// set background and greetings 

function setBgAndGreeting() {
    let today = new Date(),
        hours = today.getHours();

    if (hours < 13) {
        // morning
        document.body.style.backgroundImage = ' url("./morning.png")';
        greeting.textContent = 'Good Morning';
        document.body.style.color = '#fff'
        time.style.color = '#000'
        names.style.color = '#000'
    } else if (hours < 19) {
        // afternoon
        document.body.style.backgroundImage = ' url("./afternoon.jpg")'
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = '#fff'
    } else {
        // evening 
        document.body.style.background = ' url("evening.jpg")no-repeat center center/cover'
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#fff'
        time.style.color = '#000';
    }
}

// get name
function getName() {
    if (localStorage.getItem('name') === null) {
        names.textContent = 'Ibukun';
    } else {
        names.textContent = localStorage.getItem('name');
    }
}
//set name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerHTML);
            names.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);

    }
}

//set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);

    }
}
// get focus

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = 'Enter Focus';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

names.addEventListener('keypress', setName);
names.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// call
setBgAndGreeting();
showTime()
getFocus();
getName();
