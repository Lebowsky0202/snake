window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const snake = document.querySelector('.snake'),
          section = document.querySelector('.section');

    console.log(section.clientWidth);
    function moveSnake(){
        document.addEventListener('keydown', (e) => {
            let i = 0;
                // timerIdRight,
                // timerIdDown;

            // if(e.code === 'KeyD'){
            //     timerIdRight = setTimeout(function tick(){
            //         if(i > (section.clientWidth - 100)){
            //             clearTimeout(timerIdRight);
            //         }else{
            //             i += 50;
            //             snake.style.left = i + 'px';
            //             timerIdRight = setTimeout(tick, 500);
            //         }
            //     });
            // }else if (e.code == 'KeyS'){
            //     clearTimeout(timerIdRight);
            //     timerIdDown = setTimeout(function tick(){
            //         if(i > (section.clientWidth)){
            //             clearTimeout(timerIdDown);
            //         }else{
            //             i += 50;
            //             snake.style.top = i + 'px';
            //             timerIdDown = setTimeout(tick, 500);
            //         }
            //     });
            // }
            switch (e.code) {
                case 'KeyD':
                    let timerIdRight = setTimeout(function tick(){
                            if(i > (section.clientWidth - 100) || e.code === 'KeyS'){
                                clearTimeout(timerIdRight);
                            }else{
                                i += 50;
                                snake.style.left = i + 'px';
                                timerIdRight = setTimeout(tick, 500);
                            }
                        });
                    break;
                  case 'KeyS':
                        let timerIdDown = setTimeout(function tick(){
                            if(i > (section.clientHeight -100)){
                                clearTimeout(timerIdDown);
                            }else{
                                i += 50;
                                snake.style.top = i + 'px';
                                timerIdDown = setTimeout(tick, 500);
                            }
                        });
            }
        });
    }
    moveSnake()

});