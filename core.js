let highestZ = 100;
let activeWindow = null;
let startX, startY;

function bringToFront(win) {
    highestZ++;
    win.style.zIndex = highestZ;
}

document.querySelectorAll('.window').forEach(win => {
    const header = win.querySelector('.title-bar');
    header.addEventListener('mousedown', (e) => {
        activeWindow = win;
        startX = e.clientX - win.offsetLeft;
        startY = e.clientY - win.offsetTop;
        bringToFront(win);
    });
});

document.addEventListener('mousemove', (e) => {
    if (!activeWindow) return;
    activeWindow.style.left = (e.clientX - startX) + 'px';
    activeWindow.style.top = (e.clientY - startY) + 'px';
});

document.addEventListener('mouseup', () => { activeWindow = null; });

function toggleApp(appId) {
    const app = document.getElementById(appId);
    if (!app) return;
    if (app.style.display === 'none' || app.style.display === '') {
        app.style.display = 'flex';
        bringToFront(app);
    } else {
        bringToFront(app);
    }
}

function updateTaskbarClock() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('tb-time').innerText = `${hours}:${minutes} ${ampm}`;
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    document.getElementById('tb-date').innerText = `${year}/${month}/${day}`;
}
setInterval(updateTaskbarClock, 1000);
updateTaskbarClock();

function exitOS() {
    window.close();
}