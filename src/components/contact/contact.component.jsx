import { useState } from "react";
import './contact.component.css';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';

export const ContactComponent =() {

    const [value, setValue]= useState(null);

    return (
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
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
                    <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                    
                    <Button label="Send" className="w-full" />
                </div>
            </div>
        </div>
    )
}
export default ContactComponent;