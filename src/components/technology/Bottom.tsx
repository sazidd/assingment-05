import React from 'react';
import BLogo from "../../assets/logo-text.png";


const Bottom = () => {
    return (
        <div
        style={{marginTop: 80, marginBottom: 20}}
         className='flex gap-50'>
            <div>
                <img src={BLogo} alt="" />
                <p className='text-[#64748B]'>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <div className='flex gap-5'>
                    <ul className='text-[18px] font-semibold text-[#475569]'>GitHub</ul>
                    <ul className='text-[18px] font-semibold text-[#475569]'>Twitter</ul>
                    <ul className='text-[18px] font-semibold text-[#475569]'>LinkedIn</ul>
                </div>

            </div>
            <div className='flex gap-20 sm:gap-25 md:gap-30'>

                <div>
                    <h1 className='text-[18px] font-bold text-[#0F172A]'>PRODUCT</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>Home</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>Technologies</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>Projects</h1>

                </div>

                <div>
                    <h1 className='text-[18px] font-bold text-[#0F172A]'>Company</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>About</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>Contact</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>Careers</h1>

                </div>

                <div>
                    <h1 className='text-[18px] font-bold text-[#0F172A]'>Legal</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B]'>Privacy Policy</h1>
                    <h1 className='text-[15px] font-normal text-[#64748B] gap-2.5 whitespace-nowrap'>Terms Of Service</h1>

                </div>
            </div>

        </div>
    );
};

export default Bottom;