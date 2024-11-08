import './projects.component.css';
import { Galleria } from 'primereact/galleria';

function ProjectsComponent() {

    const projects = [
                        {
                            name:'Abronet Ekub',
                            description:'A modern social cooperative app, that allows individuals to network and share financial resource by making periodical installments to a common ballot that each would win in turns',
                            imgs:[
                                {
                                    path:'/projects/abronet/abronet.png',
                                    thumbnailImageSrc:'/projects/abronet/thumbnail_abronet.png'
                                },
                                {
                                    path:'/projects/abronet/login.png',
                                    thumbnailImageSrc:'/projects/abronet/thumbnail_login.png'
                                },
                                {
                                    path:'/projects/abronet/signup.png',
                                    thumbnailImageSrc:'/projects/abronet/thumbnail_signup.png'
                                }
                            ],
                            url:'https://abronet.net/',
                            stacks:[{
                                name:'React',
                                img: '/assets/frameworks/react.png'
                            },
                            {
                                name:'.Net',
                                img:'/assets/frameworks/dotnet.png'
                            } ]
                        },
                        ,
                        {
                            name: 'BarCoatERP PWA ProtoType',
                            description: 'An easy to configure and use point of sales and ERP system prototype that aggreggates and presents buisnesses\' sales, procurement, inventory, expense and resource data in real-time to help make informed decisions',
                            imgs: [
                                {
                                    path: '/projects/barcoat/login.png',
                                    thumbnailImageSrc: '/projects/barcoat/thumbnail_login.png'
                                },
                                {
                                    path: '/projects/barcoat/landing.png',
                                    thumbnailImageSrc:'/projects/barcoat/thumbnail_landing.png'
                                },
                               {
                                    path: '/projects/barcoat/store.png',
                                    thumbnailImageSrc: '/projects/barcoat/thumbnail_store.png'
                                },
                                {
                                    path: 'projects/barcoat/reporting.png',
                                    thumbnailImageSrc: '/projects/barcoat/thumbnail_reporting.png'
                                }],
                            url: 'https://barcoat.vercel.app',
                            stacks:[{
                                name: 'React',
                                img: '/assets/frameworks/react.png'
                            },
                            {
                                name:'.Net',
                                img:'/assets/frameworks/dotnet.png'
                            } 
                            ]
                        },
                        {
                            name:'BciAdmin',
                            description:'A school management app that manages and synchronize overall institution\'s data. ', 
                            imgs:[
                                    {
                                        path: '/projects/bci-admin/landing.PNG',
                                        thumbnailImageSrc:'/projects/bci-admin/thumbnail_landing.PNG'
                                    },
                                    {
                                        path: '/projects/bci-admin/login.PNG',
                                        thumbnailImageSrc: '/projects/bci-admin/thumbnail_login.PNG'
                                    },
                                    {
                                        path: '/projects/bci-admin/dashboard.PNG',
                                        thumbnailImageSrc: '/projects/bci-admin/thumbnail_dashboard.PNG'

                                    },
                                    {
                                        path: '/projects/bci-admin/usermanagement.PNG',
                                        thumbnailImageSrc: '/projects/bci-admin/thumbnail_usermanagement.PNG'
                                    }
                                ],
                            stacks:[
                                {
                                  name:'React',
                                  img: '/assets/frameworks/react.png'
                                },
                                {
                                  name:'.Net',
                                  img:'/assets/frameworks/dotnet.png'
                                } ]
                          },
                        {
                            name:'AskwalAdmin',
                            description:'A personal school and learning management project that delivers educational contents helping manage learners\' learning data with added features of data analysis and machine learning to track learner\'s progress and assisst them on their track by providing resources by scrapping the web',
                            imgs:[],
                            stacks:[{
                                name:'React',
                                img: '/assets/frameworks/react.png'
                            },
                            {
                                name:'.Net',
                                img:'/assets/frameworks/dotnet.png'
                            },
                            {
                                name:'Django',
                                img:'/assets/frameworks/django.png'
                            } ]
                        }
                    ]

                    const responsiveOptions = [
                        {
                            breakpoint: '991px',
                            numVisible: 4
                        },
                        {
                            breakpoint: '767px',
                            numVisible: 3
                        },
                        {
                            breakpoint: '575px',
                            numVisible: 1
                        }
                    ];
    
                    const itemTemplate = (item) => {
                        return <img src={item.path} alt={item.alt} style={{ width: '100%' }} />
                    }
                
                    const thumbnailTemplate = (item) => {
                        return <img src={item.thumbnailImageSrc} alt={item.alt} />
                    }

    return (
        <div className='surface-0 grid grid-nogutter gap-3 flex justify-content-center h-full w-full border-round-xl p-3'>
            <div className="col-12 text-center font-bold text-3xl">
                <span className="text-900">My </span>
                <span className="text-blue-600">Projects</span>
            </div>
            <div className="slider col-12 text-center text-500 mb-1"><span>Some of my recent projects...</span></div>
            {projects.map((p,i)=>
            <div key={i} className='shadow-2 col-12 lg:col-5 md:col-5 flex flex-column justify-content-center align-items-center justify-space-between text-start border-round-xl h-auto p-2'>
                <div className='flex flex-row h-full'>
                    <div className='imgcontainer flex justify-content-center align-items-center w-1/2 h-full p-1 py-3'>
                        <Galleria value={p.imgs} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                            item={itemTemplate} thumbnail={thumbnailTemplate}  circular autoPlay transitionInterval={2000} className='h-15rem w-15rem' />
                    </div>
                    <div className='flex flex-column justify-content-center align-items-center w-1/2 p-6'>
                        <section className='flex flex-column justify-content-center'>
                             <>
                            {!p.url && <span className='font-bold text-2xl'>{p.name}</span> }
                            {p.url && <a href={p.url} className='font-bold text-2xl'>{p.name}</a> }
                              </>
                            <span className='font-medium text-300 mb-3'>{p.description}</span>
                        </section>
                        <div className='block flex flex-row gap-3'>
                            {p.stacks.map((s,i)=>
                            <div key={i} className='imgcontainer h-3rem w-6rem'>
                                <img src={s.img} alt={s.name} />
                            </div>
                            )} 
                        </div>
                    </div>
                </div>
            </div>
            )} 
        </div>
        )
}
export default ProjectsComponent;
