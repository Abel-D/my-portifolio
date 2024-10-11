import react,{useEffect} from 'react';
import './contact-info.component.css';
import { Button } from 'primereact/button';

export const ContactInfoComponent =(props)=> {

    useEffect(()=>{

    },[])

    const onMessageClick =()=> {

        props.activateIndex(0);
    }

    return (
        <div className="flex justify-content-center align-items-center w-full h-full bg-gray-900 p-3">
             <section className="flex flex-column align-items-center w-full h-full mt-0 ">
                <span className='text-medium text-blue-300'>
                    <i className="pi pi-phone text-medium"> Phone: +251 960 98 8585 | +251 941 71 4969</i></span>
                <span className='text-medium text-blue-300' >
                    <i className="pi pi-inbox text-large-3xl p-2"> Email: abeldebebe818@gmail.com</i>
                </span>
                
                <div className="flex gap-3 justify-content-center w-full mb-0 mt-2">
                   <a href="https://github.com/Abel-D" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                        <img alt="github-logo" src="/assets/icons8-github-ios-17-filled-32.png" className="h-2rem"></img>
                    GitHub</a>
                    <a href="https://linkedin.com/in/abel-debebe-m9a9r9s" target="_blank" rel="noopener noreferrer" className="p-button font-bold text-blue-500">
                        <img alt="linkedin-logo" src="/assets/linkedin-logo.png" className="h-2rem"></img>
                        <span className='text-medium text-blue-300' >
                        LinkedIn
                        </span></a>
                </div>
                {/* <div className='w-full flex justify-content-center align-items-center mt-3'>
                    <span className='text-medium text-blue-300 ' > -- OR --  </span>
                    <Button className='p-2 mb-3 text-blue-800' onClick={onMessageClick}>
                        <i className='pi pi-inbox'> Leave me a message here</i>
                    </Button>
                </div> */}
                <div className="surface-0 text-800 text-center font-bold px-16 mb-1 mt-3">
                    <div> Abel Debebe©{new Date().getFullYear()} </div>
                </div>
            </section>     
        </div>
    )
}
export default ContactInfoComponent;