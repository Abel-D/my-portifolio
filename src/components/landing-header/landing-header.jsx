import React,{ useState,useEffect } from 'react';
import './landing-header.css';
import { Button } from 'primereact/button';
import { list } from '@vercel/blob';

function LandingHeader({content}){
    const [blobs,setBlobs] = useState(null) 
    const {url} = "https://l3smwarprhepcevk.public.blob.vercel-storage.com/smoke.mp4";

    const validateResponse=(response)=> {
        if(!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    useEffect(() => {
        async function fetchData() {
            const requestOptions ={method: 'GET'}
            const data = await fetch({url},requestOptions).then(validateResponse).then(d=> d.blob()).then(blob=>setBlobs(URL.createObjectURL(blob)));
            console.log(data)
            console.log(blobs)
        }
    
        fetchData();
      }, []);
    return (<div className='head w-full mt-0'>
            {content}
              
            <div className="grid grid-nogutter flex justify-content-center align-items-center w-full h-full lg:pt-6 lg:py-4 sm:pt-1 sm:py-1 text-800">
                <div className="left-div col-12 md:col-8 h-full text-center md:text-left flex align-items-center lg:p-6 sm:p-1 ">
                   <section className="flex flex-row justify-space-between align-items-center w-full h-full">
                        <h2 className='firsttxt grower text-primary font-bold'>Hi there, </h2>
                        <div className=" text-2xl text-primary font-bold "><h2>I am <span className='txt text-6xl font-bold my-3'>Abel Debebe</span></h2></div>
                        <h2 className="thirdtxt mt-0 mb-4 text-300 text-xl line-height-3">Full-stack Engineer - React, Angular, Next, .Net, Python, Django</h2>
                     { blobs &&
                        <video className="border-round-3xl h-full w-full lg:ml-6 lg:mr-3rem sm:mx-1 mt-1" src={blobs} muted autoPlay loop></video>
                     }
                        <div className='btns flex justify-content-end align-items-end m-3'> 
                            <Button label="More about me.." type="button" className="mr-3 p-button-raised" />
                        </div>
                          </section>
                </div>
                <div className="right-div col-12 md:col-4 flex flex-row overflow-hidden md:h-full bg-green-400">
                   <img src="assets/img/nobg_profile_1.png" alt="Abel D" className="ml-6 block md:h-full"/>
                </div>
            </div>  
            </div>
    )
}
export default LandingHeader;