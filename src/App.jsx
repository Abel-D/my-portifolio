import { useState } from 'react'
import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import FallingLeavesCssComponent from './components/css/fallingleaves.css.component/fallingleaves.css.component';
import LandingHeader from './components/landing-header/landing-header';
import PageHeader from './components/page-header/pageheader';
import ServicesComponent from './components/services/services.component';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { RainCssComponent } from './components/css/Rain.css.component/Rain.css.component';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';

function App() {
   
   const [value, setValue]= useState(null);

   const chatHeader = <span className='text-large font-bold'>
                        <i className="pi pi-chat text-green-500 mr-2"></i>
                        Leave me a message</span>
  return (
    <div className='wrapper flex flex-column w-full h-full sm:w-screen sm:h-full'>
        <div className=' grid flex justify-content-center w-full lg:px-3 sm:p-1'>
            <div className='stickynav col-8 lg:col-8'> 
               <PageHeader />
            </div>
          </div>
          <div id="landing" className='landing w-full'>
             <LandingHeader/>  
         </div>
         <div id="services" className='services w-full p-6'> 
            {/* <RainCssComponent/> */}
             <ServicesComponent/>
          </div>
          <div id="skillset" className='skillset w-full'>
             <div className='overview p-3'>SKILLS</div> 
          </div>
          <div className='portifolio w-full '>
             <div className='overview w-full h-full p-3'>PORTIFOLIO</div> 
          </div>
          <div className='projects w-full '>
             <div className='overview w-full h-full p-3'>PROJECTS</div> 
          </div>          
        
        <div className='contactme grid flex justify-content-end align-items-end w-full'>
           <div className='col-6 lg:col-4'>
               <Accordion activeIndex={null} className='w-full md:h-full md:w-screen sm:h-screen sm:w-screen'>
                  <AccordionTab header={chatHeader} className='w-full m-0'>
                     <div className="flex align-items-center justify-content-center w-full">
                        <div className="surface-card p-4 shadow-2 border-round w-full ">
                           <div className="text-center mb-5">
                              <img src="/assets/img/no_bg_profile_2.jpg" alt="hyper" height={50} className="mb-3" />
                              <div className="text-900 text-3xl font-medium mb-3">Hi,</div>
                              <span className="text-600 font-medium line-height-3">Leave me your message</span>
                              <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">here.</a>
                           </div>

                           <div>            
                              <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
                              <InputText id="name" type="text" placeholder="Email address" className="w-full mb-3" />
                        
                              <label htmlFor="email" className="block text-900 font-medium mb-2"> Email</label>
                              <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                              <label htmlFor="message" className="block text-900 font-medium mb-2">Message</label>
                              <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} className="w-full mb-3"/>
                              
                              <Button label="Send" className="w-full" primary/>
                           </div>
                        </div>
                  </div>
                  </AccordionTab>
               </Accordion>
            </div>
         </div>
    </div>
  )
}

export default App
