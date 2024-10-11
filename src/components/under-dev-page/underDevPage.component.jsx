const UnderDevPageComponent =(props)=> {

    return (
        <div className='w-full justify-content-center text-center border-solid border-blue-300 p-6'>
            <span className='text-900 font-medium'>{props.message}</span>
        </div>
    )
}