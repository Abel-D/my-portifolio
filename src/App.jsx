import { useState } from 'react'
import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import FallingLeavesCssComponent from './components/css/fallingleaves.css.component/fallingleaves.css.component';
import LandingHeader from './components/landing-header/landing-header';
import PageHeader from './components/page-header/pageheader';
import { Accordion, AccordionTab } from 'primereact/accordion';

function App() {

  return (
    <div className='wrapper w-full h-full sm:w-screen sm:h-full'>
        <div className='grid flex justify-content-center'>
          <div className='stickynav col-8 sm:col-6 p-4'>
              <PageHeader />
          </div>
          <div className='header col-12 '>
             <LandingHeader/>
          </div>
          <div className='services col-12 '>
             {/* <FallingLeavesCssComponent  /> */}
          </div>
          <div className='skills col-12'>
             <div className='overview w-full h-full p-3'>SKILLS</div> 
          </div>
          <div className='portifolio col-12 '>
             <div className='overview w-full h-full p-3'>PORTIFOLIO</div> 
          </div>
          <div className='projects col-12 '>
             <div className='overview w-full h-full p-3'>PROJECTS</div> 
          </div>          
        </div>
        <div className='contactme flex justify-content-end align-items-end w-full'>
            <Accordion activeIndex={0}>
               <AccordionTab icon='pi pi-inbox' header="Message Me">
                  Content I
               </AccordionTab>
            </Accordion>
         </div>
    </div>
  )
}

export default App
