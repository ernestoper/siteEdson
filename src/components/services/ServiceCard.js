function ServiceCard({data,index}){
    return(
        <div
        onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-orange-500')
            title_element.classList.remove('text-gray-900')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.remove('text-orange-500')
            title_element.classList.add('text-gray-900')
        }} 
        className="w-full relative p-8 lg:h-[200pm] hover:-translate-y-1 transition duration-300 ease-in-out bg-neon">
            {/* <div className="w-full ">
                <img src={data.img} alt='' className='w-10 h-10'/>
                <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.title}</p>
            </div> */}
            <div className='flex bottom-0  left-0 rounded-t-2xl  bg-magenta  mt-2' >
                {/* <img src={data.img} alt=''className='w-30 h-30'/> */}
            
                <img className='w-20 h-20 md:w-20 md:h-20' src={data.img} alt='warning'/>
                <div>
                    <div className='text-xl font-medium text-pretoneon'> {data.title}</div>
                    <p className='text-pretoneon'> {data.minidescription}</p>
                </div>


            </div>
                
            <div className="flex bottom-0 left-0 rounded-b-2xl p-1 h-50 bg-salmao">
                <h2 id={index} className="items-end text-xl font-semibold text-gray-900 pt-8">{data.description}</h2>
            </div>
        </div>
    )
}
export default ServiceCard