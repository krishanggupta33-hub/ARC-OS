const calcScreen = document.getElementById('calc-screen');

function appendCalc(val) {
    calcScreen.value += val;
}

function clearCalc() {
    calcScreen.value = '';
}

function calculate() {
    try {
        if(calcScreen.value.trim() === '') return;
        const result = new Function('return ' + calcScreen.value)();
        calcScreen.value = result;
    } catch (e) {
        calcScreen.value = 'SYS_ERR';
        setTimeout(clearCalc, 1500);
    }
}