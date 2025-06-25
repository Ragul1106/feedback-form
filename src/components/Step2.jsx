import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => (
  <div>
    <h3 className="mb-4">Step 2: Feedback</h3>
    <div className="mb-3">
      <label>Feedback</label>
      <textarea name="feedback" className="form-control" value={values.feedback} onChange={handleChange} rows="4" required />
    </div>
   
     <h3 className="mb-4"> Rate Us</h3>
      <div className="mb-3">
        <label>Rating</label>
        <select name="rating" className="form-select" defaultValue={values.rating} onChange={(e) => values.rating = e.target.value}>
          <option value="">Select</option>
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
          <option>Poor</option>
        </select>
      </div>
       <div className="d-flex justify-content-between">
      <button className="btn btn-secondary" onClick={prevStep}>Back</button>
      <button className="btn btn-primary" onClick={nextStep}>Next</button>
    </div>
  </div>
);

export default Step2;
