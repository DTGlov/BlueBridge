import React from 'react'
import ImageSection from './ImageSection/ImageSection';
import DetailSection from './DetailSection/DetailSection';
import { firstData } from './Data/SectionData';

function FirstSection() {
    const {url,heading,title,details} = firstData
    return (
        <div data-aos="fade-up" className="first-section">
            <ImageSection url={url} />
            <DetailSection heading={heading} title={title} details={ details}/>
        </div>
    )
}

export default FirstSection
