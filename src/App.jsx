import { useState, useRef, useEffect } from 'react'
import './App.css';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { history } from './helpers';
import SkillsetComponent from './components/skillset/skillset.component';
import ContactInfoComponent from './components/contact-info/contact-info.component';
import NotificationModalComponent from './components/notification-modal/notification-modal.component';
import CareerComponent from './components/career/career.component';
import ProjectsComponent from './components/career/career.component';
import EducationComponent from './components/education/education.component';

function App(props) {
   
   const [openModal, setOpenModal ] = useState(false);
   const [activeIndex, setActiveIndex ] = useState(null);
   
   const chatHeader = <div className='w-full h-full bg-blue-800 p-3'>
                        <span className='text-large font-bold'>
                           <i className="pi pi-chat text-green-500 mr-2"></i>
                           Leave me a message
                        </span>
                     </div>
   
  return (
   <>
      <div className='wrapper flex flex-column w-full h-full sm:w-screen sm:h-full'>
         <div className=' grid flex lg:justify-content-center md:justify-content-start sm:justify-content-start w-full lg:px-3 sm:p-1'>
            <div className='stickynav col-2 lg:col-8 sm:col-2'> 
               <PageHeader activateIndex={(val)=>setActiveIndex(val)} />
            </div>
         </div>
            <Routes>
               <Route exact path="/" component={App} />
               <Route exact path="/my-projects" component={<ProjectsComponent/>} />
               <Route exact path="/my-education" component={<EducationComponent/>} />
               <Route exact path="/my-career" component={<CareerComponent/>} />
               <Route render={() => <Navigate to="/" />} />
            </Routes>
            <div id="landing" className='landing w-full'>
               <LandingHeader/>  
            </div>             
            <div id="services servicecontainer" className='services w-full px-6 py-3'> 
               <FallingLeavesCssComponent/>
               <ServicesComponent/>
            </div>
            <div id="skillset skillscontainer" className='skillset w-full px-6 py-3'>
                  <SkillsetComponent />
            </div>
            <div className='portifolio w-full p-3 '>
                </div>
            <div id="projects" className=' flex justify-content-center  projects w-full p-3'>
               <div className='overview w-full h-full p-3 border-round-xl text-center'>
                  <div className="text-center mb-3 font-bold text-3xl">
                     <span className="text-900">My </span>
                     <span className="text-blue-600">Projects</span>
                  </div>
                  <div className='overview w-full h-full p-3 border-round-xl text-center'>
                     <span className='text-large-900 '>Organizing my portfolio ...</span> 
                     <span className='text-large-900 '>...Will be here soon.</span>
                  </div>
               </div> 
            </div>
            <Button onClick ={()=> setOpenModal(true) } icon='pi pi-inbox' label='Message me' className='msgbtn bg-blue-700 mb-0 mt-0' raised rounded /> 
            <div id="contact" className='contact grid flex justify-content-end align-items-end w-full p-3 pl-1'>
               <div className='col-12 w-full'>
                  <ContactInfoComponent />
               </div>
            </div>
            <Dialog header={ 'Message me' } visible={openModal} onHide={() => {if (!open) return; setOpenModal(false); }}
               style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
               className='flex justify-content-center p-3 w-1/2 h-1/2 overflow-x-hidden'>
                  <ContactForm/>
            </Dialog>
      </div>
   </>
  )
}

export default App;

const ContactForm =()=> {
   
   const [value, setValue]= useState(null);
   const [emailFormOpen, setEmailFormOpen] = useState(null);
   const [nameFormOpen, setNameFormOpen] = useState(1);
   const [msgFormOpen, setMsgFormOpen] = useState(null);
   const [sentMsg, setSentMsg ] = useState(null);
   const emailRef = useRef(null);
   const nameRef = useRef(null);
   const messageRef = useRef(null);
   const toast = useRef(null);
   const [loading, setLoading] = useState(false);

   const messageSuccess = (
      <div className='flex flex-column text-center justify-content-center'>
        <span className='font-bold text-large-3xl text-blue-700'>
        < i className='pi pi-inbox m-2'> Your message is sent.</i>
         </span>
         <span className='font-medium text-500' >

         </span>
      </div>
   )
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
            nameRef.current = null
            emailRef.current = null,
            messageRef.current = null,
            setSentMsg(1)
           
        });
      } catch (error) {
            toast.current.show({severity:'error', summary: 'Error', detail:'Message failed.', life: 3000});
            console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const openEmail =()=> {
      setNameFormOpen(null);
      setEmailFormOpen(1);
    }
    const openMsg =()=> {
      setEmailFormOpen(null);
      setMsgFormOpen(1);
    }
   return (
      <>
      
      {/* <div className="flex align-items-center justify-content-center w-full p-2 mr-0 p-6">
      <div className="surface-card shadow-2 border-round px-4 w-full">
         <div className="text-center mb-3">
            <div className="text-900 text-3xl font-medium mb-3">Hi,</div>
            <span className="text-600 font-medium line-height-3">Leave me your message</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">here.</a>
         </div> 
        
         <div className='block grid justify-content-center p-6'> 
            <div className='col-6 lg:col-6 w-full flex px-6'>           
               <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
               <InputText ref={nameRef} id="name" type="text" placeholder="Your name" className="lg:w-full sm:w-full mb-3" />
         
               <label htmlFor="email" className="block text-900 font-medium mb-2"> Email</label>
               <InputText ref={emailRef} id="email" type="text" placeholder="Your email" className="lg:w-full sm:w-full mb-3" />

               <label htmlFor="message" className="block text-900 font-medium mb-2">Message</label>
               <InputTextarea ref={messageRef} value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} className="lg:w-full sm:w-full mb-3"/>
            </div>
         </div>      
         <div className='flex justify-content-center align-item-center w-full mb-6'>                    
            <Button label="Send" icon="pi pi-inbox" loading={loading} onClick={handleSubmit} className='bg-green-400 mb-3' rounded/>                         </div>
         </div> 
      </div> */}
      
         {nameFormOpen && <div className='slider grid flex justify-content-center w-1/2 h-1/2 p-6 surface-1'>
            <div className='col-12 md:col-8 lg:col-6 flex flex-column gap-3 justify-content-center align-items-center p-3 w-1/2'>
               <InputText ref={nameRef} id="name" type="text" placeholder="Your name" className="h-2rem lg:w-full sm:w-full mb-3 mt-0" />
              <div className='flex justify-content-center'> 
                  <Button label="Next" icon="pi pi-arrow-right" onClick={openEmail} className='bg-green-400 mb-3 mt-1' rounded/> 
               </div>
            </div>
         </div>}
         {emailFormOpen && <div className='slider grid flex justify-content-center w-1/2 h-1/2 p-6 surface-1'>
               <div className='col-12 md:col-8 lg:col-6 flex flex-column gap-3 justify-content-center align-items-center p-3 w-1/2 '>
                  <InputText ref={emailRef} id="email" type="text" placeholder="Your email" className="h-2rem lg:w-full sm:w-full h-2rem mb-3" />
                  <div className='flex justify-content-center'> 
                     <Button label="Next" 
                     icon="pi pi-arrow-right" 
                     onClick={openMsg} 
                     className='bg-green-400 mb-3' rounded/>
                  </div>
               </div>
            </div>
              }
         {msgFormOpen && <div className='slider grid flex justify-content-center w-1/2 h-1/2 p-6 surface-1'>
               <div className='col-12 md:col-8 lg:col-6 flex flex-column gap-3 justify-content-center align-items-center p-3 w-full h-full '>
                  <InputTextarea ref={messageRef} value={value} placeholder="Your message" onChange={(e) => setValue(e.target.value)} rows={5} cols={30} className="h-15rem lg:w-full sm:w-full mb-3 h-3rem"/>
                  <div className='flex justify-content-center'> 
                     <Button label="Send" icon="pi pi-inbox" loading={loading} onClick={handleSubmit} className='bg-green-400 mb-3' rounded/>
                  </div>
               </div> 
            </div>}
         {sentMsg && <div className='slider grid flex justify-content-center w-1/2 h-1/2 p-6 surface-1'>
            <div className='col-12 md:col-8 lg:col-6 p-3 w-1/2 '>
               <span className='font-bold text-large text-500 text-blue-500'>Your message is sent.</span>
               <span className='font-medium text-medium text-500 '>Please check your email inbox for confirmation.</span>   
            </div>   
           
         </div>}
      </>
   )
}
