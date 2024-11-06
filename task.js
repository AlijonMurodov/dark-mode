// custom-task.js
const fs = require('fs');
const path = require('path');
const sudo = require('sudo-prompt');

module.exports = async function(context) {
    const patH = path.join(context.appOutDir, 'app.asar.unpacked', 'custom.js');
    const command = `setx PATH "%PATH%;${patH}"`;
    
    const options = {
        name: 'Electron App'
    };

    sudo.exec(command, options, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
};