import React from 'react';
import ImageSection from "./ImageSection/ImageSection";
import DetailSection from "./DetailSection/DetailSection";
import { SecondData } from './Data/SectionData';

function SecondSection() {
    const { url, heading, title, details,color } = SecondData;
    return (
      <div data-aos="fade-up" className="second-section">
        <ImageSection url={url} />
            <DetailSection heading={heading} title={title} details={details} color={ color}/>
      </div>
    );
}

export default SecondSection
