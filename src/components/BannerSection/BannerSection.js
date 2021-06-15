import React from 'react';
import TextSection from './TextSection/TextSection';
import FormSection from './FormSection/FormSection';

function BannerSection() {
    return (
      <div className="banner banner-container">
        <div className="banner-items">
                <TextSection />
                <FormSection/>
        </div>
      </div>
    );
}

export default BannerSection
