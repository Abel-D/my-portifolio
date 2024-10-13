import React,{ useState,useEffect } from 'react';
import './landing-header.css';
import { Button } from 'primereact/button';
import { list } from '@vercel/blob';

function LandingHeader(){
  
    useEffect(() => {

      }, []);
    return (
        <div className='head w-full mt-0'>
           <div className="grid grid-nogutter flex justify-content-center align-items-center w-full h-full lg:pt-4 sm:pt-1 sm:py-1 text-800">
                <div className="left-div col-12 md:col-8 h-full text-center md:text-left flex flex-column align-items-center lg:p-6 sm:p-1 ">
                        
                    <section className="flex flex-row justify-space-between align-items-start w-full h-full mt-0 ">
                         
                        <div className='flex flex-column justify-content-center w-full h-15rem'>
                            <>
                                <h2 className='firsttxt grower text-primary font-bold'>Hi there, </h2>
                                <div className=" text-2xl text-primary font-bold "><h2>I am <span className='txt text-6xl font-bold my-3'>Abel Debebe</span></h2></div>
                              </> 
                                              
                        </div>            
                        <div className="cont-video embed w-full h-full border-round-3xl">
                            <iframe src="https://player.vimeo.com/video/1016808950?background=1&amp;muted=1&amp;badge=0&amp;loop=1&amp;autopause=0&amp;controls=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="smoke" className='w-full h-full border-round-3xl'>
                            </iframe>
                        </div>
                   </section> 
                   
                   <div className='btns flex flex-column justify-content-center w-full m-1 mr-0 lg:px-3'> 
                        <section className="flex flex-row justify-space-between justify-content-center w-full h-10rem">
                                <h2 className="thirdtxt mt-0 mb-3 text-300 text-xl line-height-3">Licenced Full-stack Engineer - React, Angular, Next, .Net, Python, Django</h2>
                                    <a href="https://github.com/Abel-D" target="_blank" rel="noopener noreferrer" className="mr-1 ml-1 font-bold">
                                    <img alt="github-logo" src="/assets/icons8-github-ios-17-filled-32.png" className="h-2rem bg-green-400 border-round-3xl"></img>
                                    </a>
                                    <a href="https://linkedin.com/in/abel-debebe-m9a9r9s" target="_blank" rel="noopener noreferrer" className="ml-1 mr-1 font-bold">
                                    <img alt="linkedin-logo" src="/assets/linkedin-logo.png" className="h-2rem bg-blue-600 border-round-3xl"></img>
                                    </a>
                                
                           
                        </section> 
                    </div>                 
                </div>
                <div className="right-div col-12 md:col-4 flex flex-row overflow-hidden md:h-full mb-0 border-round-2xl">
                   <img src="assets/img/nobg_profile_1.png" alt="Abel D" className="ml-6 block md:h-full"/>
                </div>
                
            </div>  
            </div>
    )
}
export default LandingHeader;