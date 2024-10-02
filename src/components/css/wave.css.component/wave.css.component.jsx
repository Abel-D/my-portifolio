import {useState } from 'react';
import './wave.css.component.css';

function WaveCssComponent({content}) {

    return (
        <div className="wrapper">
        <div className="wave">
            <span>{content}</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> 
        </div>
    )
}
export default WaveCssComponent;