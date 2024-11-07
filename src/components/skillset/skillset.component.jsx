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
                    img: "/assets/frameworks/angular.png",
                    level: 90
                },
                {
                    img: "/assets/frameworks/nextjs.png",
                    level: 80
                },
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
                },
                {
                    img: "/assets/frameworks/jenkins.png",
                },
                {
                    img: "/assets/frameworks/kubernetes.png",
                },
                {
                    img: "/assets/frameworks/ansible.png",           
                },
                {
                    img: "/assets/frameworks/terraform.png",
                }
            ]
        
        },
        {
            label: "AWS",
            list:[
                {
                    img: "/assets/frameworks/ec2.png",
                },
                {
                    img: "/assets/frameworks/s3.png",
                },
                {
                    img: "/assets/frameworks/rds.png",
                },
                {
                    img: "/assets/frameworks/lambda.png",
                }
            ]
        
        },
        {
            label: "Python Data Analysis and Machine Learning libraries",
            list:[
                {
                    img: "/assets/frameworks/pandas.png",
                },
                {
                    img: "/assets/frameworks/numpy.png",
                },
                {
                    img: "/assets/frameworks/scipy.png",
                },
                {
                    img: "/assets/frameworks/scikit.png",
                },
                {
                    img: "/assets/frameworks/seaborn.png",
                }
            ]
         },
         {
            label: "IDEs",
            list:[
                {
                    img: "/assets/frameworks/vs.png",
                },
                {
                    img: "/assets/frameworks/vscode.png",
                },
                {
                    img: "/assets/frameworks/anaconda.png",
                },
                {
                    img: "/assets/frameworks/pycharm.png",
                },
                {
                    img: "/assets/frameworks/jupyter.png",
                }
            ]
        
        },
]
    return (
        
<div className="surface-0 text-center border-50 shadow-3 border-round-xl p-3">
    <div className="text-center mb-3 font-bold text-3xl">
        <span className="text-900">My </span>
        <span className="text-blue-600">Skillset</span>
    </div>
   {skilllist.map((skill,index)=>(<>
        <div className="slider text-500 mt-3 mb-1"><span>{skill.label}</span></div>
        <div key={index} className='grid flex justify-content-center justify-space-between p-3'>
            {skill.list.map((stack,i)=>
            <div className="col-4 md:col-3 lg:col-2 flex flex-column" key={i}>
                <div className="surface-0 shadow-2 border-1 border-50 border-round h-3rem">
                    <div className="icocontainer flex justify-content-center h-full mb-3">
                        <img src={stack.img} alt={stack.img} />
                    </div>   
                </div>
            { stack.level &&
                <div className="flex justify-content-center w-full p-3">
                    <MeterGroup values={[{ label: null, value: stack.level}]} className='w-full'/>
                </div>
            }
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