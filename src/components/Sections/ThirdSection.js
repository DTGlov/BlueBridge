import React from 'react';
import ImageSection from "./ImageSection/ImageSection";
import DetailSection from "./DetailSection/DetailSection";
import { ThirdData } from './Data/SectionData';

function ThirdSection() {
   const { url, heading, title, details } = ThirdData;
   return (
     <div data-aos="fade-up" className="third-section">
       <ImageSection url={url} />
       <DetailSection heading={heading} title={title} details={details} />
     </div>
   );
}

export default ThirdSection
