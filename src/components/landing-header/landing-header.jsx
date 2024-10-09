// import React,{ useState,useEffect } from 'react';
// import './landing-header.css';
// import { Button } from 'primereact/button';
// import { list } from '@vercel/blob';

// function LandingHeader({content}){
//     // const [blobs,setBlobs] = useState(null) 
//     // const {url} = "https://l3smwarprhepcevk.public.blob.vercel-storage.com/smoke.mp4";

//     // const validateResponse=(response)=> {
//     //     if(!response.ok) {
//     //         throw Error(response.statusText);
//     //     }
//     //     return response;
//     // }
//     useEffect(() => {
//         // async function fetchData() {
//         //     const requestOptions ={method: 'GET'}
//         //     const data = await fetch({url},requestOptions).then(validateResponse).then(d=> d.blob()).then(blob=>setBlobs(URL.createObjectURL(blob)));
//         //     console.log(data)
//         //     console.log(blobs)
//         // }
    
//         // fetchData();
//       }, []);
//     return (
//         <div className='head w-full mt-0'>
                          
//             <div className="content grid grid-nogutter flex justify-content-center align-items-center w-full h-full lg:pt-6 lg:py-4 sm:pt-1 sm:py-1 text-800">
//                 <div className="col-12 md:col-8 h-full text-center md:text-left flex align-items-center lg:p-6 sm:p-1 ">
//                 <div className='cont-video embed'>
//                     <iframe src="https://player.vimeo.com/video/1016808950?background=1&amp;muted=1&amp;badge=0&amp;loop=1&amp;autopause=0&amp;controls=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="smoke" className=' bg sm:w-full sm:h-full border-round'>
//                         {/* <script src="https://player.vimeo.com/api/player.js" /> */}
//                     </iframe>                            
//                 </div>
//                    <section className='content flex flex-column justify-content-center h-15rem' >
//                         <h2 className=' grower text-primary font-bold'>Hi there, </h2>
//                         <div className=" text-2xl text-primary font-bold "><h2>I am <span className='txt text-6xl font-bold my-3'>Abel Debebe</span></h2></div>
//                         <h2 className=" mt-0 mb-4 text-300 text-xl line-height-3">Full-stack Engineer - React, Angular, Next, .Net, Python, Django</h2>
//                         <div className='btns flex-column justify-content-center align-items-center w-full m-1 mr-0 ml-6 lg:px-6'> 
//                             <Button label="More about me.." type="button" className="mb-2 p-button-raised" outlined />
//                         </div> 
//                    </section>    
                                                 
//                 </div>
//                 <div className="right-div col-12 md:col-4 flex flex-row overflow-hidden md:h-full bg-green-400">
//                    <img src="assets/img/nobg_profile_1.png" alt="Abel D" className="ml-6 block md:h-full"/>
//                 </div>
                
//             </div>  
//             </div>
//     )
// }
// export default LandingHeader;

import React,{ useState,useEffect } from 'react';
import './landing-header.css';
import { Button } from 'primereact/button';
import { list } from '@vercel/blob';

function LandingHeader({content}){
    // const [blobs,setBlobs] = useState(null) 
    // const {url} = "https://l3smwarprhepcevk.public.blob.vercel-storage.com/smoke.mp4";

    // const validateResponse=(response)=> {
    //     if(!response.ok) {
    //         throw Error(response.statusText);
    //     }
    //     return response;
    // }
    useEffect(() => {
        // async function fetchData() {
        //     const requestOptions ={method: 'GET'}
        //     const data = await fetch({url},requestOptions).then(validateResponse).then(d=> d.blob()).then(blob=>setBlobs(URL.createObjectURL(blob)));
        //     console.log(data)
        //     console.log(blobs)
        // }
    
        // fetchData();
      }, []);
    return (
        <div className='head w-full mt-0'>
            {content}              
            <div className="grid grid-nogutter flex justify-content-center align-items-center w-full h-full lg:pt-6 lg:py-4 sm:pt-1 sm:py-1 text-800">
                <div className="left-div col-12 md:col-8 h-full text-center md:text-left flex flex-column align-items-center lg:p-6 sm:p-1 ">
                   <section className="flex flex-row justify-space-between align-items-center w-full h-full">
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
                   </section>  <h2 className="thirdtxt mt-2 mb-4 text-300 text-xl line-height-3">Full-stack Engineer - React, Angular, Next, .Net, Python, Django</h2>
                       
                   <div className='btns flex flex-column justify-content-center align-items-center w-full m-1 mr-0 lg:px-6'> 
                        <Button label="More about me.." type="button" className="mb-2 p-button-raised mt-6 " outlined />
                   </div>                 
                </div>
                <div className="right-div col-12 md:col-4 flex flex-row overflow-hidden md:h-full bg-green-400">
                   <img src="assets/img/nobg_profile_1.png" alt="Abel D" className="ml-6 block md:h-full"/>
                </div>
                
            </div>  
            </div>
    )
}
export default LandingHeader;