import React,{useState,useEffect} from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { InputSwitch } from 'primereact/inputswitch';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';
import { authenticationService,AccountService } from '../_services';
import { AutoComplete } from 'primereact/autocomplete';
import { FilterComponent } from '../FilterComponent';

export function PageHeader(props) {
    const _authenticationService = authenticationService;
    const _accountService = AccountService;
    const[currentUser,setCurrentUser]= useState(_authenticationService.currentUserValue??null);
    const[value, setValue] = useState(null);
    const[searchItems,setSearchItems]=useState([]);
    
    useEffect(()=>{
       _accountService.getAccounts().then(a=>console.log(a))

       },[])

    const search =()=>{
        items.forEach(i=> {
            // searchItems.push(i.label.value);
            // setSearchItems(searchItems);
        })
    }

    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
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
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className=" flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    {/* <img alt="megamenu-demo" src={item.image} className="w-full" /> */}
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

   const items = [
        {
            label: 'My Accounts',
            root: true,
            icon:'pi pi-users',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { label: 'My Accounts', icon: 'pi pi-list', subtext: '', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Setting', icon: 'pi pi-shield', subtext: '', template: itemRenderer },
                            ]
                    }
                ],
                
            ]
        },
        {
            label: 'My Customers',
            root: true,
            template: itemRenderer
        },
        // {
        //     label: 'My Products',
        //     root: true,
        //     template: itemRenderer,
            // items:[
            //     [
            //         {
            //             items: [
            //                 { label: 'Filter', icon: 'pi pi-list', subtext: 'Filter places and nearby businesses', template: itemRenderer },
            //                 // { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
            //                 // { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
            //             ]
            //         }
            //     ],
            //     [
            //         {
            //             items: [
            //                 { label: 'Packages', icon: 'pi pi-list', subtext: 'Choose a convenient tour plan tailored for you', template: itemRenderer },
            //                 // { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
            //                 // { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
            //             ]
            //         }
            //     ],
            //     [
            //         {
            //             items: [
            //                 { label: 'Blogs', icon: 'pi pi-compass', subtext: 'Get insight of the business', template: itemRenderer },
            //                 // { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
            //                 // { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
            //             ]
            //         }
            //     ],
            //     [
            //         {
            //             items: [
            //                 { label: 'Promoted', icon: 'pi pi-thumbs-up', subtext: 'Tour and visit recommendations', template: itemRenderer },
            //                 // { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
            //                 // { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
            //             ]
            //         }
            //     ],
            //]
            
        //},
        {
            label: 'My Orders',
            root: true,
            template: itemRenderer
        }
    ];

     const start = (<></>)
    const end =( <>
                <div className="flex flex-row gap-2 align-items-center">
                    {currentUser && <span className='font-bold text-green-500'>Balance: {currentUser.balance} </span>}
                    <div className='flex flex-column justify-content-center align-items-center mx-3 my-2'>
                        {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                        <div className="w-full flex justify-content-center">
                        {currentUser &&  <span>{currentUser.firstName} {currentUser.lastName}</span>}
                        </div> */}
                    </div>
                </div>
               
                </>
)

    return (
        <div className="container w-full px-2 flex flex-column justify-space-between justify-content-center align-items-center" >
           {currentUser &&
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className=" w-full px-2 surface-0 shadow-2 flex justify-content-center align-items-center justify-space-between" style={{ borderRadius: '3rem' }} />
            }
             <FilterComponent />
        </div>
    )
}
