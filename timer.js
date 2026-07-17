let timerInterval = null;
let totalSeconds = 0;

function updateTimerUI() {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
}

function startTimer() {
    if (timerInterval) return;
    
    const inputMins = parseInt(document.getElementById('timer-input').value);
    
    if (totalSeconds === 0) {
        if (isNaN(inputMins) || inputMins <= 0) return;
        totalSeconds = inputMins * 60;
    }
    
    timerInterval = setInterval(() => {
        totalSeconds--;
        updateTimerUI();
        if (totalSeconds <= 0) {
            stopTimer();
            document.getElementById('timer-display').innerText = "DONE";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    document.getElementById('timer-display').innerText = "00:00";
    document.getElementById('timer-input').value = "";
}