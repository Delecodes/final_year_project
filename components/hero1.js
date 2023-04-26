import Link from "next/link";
import React from "react";
import Searchbar from "./searchbar";

export default function Hero1(){
    return(
        <>
        <div className="h-4/6 border-t pt-36">
        {/* <Searchbar/> */}
           <div className="container flex items-start justify-start w-[70vw]">
           <div className="w-full flex h-full flex-col ">
           <div>
                <h1 className="text-7xl text-violet-700 font-semibold">Reliable</h1>
                <h3 className="text-4xl font-light">logistics you can always count on.</h3> 
           </div>            
           <div className="pt-4">
                <button className="ease-in-out bg-violet-600 rounded-2xl w-40 p-2 text-white"><Link a href="">Learn more</Link></button>
           </div>
                    
            </div>
            <div className="w-full">
                <img src="trns.svg" className="max-h-full min-h-14 mr-5" alt="svg-file"></img>
            </div>
           </div>
            {/* <Searchbar/> */}
        </div>
        <div className="px-32">
            <Searchbar/>
        </div>
        <div className="bg-slate-50 pt-24 flex flex-col">
            <div className="justify-center text-center text-4xl pb-16">
                <h1>Delivery unlimited</h1>
            </div>
            <div className="flex h-72 text-center">
                <div className="w-full px-24">
                    <img src="bitmap.png" className="h-24 mx-auto rounded-full"></img>
                    <h3 className="font-bold">Sustainable logistics</h3>
                    <p>Greener freight logistics that helps your bottom line, the environment and community.</p>
                </div>

                <div className="w-full px-24">
                    <img src="bitmap3.png" className="h-24 mx-auto rounded-full"></img>
                    <h3 className="font-bold">Flexible solutions</h3>
                    <p>Customizable solutions you can trust to fit the demands of your customers.</p>
                </div>

                <div className="w-full px-24">
                    <img src="bitmap2.png" className="h-24 mx-auto rounded-full"></img>
                    <h3 className="font-bold">Supply chain resilience</h3>
                    <p>Reliable logistics solutions to meet the ever-changing market needs of your business.</p>
                </div>
            </div>
        </div>
        </>
    )
};