import Skills from './skills.jsx'
import React from 'react';
import ReactDOM  from 'react-dom';
function Run(){

    let count = 0    
    const run = () => {
        const texts = [
            document.createTextNode('👋​¡Hola! Soy Anthony Carrillo, un fascinado programador y músico con gran carisma y destrezas para llevar el control de cualquier situación.'),
            document.createTextNode('👨‍💻​Al ser un fascinado en la programación, he aprendido un montón de lenguajes para el Desarrollo Web, Desarrollo de Software, Desarrollo de Videojuegos, Desarrollo de Apps y Base de Datos. Pero aquí te muestro el porcentaje de aprendizaje que tengo en cada uno de ellos:​'),
            document.createTextNode(`
 _____________
< Eso es todo >
 -------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||

                `)
        ]

        const commands = ['whoami', 'skills', 'cowsay Eso es todo','']
        
        const command = document.querySelector('.blink')
        command.classList.remove('blink')

        const run = document.querySelector('.run')

        if(count < texts.length){

        
        const code = document.querySelector('.code')

        const spanHost = document.createElement('SPAN');
        spanHost.classList.add('host')
        spanHost.textContent = 'ac@games'

        const spanPath = document.createElement('SPAN');
        spanPath.classList.add('path')
        spanPath.textContent = ':~$ '

        const spanCommand = document.createElement('SPAN');
        spanCommand.classList.add('blink')
        spanCommand.classList.add('command')

        spanCommand.textContent = commands[count+1]

        const br1 = document.createElement('BR');
        const br2 = document.createElement('BR');
        const br3 = document.createElement('BR');

        const span = document.createElement('SPAN');
        
        span.appendChild(br1)
        span.appendChild(br2)
        span.appendChild(spanHost)
        span.appendChild(spanPath)
        span.appendChild(spanCommand)  
        span.appendChild(br3)

        
        //<span class="host">ac@games</span><span class="path">:~$</span> <span class="command">whoami</span><br>
        
            if(!commands[count].startsWith('cowsay')){                                                  
                code.appendChild(texts[count])
            }  

            if(commands[count] == 'skills'){  
                const skills_progress = document.createElement('div');
                //skills_progress.classList.add('skils-progress'); 
                code.appendChild(skills_progress)                      
                ReactDOM.render(<Skills/>, skills_progress);
            }  
            
            if(commands[count].startsWith('cowsay')){
                const cowsay = document.createElement('pre');
                cowsay.appendChild(texts[count])
                code.appendChild(cowsay)  
                code.style.scrollBehavior = 'smooth';
                code.scrollTop = code.scrollHeight 
            }   
            
            code.appendChild(span)
            count++;                 

            if(count >= texts.length){
                run.style.display = 'none'
            }
        }else{
            
            run.style.display = 'none'
        }            
    }

    return (
        <button className="run" onClick={run}>Ejecutar</button>        
    )
}

export default Run