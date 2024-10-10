import { useState } from 'react';
import './skillset.component.css';
import { MeterGroup } from 'primereact/metergroup';
     
const SkillsetComponent =()=> {

    const skilllist=[
        {
            label: "Frontend frameworks",
            list:[
                {
                    img: "/assets/frameworks/react.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/nextjs.png",
                    level: 80
                },
                {
                    img: "/assets/frameworks/angular.png",
                    level: 90
                }
            ]
        
        },
        {
            label: "Backend frameworks",
            list:[
                {
                    img: "/assets/frameworks/dotnet.png",
                    level: 95
                },
                {
                    img: "/assets/frameworks/django.png",
                    level: 80
                },
                {
                    img: "/assets/frameworks/flask.png",
                    level: 70
                },
                {
                    img: "/assets/frameworks/fastapi.png",
                    level: 70
                }
            ]
        
        },
        {
            label: "CI/CD Tools",
            list:[
                {
                    img: "/assets/frameworks/docker.png",
                    level: 100
                },
                {
                    img: "/assets/frameworks/jenkins.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/kubernetes.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/ansible.png",
                    level: 80
                },
                {
                    img: "/assets/frameworks/terraform.png",
                    level: 75
                }
            ]
        
        },
        {
            label: "AWS",
            list:[
                {
                    img: "/assets/frameworks/ec2.png",
                    level: 75
                },
                {
                    img: "/assets/frameworks/s3.png",
                    level: 75
                },
                {
                    img: "/assets/frameworks/lambda.png",
                    level: 75
                }
            ]
        
        },
        {
            label: "Python Data Analysis and Machine Learning libraries",
            list:[
                {
                    img: "/assets/frameworks/pandas.png",
                    level: 100
                },
                {
                    img: "/assets/frameworks/numpy.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/scipy.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/scikit.png",
                    level: 80
                },
                {
                    img: "/assets/frameworks/seaborn.png",
                    level: 75
                }
            ]
         },
         {
            label: "IDEs",
            list:[
                {
                    img: "/assets/frameworks/vs.png",
                    level: 100
                },
                {
                    img: "/assets/frameworks/vscode.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/anaconda.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/pycharm.png",
                    level: 80
                },
                {
                    img: "/assets/frameworks/jupyter.png",
                    level: 75
                }
            ]
        
        },
]
    return (
        
<div className="surface-0 text-center border-solid border-blue-500 border-round-3xl p-3">
    <div className="text-center mb-3 font-bold text-3xl">
        <span className="text-900">My </span>
        <span className="text-blue-600">Skillset</span>
    </div>
   {skilllist.map((skill,index)=>(<>
        <div className="text-500 pl-6 mt-3 mb-1"><span>{skill.label}</span></div>
        <div className="grid" key={index} className='flex justify-content-center justify-space-between p-3'>
            {skill.list.map((stack,i)=>
            <div className="col-4 md:col-3 lg:col-2 flex flex-column" key={i}>
                <div className="surface-0 shadow-2 border-1 border-50 border-round h-6rem">
                    <div className="icocontainer flex justify-content-center h-full mb-3">
                        <img src={stack.img} alt={stack.img} />
                    </div>   
                </div>
                <div className="card flex justify-content-center w-full p-3">
                    <MeterGroup values={[{ label: null, value: stack.level}]} className='w-full'/>
                </div>
            </div>
            )}        
        </div>
        </>
        )
    )}     
</div>
    
    )
}
export default SkillsetComponent;