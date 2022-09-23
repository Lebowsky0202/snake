window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const snake = document.createElement('div');
    const section = document.querySelector('.section');
    
    snake.classList.add('snake');
    section.append(snake);

    function renderSnake(){
        
    }

    function moveSnake(code){
        let timerIDX,
            timerIDY,
            posX = 0,
            posY = 0;

        switch (code) {
            case 'KeyD':
                timerIDX = setTimeout(function tick(){

                }, 500);
                break;
            case 'KeyS':
                timerIDY = setTimeout(function tick(){

                }, 500);
                break;
        }
    }


    document.addEventListener('keydown', (e) => {
        moveSnake(e.code);
    })
});