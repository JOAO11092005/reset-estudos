function criaRodape() {
    let rodape = document.createElement('footer');
    let conteudo = document.querySelector('body');
    rodape.classList.add('rodape');
    conteudo.appendChild(rodape);
}
criaRodape()


let user = document.querySelector('title');
user.innerText += ' Gandalf'

let pagina = document.body.classList.add('CURSO-DEVQUEST');
let conteudo = document.querySelector('h1');
conteudo.style.textAlign = 'center';
conteudo.style.color = 'white';
conteudo.style.backgroundColor = 'blueviolet'
let link = 'https://github.com/JOAO11092005/reset-estudos'
let css = document.querySelector('head');
function criaP(valor) {
    const p = document.createElement('p')
    const lancar = document.querySelector('.rodape');
    p.innerText = `${valor}`;
    p.innerHTML += `<img src="https://i.pinimg.com/280x280_RS/dc/42/98/dc4298a717f0dc1ca125626136a3bbe9.jpg" class="gemeos"></img>`;
    p.classList.add('devquest')
    p.style.backgroundColor = 'blueviolet';
    p.style.width = '700px';
    p.style.margin = '20px'
    p.style.padding = '10px'
    p.style.fontSize = '26px'
    p.style.color = 'white'
    lancar.appendChild(p);
}

criaP(`Frontend: HTML, CSS, JavaScript, React.js, Redux, Context API e TypeScript.
         
        Visite o meu repositorio: 
        `)

function criaLink(conteudoLink) {
    const link = document.createElement('a');
    const local = document.querySelector('.devquest')
    link.href = conteudoLink;
    link.target = 'blank'
    link.classList.add("link-está-definido")
    link.innerText = "Acesse o meu reposito aqui !!"
    link.style.fontSize = '20px'
    link.style.cursor = 'pointer'
    local.appendChild(link)
}
function criaCss(valor) {
    let css = document.createElement('link')
    let conteudo = document.querySelector('head')
    css.rel = 'stylesheet';
    css.href = `${valor}`
    conteudo.appendChild(css);
}
function imagemSite() {
    const link = document.createElement('link')
    const conteudoHead = document.querySelector('head');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon'
    link.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjZPEIhxr5ubMJppJ6vhVjsy7f3Av9bF2YA&s';
    conteudoHead.appendChild(link)
}
imagemSite()
criaCss('https://joao11092005.github.io/reset-estudos/reset.css')
criaLink(link)
imagemSite();
criaCss('https://joao11092005.github.io/reset-estudos/reset.css');

// MOVA ESSA LINHA PARA DEPOIS DA DEFINIÇÃO DA FUNÇÃO
// criaLink(link); <<-- REMOVE DAQUI

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

// ✅ CHAME AQUI, AGORA FUNCIONA
criaLink(link);

