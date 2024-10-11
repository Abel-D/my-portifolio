import React,{useState,useEffect} from 'react';
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
                <a className="flex justify-content-center align-items-center text-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                      {/* <span className="ml-2">{item.label}</span> */}
                      <HashLink to={'/'+item.path}>{item.label}</HashLink>
                      <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                        <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={`${item.icon} text-lg`}></i>
                        </span>
                        <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900"> 
                            <HashLink to={'/'+item.path}>
                                 {item.label}
                            </HashLink>
                        </span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                    <ripple/>
                </a>
            );
        } else {
            return (
                <a className=" flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    {/* <img alt="megamenu-demo" src={item.image} className="w-full" /> */}
                    <span>{item.subtext}</span>
                    {/* <Button className="p-button p-component p-button-outlined" >{item.label} </Button> */}
                    <HashLink to={'/'+item.path}>       
                        {item.label}
                   </HashLink>
                   <ripple/>
                </a>
                 
            );
        }
    };

   const items = [
        {
            label: 'Home',
            root: true,
            icon:'',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { 
                                label: 'My Education', 
                                icon: '', subtext: '', 
                                template: 
                                itemRenderer,path:'/education' }
                        ]
                    }
                ],
                 {
                    label: 'My Career',
                    root: true,
                    template: itemRenderer,
                    path: '/career'
                },
                 {
                    label: 'My Services',
                    root: true,
                    template: itemRenderer,
                    path: '#services'
                },
                [
                    {
                        label: 'My Skillset',
                        root: true,
                        template: itemRenderer,
                        path: '#skillset'
                    },
                ]
                
            ]
        },
        {
            label: 'My Projects',
            root: true,
            template: itemRenderer,
            path: '/projects'
        },        
        {
            label: 'Contact me',
            root: true,
            template: itemRenderer,
            path: '#contact'
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