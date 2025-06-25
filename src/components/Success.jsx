import React from 'react';

const Success = ({ resetForm }) => (
  <div className="text-center">
    <h2 className="text-success mb-4">🎉 Thank you for your feedback!</h2>
    <button className="btn btn-outline-primary" onClick={resetForm}>Back to Step 1</button>
  </div>
);

export default Success;
