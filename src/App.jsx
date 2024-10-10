import { useState, useRef, useEffect } from 'react'
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
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import SkillsetComponent from './components/skillset/skillset.component';
        
function App() {
   
   const [value, setValue]= useState(null);
   const [openModal, setOpenModal ] = useState(false);
   const emailRef = useRef(null);
   const nameRef = useRef(null);
   const messageRef = useRef(null);
   const toast = useRef(null);
   const [loading, setLoading] = useState(false);
   
   const chatHeader = <div className='w-full h-full bg-blue-800 p-3'>
                        <span className='text-large font-bold'>
                           <i className="pi pi-chat text-green-500 mr-2"></i>
                           Leave me a message
                        </span>
                     </div>
   
   useEffect(() => 
      emailjs.init("NZ7uuz2Rtvs-Rdq0S")
   , []);    

   const handleSubmit = async (e) => {
       
      e.preventDefault();
      const serviceId = "service_8xxhnn9";
      const templateId = "temp_1";
      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
         name: nameRef.current.value,
         recipient: emailRef.current.value,
         message: messageRef.current.value
        }).then(()=>{
            toast.current.show({severity:'success', summary: 'Success', detail:'Message sent.', life: 3000}),
            nameRef.current = '',
            emailRef.current = '',
            messageRef.current = '',
            setOpenModal(true);
        });
      } catch (error) {
            toast.current.show({severity:'error', summary: 'Error', detail:'Message failed.', life: 3000});
            console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className='wrapper flex flex-column w-full h-full sm:w-screen sm:h-full'>
         <Toast ref={toast} />
        <div className=' grid flex justify-content-center w-full lg:px-3 sm:p-1'>
            <div className='stickynav col-8 lg:col-8'> 
               <PageHeader />
            </div>
          </div>
          <div id="landing" className='landing w-full'>
             <LandingHeader/>  
         </div>
         <div id="services" className='services w-full px-6 py-3'> 
            {/* <RainCssComponent/> */}
             <ServicesComponent/>
          </div>
          <div id="skillset" className='skillset w-full px-6 py-3'>
               <SkillsetComponent />
          </div>
          <div className='portifolio w-full '>
             <div className='overview w-full h-full p-3'>PORTIFOLIO</div> 
          </div>
          <div className='projects w-full '>
             <div className='overview w-full h-full p-3'>PROJECTS</div> 
          </div>          
        
        <div className='contactme grid flex justify-content-end align-items-end w-full p-3 pl-1'>
           <div className='col-12 md:col-4 '>
               <Accordion activeIndex={null} className='w-full mr-2'>
                  <AccordionTab header={chatHeader} className='w-full m-0 px-3'>
                     <div className="flex align-items-center justify-content-center w-full p-2 mr-0">
                        <div className="surface-card shadow-2 border-round px-4 w-full">
                           {/* <div className="text-center mb-3">
                              <div className="text-900 text-3xl font-medium mb-3">Hi,</div>
                              <span className="text-600 font-medium line-height-3">Leave me your message</span>
                              <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">here.</a>
                           </div> 
                           */}

                           <div>            
                              <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
                              <InputText ref={nameRef} id="name" type="text" placeholder="Your name" className="lg:w-full sm:w-full mb-3" />
                        
                              <label htmlFor="email" className="block text-900 font-medium mb-2"> Email</label>
                              <InputText ref={emailRef} id="email" type="text" placeholder="Your email" className="lg:w-full sm:w-full mb-3" />

                              <label htmlFor="message" className="block text-900 font-medium mb-2">Message</label>
                              <InputTextarea ref={messageRef} value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} className="lg:w-full sm:w-full mb-3"/>
                           </div>      
                           <div className='flex justify-content-center align-item-center w-full mb-6'>                    
                              <Button label="Send" icon="pi pi-inbox" loading={loading} onClick={handleSubmit} className='bg-green-400 mb-3' rounded/>                         </div>
                           </div> 
                        </div>
                  </AccordionTab>
               </Accordion>
            </div>
         </div>
         <Dialog header="Message sent" visible={openModal} style={{ width: '50vw' }} onHide={() => {if (!openModal) return; setOpenModal(false); }} className='flex justify-content-center text-center p-4'>
            <p>Your message is sent. Please check your inbox for confirmation.</p>    
         </Dialog>
    </div>
  )
}

export default App
