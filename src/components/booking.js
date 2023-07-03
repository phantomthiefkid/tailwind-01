import React from "react";
import { classes } from "../class/listOfClass";
import { Link } from "react-router-dom";
export default function Booking() {
    return (
        <div>
            <div className="grid grid-cols-4">
                <div className="bg-gray-200"><img className="w-auto h-auto" src="/image/poster1.png" alt="yoga" /></div>
                <div className="bg-gray-200"><img className="w-auto h-auto" src="/image/poster2.png" alt="yoga" /></div>
                <div className="bg-gray-200"><img className="w-auto h-auto" src="/image/poster3.png" alt="yoga" /></div>
                <div className="bg-gray-200"><img className="w-auto h-auto" src="/image/poster4.png" alt="yoga" /></div>
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
                <div className="space-y-2 mt-15 mb-18">
                    <h2 className="text-center text-5xl font-serif">Classes</h2>
                    <nav class="text-xl flex justify-center">
                        <ol class="list-none p-10 inline-flex">
                            <li class="flex items-center ms-4 " >
                                <a href="#" class="text-gray-500">Yogamo</a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H4a1 1 0 010-2h6.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </li>
                            <li class="flex items-center ms-1">
                                <a href="#" className="text-gray-500">Classes</a>

                            </li>

                        </ol>
                    </nav>
                </div>


                <div className="grid grid-cols-3 gap-3 space-x-3">
                    {classes.map((Data) => (


                        <div className="bg-gray-100 box-content h-auto w-auto p-4" key={Data.idClass}>
                            <div className="aspect-h-1 aspect-w-1 w-50 overflow-hidden rounded-sm bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Link to={`detail/${Data.idClass}`}><img className="w-auto h-auto" src={Data.img} alt={Data.name} /></Link>
                            </div>

                            <div className="mt-3">
                                <h5 className="text-center text-3xl font-serif">{Data.name}</h5>
                                <p className="mt-4 font-serif">Duration: 30m</p>
                                <p className="mt-4 font-serif">Instructor: {Data.instructor}</p>
                                <p className="mt-1 text-lg font-serif">Price:<b>${Data.price}</b></p>
                                <button className="mt-3 font-serif bg-green-400 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded-3xl w-40">Book Now</button>
                            </div>


                        </div>
                    ))}
                </div>


            </div>

        </div>

    )
}