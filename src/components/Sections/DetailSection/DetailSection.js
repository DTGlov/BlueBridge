import React from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

function DetailSection({heading,title,details,color}) {
    return (
      <div className="detail-section">
            <p className="detail-head">{ title}</p>
            <h1 className={color?"detail-heading text-white":"detail-heading"}>{ heading}</h1>
            <p className={color ? "detail-text text-white" : "detail-text"}>
         {details}
            </p>
            <button className={color? "detail-button bg-white" : "detail-button"}>
                <p className={color ? "text-sm text-black " : "button-text"}> Learn More</p>
                <ArrowNarrowRightIcon className={color?"h-4 text-black" : "button-icon"}/>
            </button>
      </div>
    );
}

export default DetailSection
