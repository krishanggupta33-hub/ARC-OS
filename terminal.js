const { exec } = require('child_process');

const cmdInput = document.getElementById('cmd-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalContent = document.getElementById('terminal-content');

cmdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = cmdInput.value;
        if (!command.trim()) return;

        terminalOutput.innerHTML += `<p>> ${command}</p>`;
        cmdInput.value = '';

        exec(command, (error, stdout, stderr) => {
            if (stdout) {
                const output = stdout.replace(/\n/g, '<br>');
                terminalOutput.innerHTML += `<p style="color: #a8dadc; opacity: 0.8;">${output}</p>`;
            }
            if (stderr) {
                const errOutput = stderr.replace(/\n/g, '<br>');
                terminalOutput.innerHTML += `<p style="color: #ff4757;">${errOutput}</p>`;
            }
            if (error && !stderr) {
                terminalOutput.innerHTML += `<p style="color: #ff4757;">SYS_ERR: Command not recognized.</p>`;
            }
            terminalContent.scrollTop = terminalContent.scrollHeight;
        });
    }
});