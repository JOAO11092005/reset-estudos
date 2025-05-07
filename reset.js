 let pagina = document.body.classList.add('CURSO-DEVQUEST');
        let conteudo = document.querySelector('h1');
        let link = 'https://github.com/JOAO11092005/reset-estudos'
        let css = document.querySelector('head');
        function criaP(valor){
         const p = document.createElement('p')
         const lancar = document.querySelector('body');
         p.innerText = `${valor}`;
         p.classList.add('devquest')
         p.style.backgroundColor = 'blueviolet';
         p.style.width = '700px';
         p.style.margin = '20px'
         p.style.padding = '10px'
         p.style.color = 'white'
         lancar.appendChild(p);
        }

        criaP(`Frontend: HTML, CSS, JavaScript, React.js, Redux, Context API e TypeScript.
        
        Visite o meu repositorio: 
        `)

        function criaLink(conteudoLink){
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
        function criaCss(valor){
        let css = document.createElement('link')
        let conteudo = document.querySelector('head')
        css.rel = 'stylesheet';
        css.href = `${valor}`
        conteudo.appendChild(css);
        }
        criaCss('https://joao11092005.github.io/reset-estudos/reset.css')
        criaLink(link)
