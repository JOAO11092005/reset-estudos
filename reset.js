 // Intercepta console.log e mostra no HTML
        (function interceptaConsoleLog() {
            const consoleDiv = document.createElement('div');
            consoleDiv.id = 'console-log';
            consoleDiv.style.backgroundColor = 'black';
            consoleDiv.style.color = 'blueviolet';
            consoleDiv.style.padding = '10px';
            consoleDiv.style.fontFamily = 'monospace';
            consoleDiv.style.whiteSpace = 'pre-wrap';
            consoleDiv.style.maxHeight = '300px';
            consoleDiv.style.overflowY = 'auto';
            consoleDiv.style.marginTop = '30px';
            consoleDiv.style.border = '2px solid blueviolet';
            document.body.appendChild(consoleDiv);

            const originalLog = console.log;

            console.log = function (...args) {
                const message = args.map(arg =>
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' ');

                const line = document.createElement('div');
                line.textContent = message;
                consoleDiv.appendChild(line);

                originalLog.apply(console, args); // ainda exibe no console dev
            };
        })();
