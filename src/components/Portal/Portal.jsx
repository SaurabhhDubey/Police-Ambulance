import React from "react";

export default function Portal () {

    return (
       <div
       className="h-screen bg-cover opacity-90 flex justify-center bg-center bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1741441911/frontPortalimage_ulbasm.png')]">

       <div className="flex space-x-12 p-36 " >
        <div className="w-60 h-60 bg-blue-500/70 text-white p-4 flex justify-center items-center rounded-xl">
        box 1
        </div>
        <div className="w-60 h-60 bg-green-500/70 text-white p-4 flex justify-center items-center rounded-xl">
        box 2
        </div>
       </div>

       </div>
        
    );
}