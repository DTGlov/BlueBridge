import React from 'react';

const now = new Date();


function Copyright() {

    return (
        <div className="w-full flex flex-col h-20  bg-[#0b253c] text-gray-300 items-center justify-center">
            <h1>&copy; Copyright {now.getFullYear()}</h1>
            <p className="italic text-xs mt-2"> DTGLOVER</p>
        </div>
    )
}

export default Copyright
