import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Success from './components/Success';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const resetForm = () => {
    setStep(1);
    setFormData({ name: '', email: '', feedback: '', rating: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (

    <div className="app-container">
      <div className="text-center my-4">
        <h2 className="fw-bold text-primary">Feedback Form</h2>
      </div>

      <ToastContainer />
      {step === 1 && <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />}
      {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} values={formData} toast={toast} />}
      {step === 4 && <Success resetForm={resetForm} />}
    </div>
  );
};

export default App;
