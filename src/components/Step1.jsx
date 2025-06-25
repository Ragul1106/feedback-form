import React from 'react';

const Step1 = ({ nextStep, handleChange, values }) => (
  <div>
    <h3 className="mb-4">Step 1: Personal Info</h3>
    <div className="mb-3">
      <label>Name</label>
      <input type="text" name="name" className="form-control" value={values.name} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label>Email</label>
      <input type="email" name="email" className="form-control" value={values.email} onChange={handleChange} required />
    </div>
    <button className="btn btn-primary" onClick={nextStep}>Next</button>
  </div>
);

export default Step1;
