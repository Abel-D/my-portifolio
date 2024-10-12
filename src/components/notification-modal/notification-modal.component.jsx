import React,{useState, useEffect} from 'react';
import './notification-modal.component.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function NotificationModalComponent({content}) {

    const [open, setOpen] = useState(true);

    
    return (
        <Dialog header={ '' } visible={open} onHide={() => {if (!open) return; setOpen(false); }}
            style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            className='flex justify-content-center p-6'>
                {content}
        </Dialog>
    )
}

export default NotificationModalComponent;