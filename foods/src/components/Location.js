import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Location() {
    return <nav className="min-w-full pt-20 px-4 flex justify-center items-center gap-20">
        <div className="w-1/2 items-center">
            <div className="mb-2 pr-10">
                <h1 className="font-sans tracking-wide">Enter Your Current Location To Order, <br /> <b className="text-primary-100">Foodiess!</b></h1>
            </div>
            <div className="h-10 w-auto flex justify-between items-center shadow-xl mt-10 pl-2 rounded-xl">
                <input className="text-[8px] w-96 rounded-md border pl-4 p-1" type="text" placeholder="Your city and Street number" />
                <div className="flex justify-center items-center gap-3 mr-2">
                    <button className="text-[9px] text-gray-200 w-15 rounded bg-primary-100 py-1 px-1">Next Step..</button>
                    <button className="text-[8px] py-[3px] px-1 w-18 text-primary-100 border rounded flex justify-center items-center gap-1">Current
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" class="bi bi-crosshair" viewBox="0 0 16 16">
                            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="w-40 h-40 bg-black">

        </div>
    </nav>
}

export default Location;
