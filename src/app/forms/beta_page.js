// app/page.js
'use client';

import { useState } from 'react';

// Data for form options
const stepTwoOptions = [
    'Other', '21st Century Insurance', 'AAA Insurance', 'Allied', 'Allstate',
    'American Family', 'American National Insurance', 'Amica', 'Auto Owners',
    'Cal Farm Insurance', 'Chubb Insurance', 'Citizens',
];

const stepThreeOptions = [
    'less than 1 year', '1 to 2 years', '2 to 3 years', '3 to 4 years',
    '4 to 5 years', '5 years or more',
];

const carYears = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
    2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
    2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995,
    1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985
];

// Main component
export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        insured: '',
        insurer: '',
        insuredLength: '',
        homeOwnership: '',
        carYear: '',
        carMake: '',
    });

    

    // Function to handle moving to the next step
    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    // Function to handle moving to the previous step
    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    // Function to update the form data
    const updateFormData = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    // Final submission logic
    const handleSubmit = () => {
        console.log('Final Form Data:', formData);
        alert('Form Submitted! Check the console for data.');
        // You can send this data to an API here
    };

    // Conditional Rendering Logic
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <section>
                        <h1>Are you currently insured?</h1>
                        <p>This won’t affect your rates — it just helps us find the right options.</p>
                        <div className='button-group'>
                            <button onClick={() => { updateFormData('insured', 'Yes'); nextStep(); }}>Yes</button>
                            <button onClick={() => { updateFormData('insured', 'No'); nextStep(); }}>No</button>
                        </div>
                        <p className='progress'>Progress 20%</p>
                    </section>
                );

            case 2:
                return (
                    <section>
                        <h1>What is the name of your current insurer?</h1>
                        <p>Select 'Other / Not listed' if you don't see your insurer</p>
                        <div className='grid'>
                            {stepTwoOptions.map((name) => (
                                <button
                                    key={name}
                                    className='grid-button'
                                    onClick={() => { updateFormData('insurer', name); nextStep(); }}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className='prev-button'>Previous</button>
                        <p className='progress'>Progress 22%</p>
                    </section>
                );

            case 3:
                return (
                    <section>
                        <h1>Insurance Details</h1>
                        <p>Insured Length</p>
                        <div className='grid'>
                            {stepThreeOptions.map((name) => (
                                <button
                                    key={name}
                                    className='grid-button'
                                    onClick={() => { updateFormData('insuredLength', name); nextStep(); }}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className='prev-button'>Previous</button>
                        <p className='progress'>Progress 25%</p>
                    </section>
                );

            case 4:
                return (
                    <section>
                        <h1>Do you own or rent your house?</h1>
                        <p>This can unlock bundled discounts.</p>
                        <div className='button-group'>
                            <button onClick={() => { updateFormData('homeOwnership', 'Own'); nextStep(); }}>Own</button>
                            <button onClick={() => { updateFormData('homeOwnership', 'Rent'); nextStep(); }}>Rent</button>
                        </div>
                        <button onClick={prevStep} className='prev-button'>Previous</button>
                        <p className='progress'>Progress 30%</p>
                    </section>
                );

            case 5:
                return (
                    <section>
                        <h1>What's your car year?</h1>
                        <p>Let’s start with your car’s year—it helps us get accurate quotes for you.</p>
                        <div className='grid grid-small'>
                            {carYears.map((year) => (
                                <button
                                    key={year}
                                    className='grid-button'
                                    onClick={() => { updateFormData('carYear', year); nextStep(); }}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className='prev-button'>Previous</button>
                        <p className='progress'>Progress 40%</p>
                    </section>
                );

            case 6:
                return (
                    <section>
                        <h1>Vehicle Make</h1>
                        <p>Let’s find your vehicle’s make.</p>
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Search vehicle make'
                                onChange={(e) => updateFormData('carMake', e.target.value)}
                                value={formData.carMake}
                            />
                        </div>
                        <button onClick={prevStep} className='prev-button'>Previous</button>
                        <button onClick={handleSubmit} className='submit-button'>Submit</button>
                        <p className='progress'>Progress 100%</p>
                    </section>
                );

            default:
                return (
                    <section>
                        <h1>Form Complete!</h1>
                        <p>Thank you for submitting your information.</p>
                        <button onClick={() => setStep(1)} className='prev-button'>Start Over</button>
                    </section>
                );
        }
    };

    return (
        <div className='form-container'>
            {renderStep()}
        </div>
    );
}