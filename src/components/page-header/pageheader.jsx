import React,{useState,useEffect} from 'react';
import { Navigate,Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { InputSwitch } from 'primereact/inputswitch';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';
import { AutoComplete } from 'primereact/autocomplete';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink, NavHashLink } from 'react-router-hash-link';

function PageHeader() {
   
    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex justify-content-center align-items-center text-center cursor-pointer w-full px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                      {/* <span className="ml-2">{item.label}</span> */}
                      <Link to={'/'+item.path}>
                        <HashLink to={'/'+item.path}>{item.label}</HashLink>
                      </Link>
                      <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 w-full " onClick={options.onClick}>
                        <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={`${item.icon} text-lg`}></i>
                        </span>
                        <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900"> 
                            <Link to={'/'+item.path}>
                                <HashLink to={'/'+item.path}>{item.label}</HashLink>
                            </Link>
                        </span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                    <Ripple/>
                </a>
            );
        } else {
            return (
                <a className=" flex flex-column lg:flex-row align-items-start gap-3 w-full" onClick={options.onClick}>
                    {/* <img alt="megamenu-demo" src={item.image} className="w-full" /> */}
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" >
                        <Link to={'/'+item.path}> 
                            <HashLink to={'/'+item.path}>{item.label}</HashLink>
                        </Link> 
                    </Button>
                     <Ripple/>
                </a>
                 
            );
        }
    };

   const items = [
        {
            label: 'Home',
            root: true,
            icon:'pi pi-home',
            inPage: 'true', 
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { 
                                label: 'My Education', 
                                icon: 'pi pi-book', subtext: '', 
                                template:itemRenderer,
                                path:'/my-education',
                                inPage: 'false' 
                            },
                            {
                                label: 'My Career',
                                icon: 'pi pi-book', subtext: '',
                                template: itemRenderer,
                                path: '/my-career',
                                inPage: 'false' 
                            },
                             {
                                label: 'My Services',
                                icon: 'pi pi-book', subtext: '',
                                template: itemRenderer,
                                path: '#services',
                                inPage: 'true' 
                            },
                            {
                                label: 'My Skillset',
                                icon: 'pi pi-book', subtext: '',
                                template: itemRenderer,
                                path: '#skillset',
                                inPage: 'true' 
                            }
                        ]
                    }
                ],                              
            ]
        },
        {
            label: 'My Projects',
            root: true,
            template: itemRenderer,
            path: '/#projects',
            inPage: 'false' 
        },        
        {
            label: 'Contact me',
            root: true,
            template: itemRenderer,
            path: '#contact',
            inPage: 'true' 
        }
    ];

     const start = (<></>)
    const end =( <>
                <div className="flex flex-row gap-2 align-items-center">
                    {<span className='font-bold text-green-500'> </span>}
                    <div className='flex flex-column justify-content-center align-items-center mx-3 my-2'>
                        
                    </div>
                </div>
               
                </>
)

    return (
        <div className="container w-full px-2 flex flex-column justify-space-between justify-content-center sm:justify-content-start align-items-center" >
           {  <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className=" w-full px-2 surface-0 shadow-2 flex justify-content-center align-items-center justify-space-between" style={{ borderRadius: '3rem' }} />
            }
             
        </div>
    )
}
export default PageHeader;