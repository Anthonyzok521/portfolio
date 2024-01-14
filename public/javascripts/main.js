const btn_open = document.querySelector('#btn-open');
const btn_close = document.querySelector('#btn-close');
const panel = document.querySelector('.panel');
const boxs = document.querySelectorAll('.box');
const header = document.querySelector('.panel header');
const container = document.querySelector('.container');
const container_box = document.querySelector('.container-box');
const container_perfil = document.querySelector('.container-perfil');
const title_perfil = document.querySelector('.title-perfil');
const aside = document.querySelector('aside');

if(window.innerWidth > 768){
    aside.style.display = 'none';
}

btn_open.addEventListener('click', () => {
    panel.style.left = '0%';
    container.classList.toggle('anim');
    title_perfil.classList.toggle('anim');
    if(window.innerWidth > 768){        
        aside.classList.toggle('scale-in-hor-right');
        aside.style.display = 'flex';
    }
    else{
        aside.classList.toggle('slide-top');
    }
});

btn_close.addEventListener('click', () => {
    panel.style.left = '100%';
    container.classList.toggle('anim');
    title_perfil.classList.toggle('anim');
    if(window.innerWidth > 768){
        aside.classList.toggle('scale-in-hor-right');
        aside.style.display = 'none';
    }
    else{
        aside.classList.toggle('slide-top');
    }
});

panel.addEventListener('scroll', () => {
    if(panel.scrollTop > 100) {

        boxs.forEach((box) => {
            box.classList.add('no-anim');
        })
        
        header.classList.add('min-height');
        header.classList.remove('normal-height');
        header.classList.remove('no-animH');
        header.classList.add('animH');

        container.classList.remove('anim');
        container.classList.add('flex');
        container_box.classList.add('sticky');     
        container_perfil.classList.add('sticky');   
    }
    else if(panel.scrollTop == 0) {

        boxs.forEach((box) => {
            box.classList.remove('no-anim');
        })
        
        header.classList.remove('min-height');
        header.classList.add('normal-height');
        header.classList.add('no-animH');
        header.classList.remove('animH');

        container.classList.add('anim');
        container.classList.remove('flex');
        container_box.classList.remove('sticky');
        container_perfil.classList.remove('sticky');
    }
})
