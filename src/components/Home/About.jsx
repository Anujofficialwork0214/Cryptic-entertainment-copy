import React from 'react'
import Logo from '../../assets/logo.jpg'
import AnimatedTitle from '../../animations/AnimatedTitle'


const data = {
    desc: "Cryptic Entertainments is an India-based production house focused on bringing the Indian tech story. We are continuously showcasing the new emerging tech stories out of India in new fields like Blockchain, AI, Metaverse etc.",
    desc2: "Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.",
    image: "/about/about3.jpeg"
}

const AboutHome = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><rect width="100%" height="100%" className='fill-slate-100 dark:fill-slate-900'/>
<path className='fill-slate-200 dark:fill-slate-800' fillOpacity="1" d="M0,64L0,160L68.6,160L68.6,160L137.1,160L137.1,96L205.7,96L205.7,64L274.3,64L274.3,64L342.9,64L342.9,224L411.4,224L411.4,192L480,192L480,32L548.6,32L548.6,128L617.1,128L617.1,32L685.7,32L685.7,288L754.3,288L754.3,96L822.9,96L822.9,192L891.4,192L891.4,128L960,128L960,96L1028.6,96L1028.6,64L1097.1,64L1097.1,256L1165.7,256L1165.7,96L1234.3,96L1234.3,192L1302.9,192L1302.9,128L1371.4,128L1371.4,96L1440,96L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"></path></svg>
        <div className='md:py-[100px] md:px-20 px-5 py-5 bg-slate-200 dark:bg-gray-800'>
            {/* <h3 className='font-semibold text-gray-900 dark:text-white text-4xl text-center mb-8'>Web3 Partner</h3> */}
            <div className='flex justify-center items-center gap-2 mb-8'>
                <AnimatedTitle title={'About'} classes={'font-semibold text-gray-900 dark:text-white text-4xl text-center'} />
                <AnimatedTitle title={'Us'} classes={'font-semibold text-rose-500 dark:text-rose-500 text-4xl text-center'} />
            </div>
            
            
            <div className='flex justify-center items-center flex-col md:flex-row gap-5 '>
                <div className='rounded-3xl border-[12px] border-slate-300/50 dark:border-slate-700/50 md:w-[500px] w-[300px]'>
                    <img src={data.image} alt='' className='w-full h-full rounded-2xl'/>
                </div>
                <div className='w-full'>
                    <h3 className='md:text-xl text-lg text-slate-900 dark:text-slate-100 font-thin mb-5'>{data.desc} 
                    </h3>
                    <h3 className='md:text-xl text-lg text-slate-900 dark:text-slate-100 font-thin'>{data.desc2}</h3>
                </div>
                
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><rect width="100%" height="100%" className='fill-slate-100 dark:fill-slate-900'/>
<path className='fill-slate-200 dark:fill-slate-800'  fillOpacity="1" d="M0,64L0,160L68.6,160L68.6,160L137.1,160L137.1,96L205.7,96L205.7,64L274.3,64L274.3,64L342.9,64L342.9,224L411.4,224L411.4,192L480,192L480,32L548.6,32L548.6,128L617.1,128L617.1,32L685.7,32L685.7,288L754.3,288L754.3,96L822.9,96L822.9,192L891.4,192L891.4,128L960,128L960,96L1028.6,96L1028.6,64L1097.1,64L1097.1,256L1165.7,256L1165.7,96L1234.3,96L1234.3,192L1302.9,192L1302.9,128L1371.4,128L1371.4,96L1440,96L1440,0L1371.4,0L1371.4,0L1302.9,0L1302.9,0L1234.3,0L1234.3,0L1165.7,0L1165.7,0L1097.1,0L1097.1,0L1028.6,0L1028.6,0L960,0L960,0L891.4,0L891.4,0L822.9,0L822.9,0L754.3,0L754.3,0L685.7,0L685.7,0L617.1,0L617.1,0L548.6,0L548.6,0L480,0L480,0L411.4,0L411.4,0L342.9,0L342.9,0L274.3,0L274.3,0L205.7,0L205.7,0L137.1,0L137.1,0L68.6,0L68.6,0L0,0L0,0Z"></path></svg>
        </>
        
    )
}

export default AboutHome