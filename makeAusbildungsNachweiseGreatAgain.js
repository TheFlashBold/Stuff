const clipboardy = require('clipboardy');

process.stdin.resume();

process.stdin.on('data', (data) => {
    const entries = String(data).split(";");
    const projects = {};

    for (let entry of entries) {
        entry = entry.trim();
        entry = entry.replace(/\[.*?\]/, "").trim();

        const colonIndex = entry.indexOf(":");
        if (colonIndex !== -1) {
            const project = entry.substr(0, colonIndex).trim();
            const message = entry.substr(colonIndex + 1).trim();
            if (!projects[project]) {
                projects[project] = [];
            }
            projects[project].push(message);
        }
    }

    let output = "";

    for (let [project, messages] of Object.entries(projects)) {
        output += project + ": ";

        for (let i = 0; i < messages.length; i++) {
            const message = messages[i];

            if (i === messages.length - 1) {
                output += message + " ";
            } else if (i === messages.length - 2) {
                output += message.substr(0, message.length - 1) + " und ";
            } else {
                output += message.substr(0, message.length - 1) + ", ";
            }
        }
    }

    console.log("\n\n\n\n" + output);
    clipboardy.writeSync(output);
});
