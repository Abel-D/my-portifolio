import {useState,useEffect} from 'react';
import './Rain.css.component.css';

export const RainCssComponent =()=> {
    // number of drops created.
    let nbDrop = 858; 

    // function to generate drops
    const createRain=()=> {

        for(var i=1;i<nbDrop;i++) {
            var dropLeft = randRange(0,1600);
            var dropTop = randRange(-1000,1400);
        
            $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
            $('#drop'+i).css('left',dropLeft);
            $('#drop'+i).css('top',dropTop);
        }
    
    }

    useEffect({
        createRain
    })
    
    // function to generate a random number range.
    function randRange( minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    
    return (
        <div className='bg'>
            <div className='body'>
                <section className="rain"></section>
            </div>
        </div>
    )
}
export default RainCssComponent;