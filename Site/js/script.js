document.addEventListener('scroll', function(){
    const header = document.querySelector('header').style;
    const scrollPos = window.pageYOffset;

    if(scrollPos > 100){
        header.backgroundColor = 'var(--cinza-escuro)';
        header.boxShadow = '0 0 36px -18px var(--cinza-claro)'
        header.padding = '1rem 10vw';
    }

    if(scrollPos < 100){
        header.backgroundColor = '';
        header.boxShadow = '';
        header.padding = '3rem 10vw';
    }

    const retornar = document.getElementById('retornar').style;

    if(scrollPos > 300){
        retornar.display = 'flex';
    }

    if(scrollPos < 300){
        retornar.display = '';
    }
})