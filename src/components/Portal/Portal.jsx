import React from "react";

export default function Portal () {

    return (
       <div
       className="h-screen bg-cover opacity-90 flex justify-center items-center bg-center bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1741441911/frontPortalimage_ulbasm.png')]">

       <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 p-10 md:p-36 " >
        <div className="w-40 h-40 md:w-60 md:h-60  p-4 flex justify-center items-center rounded-xl hover:cursor-pointer opacity-85 "
         style={{
            backgroundImage:
              "  url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1742048349/download-Photoroom_nblqig.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
        </div>
        <div className="w-40 h-40 md:w-60 md:h-60  p-4 flex justify-center items-center rounded-xl hover:cursor-pointer opacity-85"
        style={{
            backgroundImage:
              "  url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1742049117/portrait_of_a_male_doctor_Stock_Illustration-Photoroom_kx2wo1.png')",
            backgroundSize: "cover",
            
          }}
        >
        </div>
       </div>

       </div>
        
    );
}