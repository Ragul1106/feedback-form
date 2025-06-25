import React from 'react';

const Step3 = ({ nextStep, prevStep, values }) => {
  const handleSubmit = () => {
    console.log("Submitted data:", values);
    nextStep();
  };

  return (
    <div className="container mt-5">
      <h4>Step 3: Review & Submit</h4>
      <ul className="list-group mb-3">
        <li className="list-group-item"><strong>Name:</strong> {values.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {values.email}</li>
        <li className="list-group-item"><strong>Feedback:</strong> {values.feedback}</li>
        <li className="list-group-item"><strong>Rating:</strong> {values.rating}</li>
      </ul>
      <button className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
      <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
