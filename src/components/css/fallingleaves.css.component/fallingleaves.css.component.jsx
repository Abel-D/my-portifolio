import {useState } from 'react';
import './fallingleaves.css.component.css';

function FallingLeavesCssComponent({content}) {

    return (
        <div className='container w-screen h-full'>
            <div style={{width: '100%',height:'100%'}}>
                <span> {content}</span>
            </div>             
        <section className='leaves '>
            <div className="set">
                {/* <div><span>Work-Life balance</span><img src="src/assets/img/leaf1.png" alt=""/></div> */}
                <div><img src="src/assets/img/leaf2.png" alt=""/></div>
                <div><img src="src/assets/img/leaf3.png" alt=""/></div>
                <div><img src="src/assets/img/leaf4.png" alt=""/></div>
                <div><img src="src/assets/img/leaf1.png" alt=""/></div>
                <div><img src="src/assets/img/leaf4.png" alt=""/></div>
                <div><img src="src/assets/img/leaf2.png" alt=""/></div>
                <div><img src="src/assets/img/leaf3.png" alt=""/></div>
            </div>
            <div className="set set2">
                <div><img src="src/assets/img/leaf1.png" alt=""/></div>
                <div><img src="src/assets/img/leaf2.png" alt=""/></div>
                <div>Time management<img src="src/assets/img/leaf3.png" alt=""/></div>
                <div><img src="src/assets/img/leaf4.png" alt=""/></div>
                <div><img src="src/assets/img/leaf1.png" alt=""/></div>
                <div><img src="src/assets/img/leaf4.png" alt=""/></div>
                <div><img src="src/assets/img/leaf2.png" alt=""/></div>
                <div><img src="src/assets/img/leaf3.png" alt=""/></div>
            </div>
            <div className="set set3">
                <div>Purpose<img src="src/assets/img/leaf1.png" alt=""/></div>
                <div><img src="src/assets/img/leaf2.png" alt=""/></div>
                <div><img src="src/assets/img/leaf3.png" alt=""/></div>
                <div><img src="src/assets/img/leaf4.png" alt=""/></div>
                <div><img src="src/assets/img/leaf1.png" alt=""/></div>
                <div><img src="src/assets/img/leaf4.png" alt=""/></div>
                <div><img src="src/assets/img/leaf2.png" alt=""/></div>
                <div>Responsibility<img src="src/assets/img/leaf3.png" alt=""/></div>
            </div>
        </section>
    </div>
    )
}
export default FallingLeavesCssComponent;