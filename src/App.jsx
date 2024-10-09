import { useState } from 'react'
import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import FallingLeavesCssComponent from './components/css/fallingleaves.css.component/fallingleaves.css.component';
import LandingHeader from './components/landing-header/landing-header';
import PageHeader from './components/page-header/pageheader';
import ServicesComponent from './components/services/services.component';
import { Accordion, AccordionTab } from 'primereact/accordion';

function App() {

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
          <>
             <LandingHeader/>         
             <ServicesComponent/>
          </>
          <div className='skills w-full'>
             <div className='overview p-3'>SKILLS</div> 
          </div>
          <div className='portifolio w-full '>
             <div className='overview w-full h-full p-3'>PORTIFOLIO</div> 
          </div>
          <div className='projects w-full '>
             <div className='overview w-full h-full p-3'>PROJECTS</div> 
          </div>          
        
        <div className='contactme grid flex justify-content-end align-items-end w-full'>
           <div className='col-6 lg:col-3'>
               <Accordion activeIndex={null} className='w-full'>
                  <AccordionTab header={chatHeader}>
                     Content I
                  </AccordionTab>
               </Accordion>
            </div>
         </div>
    </div>
  )
}

export default App
