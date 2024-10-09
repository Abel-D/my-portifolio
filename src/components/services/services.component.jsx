import React,{useState} from 'react';
import './services.component.css';
import { Button } from 'primereact/button';

const ServicesComponent =()=> {
    
    return (                
        <div className="surface-0 p-3 m-1 border-solid border-round-3xl">
            <div className="text-900 font-bold text-6xl mb-3 text-center">My Services</div>
           
            <div className="grid flex justify-space-between">
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '10px' }}>
                            <div className="flex flex-column align-items-center">
                                <span className="font-bold text-2xl text-900">Frontend application design and development</span>
                                <span className="ml-2 font-medium text-600">Attractive UI design and development for all devices</span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>UI/UX Figma/Wireframe design</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Responsive UI development</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>SPA development with modern JavaScript frameworks - Angular, React, Next</span>
                                </li>
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                            {/* <Button label="Read More" className="p-3 mt-auto" /> */}
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '10px' }}>
                             <div className="flex flex-column align-items-center">
                                    <span className="font-bold text-2xl text-900">Backend application design and development</span>
                                    <span className="ml-2 font-medium text-600">Backend API and database management system design and development.</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Backend API design, development and integration - .NET, Django, Flask, FastAPI</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Modular Multi-tenant and Distributed backend application development</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>GraphQL API development</span>
                                </li>                            
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>CI/CD - Constant Integration and Constant Deployment</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Database design,development and integration - SQL,PostgreSQL,Oracle 11g</span>
                                </li>
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                                {/* <Button label="Read More" className="p-3 w-full mt-auto" /> */}
                          
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '10px' }}>
                        <div className="flex flex-column align-items-center">
                                <span className="font-bold text-2xl text-900">Software development project Management</span>
                                <span className="ml-2 font-medium text-600">Full cycle software project management using standard frameworks.</span>
                            </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Agile Scrum </span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Agile Kanban </span>
                                    </li>  
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Waterfall </span>
                                    </li>                             
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                            {/* <Button label="Read More" className="p-3 w-full mt-auto" /> */}
                        </div>
                    </div>
                </div>
               
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '10px' }}>
                             <div className="flex flex-column align-items-center">
                                <span className="font-bold text-2xl text-900">Hosting and Cloud services</span>
                                <span className="ml-2 font-medium text-600">Deploy and monitor applications on any hosting or cloud services</span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>AWS infrastructure management- EC2, S3, Lambda</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Azure deployment</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Hosting solution - CloudFlare,Vercel</span>
                                </li>
                               
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            {/* <Button label="Read More" className="p-3 w-full" /> */}
                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '10px' }}>
                           <div className="flex flex-column align-items-center">
                                <span className="font-bold text-2xl text-900">System Analysis and Design</span>
                                <span className="ml-2 font-medium text-600">System study, re-design and process automation</span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Business Process Re-engineering - BPR</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>System implementation</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Business process workflow Automation</span>
                                </li>                                
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            {/* <Button label="Read more" className="p-3 w-full p-button-outlined" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )

}
export default ServicesComponent;
