import React from 'react'

function FormSection() {
    return (
      <div className="form-container">
        <div className="form-block">
          <h1 className="form-heading">Getting started is easy</h1>
          <p className="form-text">Enter your Information below to request a demo</p>
          <form className="form">
            <input type="text" className="form-input" placeholder="Full Name"/>
            <input type="text" className="form-input" placeholder="Email"/>
            <input type="text" className="form-input" placeholder="Company"/>
            </form>
             <div className="form-button">Request Demo</div>
        </div>
      </div>
    );
}

export default FormSection
