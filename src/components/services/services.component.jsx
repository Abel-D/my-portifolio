import React,{useState} from 'react';
import './services.css.component.css';
import { Button } from 'primereact/button';

const ServicesComponent =()=> {
    
    return (                
        <div className="surface-0 p-3 m-1 border-round-3xl">
            <div className="text-900 font-bold text-6xl mb-3 text-center">My Services</div>
           
            <div className="grid flex justify-space-between">
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className="text-900 font-medium text-xl mb-2">Software design, development and Project Management</div>
                            <div className="text-600">Custom frontend, backend and desktop application software design and development</div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="flex align-items-center">
                                <span className="font-bold text-2xl text-900">Frontend application design and development</span>
                                <span className="ml-2 font-medium text-600"></span>
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
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">Backend application design and development</span>
                                    <span className="ml-2 font-medium text-600"></span>
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
                            </ul>
                                <div className="flex align-items-center">
                                <span className="font-bold text-2xl text-900">Project Management</span>
                                <span className="ml-2 font-medium text-600"></span>
                            </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Agile development project management </span>
                                    </li>                               
                                </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                            {/* <Button label="Read More" className="p-3 w-full mt-auto" /> */}
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className="text-900 font-medium text-xl mb-2">Cloud infrastructure management</div>
                            <div className="text-600">Deploy and monitor applications on any cloud services</div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="flex align-items-center">
                                <span className="font-bold text-2xl text-900">AWS</span>
                                <span className="ml-2 font-medium text-600"></span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>EC2 deployment and management</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span></span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span></span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span></span>
                                </li>
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            {/* <Button label="Read More" className="p-3 w-full" /> */}
                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className="text-900 font-medium text-xl mb-2">System Analysis, Design and Automation</div>
                            <div className="text-600">System study, re-design and process automation</div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="flex align-items-center">
                                <span className="font-bold text-2xl text-900">System Analysis and Design</span>
                                <span className="ml-2 font-medium text-600"></span>
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