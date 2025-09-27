'use client';
import { useState } from "react";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";

const stepTow = [
    'Other',
    '21st Century Insurance',
    'AAA Insurance',
    'Allied',
    'Allstate',
    'American Family',
    'American National Insurance',
    'Amica',
    'Auto Owners',
    'Cal Farm Insurance',
    'Chubb Insurance',
    'Citizens',
]
const stepThree = [
    'less than 1 year',
    '1 to 2 years',
    '2 to 3 years',
    '3 to 4 years',
    '4 to 5 years',
    '5 years or more',
]

const carYears = [
    2024, 2023, 2022, 2021, 2020,
    2019, 2018, 2017, 2016, 2015,
    2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007, 2006, 2005,
    2004, 2003, 2002, 2001, 2000,
    1999, 1998, 1997, 1996, 1995,
    1994, 1993, 1992, 1991, 1990,
    1989, 1988, 1987, 1986, 1985
]
const stepSix = [
    'Acura', 'Aston Martin', 'Audi', 'Azure Dynamics', 'Bentley',
    'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Chevrolet',
    'Chrysler', 'BMW', 'BYD', 'Cadillac', 'Chevrolet',
]
const stepEight = ['530e', '530i xDrive', '530i', '530e xDrive', '540i', '540i xDrive', 'I don’t know',]
const stepNine = ['Commuting or personal use', 'Commute to school', 'Pleasure', 'Business', 'Commercial', 'Rideshare',]
const stepTen = ['5 Miles', '10 Miles', '15 Miles', '25 Miles', '50 Miles', '75+ Miles',]
const stepEleven = ['Owned', 'Financed', 'Leased',]
const stepTwelve = ['Yes', 'No',]
const Gender = ['Male', 'Female', 'Female',]
const stemEignteen = ['High School/GED', 'Bachelor’s Degree', 'Master’s / Doctorate', 'No Diploma']

export default function Disclaimer() {
    // Al States
    const [step, setStep] = useState(1)
    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    let MainContent = () => {
        switch (step) {
            case 1:
                {/* Step One */ }
                return (
                    <section className='AreyouCurrentlyInsured'>
                        <div className='Container'>
                            <div className='AreyouCurrentlyInsuredWaper'>
                                <div className='AreyouCurrentlyInsuredProgress'>Progress 20%</div>
                                <h1 className='AreyouCurrentlyInsuredTitel'>Are you currently insured?</h1>
                                <p className='AreyouCurrentlyInsuredText'>This won’t affect your rates — it just helps us find the right options.</p>
                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >Yes</Link>
                                    <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >No</Link>
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Tow */ }
            case 2:
                return (
                    <section className='FormStepTwo'>
                        <div className='Container'>
                            <div className='FormStepTwoWaper'>
                                <div className='FormStepTwoProgress'>Progress 22%</div>
                                <h1 className='FormStepTwoTitel'>What is the name of your current insurer?</h1>
                                <p className='FormStepTwoSubText'>Select 'Other / Not listed' if you don't see your insurer</p>

                                <div className='FormStepTwoGrid'>
                                    {stepTow.map((name) => (
                                        <Link key={name} onClick={() => { nextStep() }} href='' className='FormStepTwoButton'>{name}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Three */ }
            case 3:
                return (
                    <section className='FormStepTwo'>
                        <div className='Container'>
                            <div className='FormStepTwoWaper'>
                                <div className='FormStepTwoProgress'>Progress 25%</div>
                                <h1 className='FormStepTwoTitel'>Insurance Details</h1>
                                <p className='FormStepTwoSubText'>Insured Length</p>

                                <div className='FormStepTwoGrid'>
                                    {stepThree.map((name) => (
                                        <Link key={name} onClick={() => { nextStep() }} href='' className='FormStepTwoButton'>{name}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Four */ }
            case 4:
                return (
                    <section className='AreyouCurrentlyInsured'>
                        <div className='Container'>
                            <div className='AreyouCurrentlyInsuredWaper'>
                                <div className='AreyouCurrentlyInsuredProgress'>Progress 30%</div>
                                <h1 className='AreyouCurrentlyInsuredTitel'>Do you own or rent your house?</h1>
                                <p className='AreyouCurrentlyInsuredText'>This can unlock bundled discounts.</p>
                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >Own</Link>
                                    <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >Rent</Link>
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* StepFiver */ }
            case 5:
                return (
                    <section className='FormStepFive'>
                        <div className='Container'>
                            <div className='FormStepFiveWaper'>
                                <div className='FormStepFiveProgress'>Progress 20%</div>
                                <h1 className='FormStepFiveTitel'>What's your car year?</h1>
                                <p className='FormStepFiveSubText'>Let's start with your car's year—it helps us get accurate quotes for you.</p>

                                <div className='FormStepFiveGrid'>
                                    {carYears.map((year) => (
                                        <Link key={year} onClick={() => { nextStep() }} href='' className='FormStepFiveButton'>{year}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Six */ }
            case 6:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>2024</div>
                                <h1 className='FormStepSixTitel'>Vehicle Make</h1>
                                <p className='FormStepSixSubText'>Let’s start with your car’s year—it helps us get accurate quotes for you.</p>

                                <div className='FormStepSixSearch'>
                                    <span className='FormStepSixSearchIcon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FD9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <input className='FormStepSixSearchInput' type='text' placeholder='Search vehicle make' />
                                </div>

                                <div className='FormStepSixGrid'>
                                    {stepSix.map((make) => (
                                        <Link key={make} onClick={() => { nextStep() }} href='' className='FormStepSixCard'>
                                            <div className='FormStepSixCardIcon'>
                                                <Image src="/caricon.webp" alt="car" width={44} height={24} />
                                            </div>
                                            <div className='FormStepSixCardText'>{make}</div>
                                        </Link>
                                    ))};
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Seven */ }
            case 7:
                return (
                    <section className='FormStepFive'>
                        <div className='Container'>
                            <div className='FormStepFiveWaper'>
                                <div className='FormStepFiveProgress'>Progress 20%</div>
                                <h1 className='FormStepFiveTitel'>Vehicle Model</h1>
                                <p className='FormStepFiveSubText'>Let’s start with your car’s year—it helps us get accurate quotes for you.</p>

                                <div className='FormStepSixSearch'>
                                    <span className='FormStepSixSearchIcon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FD9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <input className='FormStepSixSearchInput' type='text' placeholder='Search vehicle model' />
                                </div>

                                <div className='FormStepFiveGrid'>
                                    {carYears.map((year) => (
                                        <Link key={year} onClick={() => { nextStep() }} href='' className='FormStepFiveButton'>{year}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Eight */ }
            case 8:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>Audi / 5-Series</div>
                                <h1 className='FormStepSixTitel'>What’s your car trim?</h1>
                                <p className='FormStepSixSubText'>Let’s start with your car’s year—it helps us get accurate quotes for you.</p>

                                <div className='FormStepSixSearch'>
                                    <span className='FormStepSixSearchIcon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FD9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <input className='FormStepSixSearchInput' type='text' placeholder='Search vehicle make' />
                                </div>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepEight.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Nine */ }
            case 9:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>Audi / 5-Series</div>
                                <h1 className='FormStepSixTitel'>What’s the main use of your car?</h1>
                                <p className='FormStepSixSubText'>Let’s start with your car’s year—it helps us get accurate quotes for you.</p>

                                <div className='FormStepSixSearch'>
                                    <span className='FormStepSixSearchIcon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FD9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <input className='FormStepSixSearchInput' type='text' placeholder='Search vehicle make' />
                                </div>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepNine.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Ten */ }
            case 10:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>Audi / 5-Series</div>
                                <h1 className='FormStepSixTitel mb-5'>How many miles do you drive this car daily?</h1>

                                <div className='FormStepSixSearch'>
                                    <span className='FormStepSixSearchIcon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FD9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <input className='FormStepSixSearchInput' type='text' placeholder='Search vehicle make' />
                                </div>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepTen.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Eleven */ }
            case 11:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>Audi / 5-Series</div>
                                <h1 className='FormStepSixTitel mb-5'>Do you own or lease this car?</h1>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepEleven.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Twelve */ }
            case 12:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>Audi / 5-Series</div>
                                <h1 className='FormStepSixTitel mb-3'>Would you like to include full coverage?</h1>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepTwelve.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>
                                <div className='WhatTheDifferentInForm'>
                                    What the different coverages mean?
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
                {/* Step Thirteen */ }
            case 13:
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <div className='FormStepSixYear'>Audi / 5-Series</div>
                                <h1 className='FormStepSixTitel mb-3'>Would you like to add another vehicle?</h1>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepTwelve.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 14:
                {/* Step Fourteen */ }
                return (
                    <section className='FormStepFive'>
                        <div className='Container'>
                            <div className='AreyouCurrentlyInsuredWaper'>
                                <div className='AreyouCurrentlyInsuredProgress'>Progress 20%</div>
                                <h1 className='AreyouCurrentlyInsuredTitel'>What’s your date of birth?</h1>
                                <p className='AreyouCurrentlyInsuredText'>We ask for these details to find the most accurate prices. Your information in only shared with trusted insurers.</p>

                                <Form className='FormStepfourteenInputFormWaper'>
                                    <div className='FormStepfourteenInputWaper'>
                                        <input type='text' className='FormStepfourteenInput' placeholder='MM' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M4.10352 19.9375H19.2285C19.7755 19.9375 20.3001 19.7202 20.6869 19.3334C21.0737 18.9466 21.291 18.422 21.291 17.875V5.5C21.291 4.95299 21.0737 4.42839 20.6869 4.04159C20.3001 3.6548 19.7755 3.4375 19.2285 3.4375H17.8535V2.0625H16.4785V6.1875H17.8535V4.8125H19.2285C19.4109 4.8125 19.5857 4.88493 19.7147 5.01386C19.8436 5.1428 19.916 5.31766 19.916 5.5V6.875H3.41602V5.5C3.41602 5.31766 3.48845 5.1428 3.61738 5.01386C3.74631 4.88493 3.92118 4.8125 4.10352 4.8125H5.47852V6.1875H6.85352V4.8125H15.791V3.4375H6.85352V2.0625H5.47852V3.4375H4.10352C3.55651 3.4375 3.0319 3.6548 2.64511 4.04159C2.25831 4.42839 2.04102 4.95299 2.04102 5.5V7.5625C2.04102 7.74484 2.11345 7.9197 2.24238 8.04864C2.37131 8.17757 2.54618 8.25 2.72852 8.25H19.916V17.875C19.916 18.0573 19.8436 18.2322 19.7147 18.3611C19.5857 18.4901 19.4109 18.5625 19.2285 18.5625H4.10352C3.92118 18.5625 3.74631 18.4901 3.61738 18.3611C3.48845 18.2322 3.41602 18.0573 3.41602 17.875V8.9375H2.04102V17.875C2.04102 18.422 2.25831 18.9466 2.64511 19.3334C3.0319 19.7202 3.55651 19.9375 4.10352 19.9375Z" fill="#4665A9" />
                                            <path d="M4.79102 9.625H6.16602V11H4.79102V9.625Z" fill="#4665A9" />
                                            <path d="M8.91602 9.625H10.291V11H8.91602V9.625Z" fill="#4665A9" />
                                            <path d="M13.041 9.625H14.416V11H13.041V9.625Z" fill="#4665A9" />
                                            <path d="M17.166 9.625H18.541V11H17.166V9.625Z" fill="#4665A9" />
                                            <path d="M4.79102 12.375H6.16602V13.75H4.79102V12.375Z" fill="#4665A9" />
                                            <path d="M8.91602 12.375H10.291V13.75H8.91602V12.375Z" fill="#4665A9" />
                                            <path d="M13.041 12.375H14.416V13.75H13.041V12.375Z" fill="#4665A9" />
                                            <path d="M17.166 12.375H18.541V13.75H17.166V12.375Z" fill="#4665A9" />
                                            <path d="M4.79102 15.125H6.16602V16.5H4.79102V15.125Z" fill="#4665A9" />
                                            <path d="M8.91602 15.125H10.291V16.5H8.91602V15.125Z" fill="#4665A9" />
                                            <path d="M13.041 15.125H14.416V16.5H13.041V15.125Z" fill="#4665A9" />
                                            <path d="M17.166 15.125H18.541V16.5H17.166V15.125Z" fill="#4665A9" />
                                        </svg>
                                    </div>
                                    <div className='FormStepfourteenInputWaper'>
                                        <input type='text' className='FormStepfourteenInput' placeholder='DD' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M4.10352 19.9375H19.2285C19.7755 19.9375 20.3001 19.7202 20.6869 19.3334C21.0737 18.9466 21.291 18.422 21.291 17.875V5.5C21.291 4.95299 21.0737 4.42839 20.6869 4.04159C20.3001 3.6548 19.7755 3.4375 19.2285 3.4375H17.8535V2.0625H16.4785V6.1875H17.8535V4.8125H19.2285C19.4109 4.8125 19.5857 4.88493 19.7147 5.01386C19.8436 5.1428 19.916 5.31766 19.916 5.5V6.875H3.41602V5.5C3.41602 5.31766 3.48845 5.1428 3.61738 5.01386C3.74631 4.88493 3.92118 4.8125 4.10352 4.8125H5.47852V6.1875H6.85352V4.8125H15.791V3.4375H6.85352V2.0625H5.47852V3.4375H4.10352C3.55651 3.4375 3.0319 3.6548 2.64511 4.04159C2.25831 4.42839 2.04102 4.95299 2.04102 5.5V7.5625C2.04102 7.74484 2.11345 7.9197 2.24238 8.04864C2.37131 8.17757 2.54618 8.25 2.72852 8.25H19.916V17.875C19.916 18.0573 19.8436 18.2322 19.7147 18.3611C19.5857 18.4901 19.4109 18.5625 19.2285 18.5625H4.10352C3.92118 18.5625 3.74631 18.4901 3.61738 18.3611C3.48845 18.2322 3.41602 18.0573 3.41602 17.875V8.9375H2.04102V17.875C2.04102 18.422 2.25831 18.9466 2.64511 19.3334C3.0319 19.7202 3.55651 19.9375 4.10352 19.9375Z" fill="#4665A9" />
                                            <path d="M4.79102 9.625H6.16602V11H4.79102V9.625Z" fill="#4665A9" />
                                            <path d="M8.91602 9.625H10.291V11H8.91602V9.625Z" fill="#4665A9" />
                                            <path d="M13.041 9.625H14.416V11H13.041V9.625Z" fill="#4665A9" />
                                            <path d="M17.166 9.625H18.541V11H17.166V9.625Z" fill="#4665A9" />
                                            <path d="M4.79102 12.375H6.16602V13.75H4.79102V12.375Z" fill="#4665A9" />
                                            <path d="M8.91602 12.375H10.291V13.75H8.91602V12.375Z" fill="#4665A9" />
                                            <path d="M13.041 12.375H14.416V13.75H13.041V12.375Z" fill="#4665A9" />
                                            <path d="M17.166 12.375H18.541V13.75H17.166V12.375Z" fill="#4665A9" />
                                            <path d="M4.79102 15.125H6.16602V16.5H4.79102V15.125Z" fill="#4665A9" />
                                            <path d="M8.91602 15.125H10.291V16.5H8.91602V15.125Z" fill="#4665A9" />
                                            <path d="M13.041 15.125H14.416V16.5H13.041V15.125Z" fill="#4665A9" />
                                            <path d="M17.166 15.125H18.541V16.5H17.166V15.125Z" fill="#4665A9" />
                                        </svg>
                                    </div>
                                    <div className='FormStepfourteenInputWaper'>
                                        <input type='text' className='FormStepfourteenInput' placeholder='YYYY' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M4.10352 19.9375H19.2285C19.7755 19.9375 20.3001 19.7202 20.6869 19.3334C21.0737 18.9466 21.291 18.422 21.291 17.875V5.5C21.291 4.95299 21.0737 4.42839 20.6869 4.04159C20.3001 3.6548 19.7755 3.4375 19.2285 3.4375H17.8535V2.0625H16.4785V6.1875H17.8535V4.8125H19.2285C19.4109 4.8125 19.5857 4.88493 19.7147 5.01386C19.8436 5.1428 19.916 5.31766 19.916 5.5V6.875H3.41602V5.5C3.41602 5.31766 3.48845 5.1428 3.61738 5.01386C3.74631 4.88493 3.92118 4.8125 4.10352 4.8125H5.47852V6.1875H6.85352V4.8125H15.791V3.4375H6.85352V2.0625H5.47852V3.4375H4.10352C3.55651 3.4375 3.0319 3.6548 2.64511 4.04159C2.25831 4.42839 2.04102 4.95299 2.04102 5.5V7.5625C2.04102 7.74484 2.11345 7.9197 2.24238 8.04864C2.37131 8.17757 2.54618 8.25 2.72852 8.25H19.916V17.875C19.916 18.0573 19.8436 18.2322 19.7147 18.3611C19.5857 18.4901 19.4109 18.5625 19.2285 18.5625H4.10352C3.92118 18.5625 3.74631 18.4901 3.61738 18.3611C3.48845 18.2322 3.41602 18.0573 3.41602 17.875V8.9375H2.04102V17.875C2.04102 18.422 2.25831 18.9466 2.64511 19.3334C3.0319 19.7202 3.55651 19.9375 4.10352 19.9375Z" fill="#4665A9" />
                                            <path d="M4.79102 9.625H6.16602V11H4.79102V9.625Z" fill="#4665A9" />
                                            <path d="M8.91602 9.625H10.291V11H8.91602V9.625Z" fill="#4665A9" />
                                            <path d="M13.041 9.625H14.416V11H13.041V9.625Z" fill="#4665A9" />
                                            <path d="M17.166 9.625H18.541V11H17.166V9.625Z" fill="#4665A9" />
                                            <path d="M4.79102 12.375H6.16602V13.75H4.79102V12.375Z" fill="#4665A9" />
                                            <path d="M8.91602 12.375H10.291V13.75H8.91602V12.375Z" fill="#4665A9" />
                                            <path d="M13.041 12.375H14.416V13.75H13.041V12.375Z" fill="#4665A9" />
                                            <path d="M17.166 12.375H18.541V13.75H17.166V12.375Z" fill="#4665A9" />
                                            <path d="M4.79102 15.125H6.16602V16.5H4.79102V15.125Z" fill="#4665A9" />
                                            <path d="M8.91602 15.125H10.291V16.5H8.91602V15.125Z" fill="#4665A9" />
                                            <path d="M13.041 15.125H14.416V16.5H13.041V15.125Z" fill="#4665A9" />
                                            <path d="M17.166 15.125H18.541V16.5H17.166V15.125Z" fill="#4665A9" />
                                        </svg>
                                    </div>
                                </Form>

                                <div className='securelogoWaper'>
                                    <Image
                                        src="/securelogo.webp"
                                        className='securelogo mt-4'
                                        width={176}
                                        height={31}
                                    />
                                </div>


                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 15:
                {/* Step Fifteen */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <h1 className='FormStepSixTitel'>What’s your gender??</h1>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {Gender.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 16:
                {/* Step Sixteen */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <h1 className='FormStepSixTitel'>Are you currently married???</h1>
                                <p className='AreyouCurrentlyInsuredText'>Some insurers offer lower rates for married drivers.</p>
                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stepTwelve.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 17:
                {/* Step SevenTeen */ }
                return (
                    <section className='FormStepFive'>
                        <div className='Container'>
                            <div className='AreyouCurrentlyInsuredWaper'>
                                <div className='AreyouCurrentlyInsuredProgress'>Progress 20%</div>
                                <h1 className='AreyouCurrentlyInsuredTitel'>What’s your name?</h1>
                                <Form className='FormStepSevenTeenInputFormWaper'>
                                    <div className='FormStepSevenTeenInputWaper'>
                                        <span>
                                            First Name
                                        </span>
                                        <input type='text' className='FormStepSevenTeenInput' placeholder='First name' />
                                    </div>
                                    <div className='FormStepSevenTeenInputWaper'>
                                        <span>
                                            Last Name
                                        </span>
                                        <input type='text' className='FormStepSevenTeenInput' placeholder='Last name' />
                                    </div>
                                </Form>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                            <path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" />
                                        </svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 18:
                {/* Step Eighteen */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <h1 className='FormStepSixTitel mb-4'>What’s your highest level of education?</h1>

                                <div className='AreyouCurrentlyInsuredButtonWaper'>
                                    {stemEignteen.map((item) => (
                                        <Link className='AreyouCurrentlyInsuredButton' onClick={() => { nextStep() }} href='' >{item}</Link>
                                    ))}
                                </div>

                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 19:
                {/* Step Ninteen */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <h1 className='FormStepSixTitel'>What is your address</h1>
                                <p className='AreyouCurrentlyInsuredText'>Used only to find local insurers — never shared for marketing.</p>

                                <Form className='StemNinteenFormWaper'>
                                    <div className='StepNinteenInputWaper'>
                                        <span>
                                            Address
                                        </span>
                                        <input type="text" className='StepNinteenInput' placeholder='Address' />
                                    </div>
                                    <div className='StepNinteenInputWaper'>
                                        <span>
                                            City
                                        </span>
                                        <input type="text" className='StepNinteenInput' placeholder='City' />
                                    </div>
                                    <div className='StepNinteenInputWaper'>
                                        <span>
                                            State
                                        </span>
                                        <input type="text" className='StepNinteenInput' placeholder='State' />
                                    </div>
                                    <div className='StepNinteenInputWaper'>
                                        <span>
                                            Zip
                                        </span>
                                        <input type="text" className='StepNinteenInput' placeholder='Zip' />
                                    </div>
                                </Form>
                                <div className='securelogoWaper'>
                                    <Image
                                        src="/securelogo.webp"
                                        className='securelogo mt-4'
                                        width={176}
                                        height={31}
                                    />
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 20:
                {/* Step Twontee */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 20%</div>
                                <h1 className='FormStepSixTitel'>What is your address</h1>
                                <p className='AreyouCurrentlyInsuredText'>Used only to find local insurers — never shared for marketing.</p>

                                <Form className='StemNinteenFormWaper'>
                                    <div className='StepNinteenInputWaper'>
                                        <span>
                                            Email
                                        </span>
                                        <input type="text" className='StepNinteenInput' placeholder='Email Address ' />
                                    </div>
                                </Form>
                                <div className='securelogoWaper'>
                                    <Image
                                        src="/securelogo.webp"
                                        className='securelogo mt-4'
                                        width={176}
                                        height={31}
                                    />
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 21:
                {/* Step Twonteeone */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 100%</div>
                                <h1 className='FormStepSixTitel'>What is your address</h1>
                                <p className='AreyouCurrentlyInsuredText'>Used only to find local insurers — never shared for marketing.</p>

                                <Form className='StemNinteenFormWaper'>
                                    <div className='StepNinteenInputWaper'>
                                        <span>
                                            Phone
                                        </span>
                                        <input type="text" className='StepNinteenInput' placeholder='Phone ' />
                                    </div>
                                </Form>
                                <div className='securelogoWaper'>
                                    <Image
                                        src="/securelogo.webp"
                                        className='securelogo mt-5'
                                        width={176}
                                        height={31}
                                    />
                                </div>
                                <div className='PolacyAndTramsTermsWaper'>
                                    <div className='PolacyAndTramsTerms'>
                                        <input clasclassNames="form-check-input" type="checkbox" value="" id="checkDefault" />
                                        <span>
                                            By checking this box, I confirm my agreement with this website's <Link href="#">Privacy Policy</Link> and <Link href="#">Terms and Conditions</Link>, which contains a mandatory arbitration provision.
                                        </span>
                                    </div>
                                    <div className='PolacyAndTramsTerms'>
                                        <input clasclassNames="form-check-input" type="checkbox" value="" id="checkDefault" />
                                        <span>
                                            By checking this box, I confirm my agreement with the terms shown below the Submit button.
                                        </span>
                                    </div>
                                </div>
                                <div className='AreyouCurrentlyInsuredActions'>
                                    <Link className='AreyouCurrentlyInsuredPrev' href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none"><path d="M0.499718 5.49998C0.499718 5.24398 0.597687 4.98794 0.792687 4.79294L4.79269 0.792945C5.18369 0.401945 5.81575 0.401945 6.20675 0.792945C6.59775 1.18394 6.59775 1.81601 6.20675 2.20701L2.91378 5.49998L6.20675 8.79294C6.59775 9.18394 6.59775 9.81601 6.20675 10.207C5.81575 10.598 5.18369 10.598 4.79269 10.207L0.792687 6.20701C0.597687 6.01201 0.499718 5.75598 0.499718 5.49998Z" fill="#0033A0" /></svg>
                                        Previous
                                    </Link>
                                    <Link className='AreyouCurrentlyInsuredCall' href="#">Call for Instant Quotes!</Link>
                                </div>
                                <div className='PolacyAndTramsTermsConfirm'>
                                    By clicking Submit button, I give my express written consent by electronic signature to receive marketing communications via live agent, automatic telephone dialing system, artificial/pre-recorded message, email, or by text message (SMS) from this website and/or partner companies or their agents at the landline or wireless number I provided, even if my number/email is currently listed on any Do Not Call/Do Not Email list. Carrier message and data rates may apply.
                                    I understand that my consent is not required as a condition of purchasing any goods or services and that I may revoke my consent at any time.
                                </div>
                            </div>
                        </div>
                    </section>
                )
            case 22:
                {/* Success Step */ }
                return (
                    <section className='FormStepSix'>
                        <div className='Container'>
                            <div className='FormStepSixWaper'>
                                <div className='FormStepSixProgress'>Progress 100%</div>
                                <div className='FormStepSixYear mt-4 mb-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
                                        <path d="M94 47C94 72.9574 72.9574 94 47 94C21.0426 94 0 72.9574 0 47C0 21.0426 21.0426 0 47 0C72.9574 0 94 21.0426 94 47Z" fill="#0033A0" />
                                        <path d="M67.7318 27.8613C59.1636 30.6738 48.2407 38.1955 38.1681 51.0806L32.2162 44.4745C31.3005 43.428 29.5999 43.428 28.6842 44.4745L24.302 49.38C23.4517 50.3611 23.5171 51.8 24.4328 52.6503L37.9065 65.6008C39.0184 66.6473 40.8498 66.3856 41.6347 65.0121C48.8294 51.9963 56.5473 42.3161 69.6286 31.1971C71.1983 29.8235 69.7594 27.2073 67.7318 27.8613Z" fill="white" />
                                    </svg>
                                </div>
                                <h1 className='FormStepSixTitel'>Thank You! Your Quote is on the Way.</h1>
                                <p className='FormStepSixSubText'>We’ve received your information, and our team is already working to find the best rates for you. You’ll receive your free auto insurance quotes shortly!</p>


                                <div className='SuccessBurronWaper'>
                                    <Link href="" className="SuccessBurron">
                                        <div className="NavButtonIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="42" viewBox="0 0 39 42" fill="none">
                                                <path d="M16.1881 0.552335C16.5645 0.470215 17.0709 0.374409 17.3173 0.347036C17.5636 0.312819 18.4054 0.285446 19.1992 0.278603C20.0888 0.278603 20.91 0.312819 21.3548 0.367565C21.7517 0.422312 22.2718 0.511275 22.5182 0.566021C22.7645 0.627611 23.3188 0.785007 23.75 0.921873C24.1811 1.05874 24.8449 1.32563 25.2213 1.50355C25.5977 1.68148 26.152 1.99627 26.4531 2.19473C26.7542 2.38634 27.1374 2.67376 27.6164 3.08435L27.9928 2.85168C28.1981 2.72166 28.5471 2.55058 28.7661 2.46846C28.9783 2.39318 29.382 2.30422 29.6557 2.28369C29.9979 2.25632 30.2922 2.27685 30.6138 2.35212C30.867 2.41371 31.2502 2.55058 31.4624 2.66007C31.6814 2.76956 32.0714 3.05698 32.3383 3.30334C32.6052 3.54286 32.9268 3.92608 33.0569 4.14507C33.1869 4.37089 33.3648 4.74728 33.4538 4.99364C33.5701 5.30843 33.6249 5.65059 33.6522 6.157C33.6796 6.65656 33.6591 7.03978 33.5838 7.42301C33.529 7.72411 33.4196 8.14155 33.3374 8.34685C33.2622 8.55215 33.0979 8.89431 32.9679 9.09961C32.8447 9.30491 32.701 9.53758 32.6531 9.61286C32.571 9.7292 32.5847 9.825 32.7694 10.2972C32.8858 10.5983 33.0363 11.1115 33.2279 12.0354L33.4675 12.0764C33.5975 12.097 33.8302 12.1859 33.9739 12.2681C34.1244 12.3502 34.3434 12.5418 34.4597 12.6923C34.5966 12.8634 34.7061 13.1166 34.7608 13.3767C34.8156 13.623 34.8566 14.3347 34.8635 15.1901C34.8703 16.5177 34.8635 16.6136 34.7129 16.9352C34.624 17.1268 34.4597 17.38 34.3366 17.5032C34.2134 17.6264 34.0218 17.7906 33.9123 17.859C33.7275 17.9685 33.7001 18.037 33.6591 18.4202C33.6317 18.6529 33.529 19.0908 33.4332 19.3851C33.3374 19.6725 33.18 20.0763 33.0774 20.2747C32.9816 20.4663 32.7968 20.788 32.6736 20.9727C32.5505 21.1643 32.2973 21.4997 32.1056 21.7255C31.9072 21.9513 31.5445 22.314 31.2913 22.533C31.0381 22.7588 30.7028 23.0326 30.5385 23.1489C30.3811 23.2721 30.2511 23.3816 30.2511 23.4021C30.2511 23.4226 30.3538 23.5663 30.4769 23.7169C30.5933 23.8743 30.8807 24.278 31.1065 24.6202C31.5034 25.2156 31.5445 25.2498 32.4067 25.8109L32.5431 25.8993C33.007 26.1999 33.5627 26.56 33.8302 26.7279C34.1244 26.9127 34.9525 27.4465 35.6778 27.9187C36.4032 28.3977 37.2313 28.9589 37.5255 29.171C37.8198 29.39 38.1004 29.6569 38.162 29.7869C38.2304 29.9169 38.2646 30.1017 38.2441 30.2454C38.2235 30.3754 38.0593 30.7792 37.8814 31.135C37.7035 31.4909 37.3202 32.141 37.026 32.5721C36.7386 33.0033 36.3006 33.6055 36.0611 33.9066C35.8216 34.2077 35.2399 34.8509 34.7677 35.3368C34.2955 35.8158 33.6043 36.466 33.2279 36.7808C32.8516 37.0887 32.2973 37.5198 31.9961 37.732C31.695 37.951 31.0655 38.3684 30.5933 38.6627C30.1211 38.9569 29.3683 39.3744 28.9167 39.6002C28.465 39.8192 27.7738 40.1271 27.3769 40.2845C26.98 40.4351 26.3641 40.6609 26.0083 40.7772C25.6524 40.8867 25.0639 41.0578 24.708 41.1536C24.3522 41.2426 23.6884 41.3795 23.2367 41.4547C22.7851 41.5368 22.1555 41.6258 21.2727 41.7079L21.5191 41.4547C21.6765 41.2836 21.7654 41.1262 21.7654 41.0099C21.7654 40.9004 21.7038 40.4967 21.6286 40.0998C21.5533 39.7028 21.4438 39.1485 21.389 38.868C21.3343 38.5874 21.2864 38.3342 21.2864 38.3068C21.2864 38.2726 21.3274 38.2726 21.3685 38.3C21.4278 38.3365 21.4392 38.3251 21.4027 38.2657C21.3753 38.2247 21.3822 38.1768 21.4164 38.1699C21.4506 38.1563 21.4369 38.0741 21.2864 37.8073L21.3206 37.9989C21.3411 38.1015 21.3343 38.1836 21.3001 38.1836C21.2727 38.1836 21.1837 37.8825 21.0948 37.513C21.0058 37.1503 20.9168 36.7739 20.8895 36.6781C20.8553 36.5412 20.8689 36.5207 20.9442 36.5755C21.0195 36.6234 21.0332 36.6165 20.9921 36.5549C20.9648 36.5139 20.9168 36.4865 20.8758 36.507C20.8347 36.5276 20.7868 36.3975 20.7663 36.2196C20.7458 36.0348 20.6979 35.8432 20.6705 35.7885C20.6363 35.7337 20.5952 35.6105 20.5815 35.5147C20.561 35.4189 20.4652 35.1315 20.3762 34.8646C20.2804 34.5977 20.1572 34.2556 20.0957 34.0982C20.0341 33.9339 19.9588 33.8039 19.9177 33.8039C19.8767 33.8039 19.863 33.756 19.8835 33.7013C19.9109 33.6191 19.8288 33.5986 18.8228 33.5986L18.6586 33.8929C18.5696 34.0503 18.4533 34.3172 18.3917 34.4882C18.3369 34.6593 18.2137 35.0562 18.1179 35.3779C18.0221 35.6995 17.9058 36.1306 17.8647 36.3359C17.8237 36.5412 17.7758 36.6986 17.7621 36.6781C17.7416 36.6576 17.7758 36.4317 17.8305 36.1649C17.8853 35.898 17.9742 35.5147 18.029 35.3094C18.0906 35.1041 18.1248 34.9194 18.1111 34.8988C18.0906 34.8783 18.0221 35.0768 17.9469 35.3437C17.8784 35.6105 17.7621 36.0211 17.7005 36.2675C17.6321 36.5139 17.5089 36.9861 17.4199 37.3282C17.3241 37.7114 17.2831 37.9989 17.3173 38.081C17.3515 38.1768 17.3789 38.0947 17.4131 37.7936C17.4336 37.554 17.4815 37.3487 17.5226 37.3282C17.5636 37.3077 17.591 37.3145 17.591 37.3487C17.591 37.3751 17.4894 37.8776 17.3658 38.4893L17.3515 38.56C17.2146 39.2033 17.0983 39.8192 17.0846 39.9287C17.0709 40.0382 17.023 40.3187 16.9751 40.5446C16.934 40.7704 16.9135 41.0168 16.934 41.092C16.9477 41.1673 17.0435 41.311 17.1393 41.4205C17.2352 41.5232 17.3446 41.6053 17.3857 41.6053C17.4268 41.6053 17.4541 41.6258 17.4541 41.66C17.4541 41.6874 17.2009 41.6874 16.8861 41.6532C16.5782 41.6258 16.0444 41.5574 15.7091 41.4958C15.3738 41.441 14.7237 41.3042 14.272 41.1947C13.8203 41.0852 13.0471 40.8594 12.5612 40.6951C12.0753 40.524 11.3362 40.2435 10.9188 40.0655C10.5014 39.8876 9.90598 39.6139 9.58435 39.4496C9.26271 39.2922 8.70841 38.9843 8.35255 38.7653C7.9967 38.5532 7.42187 38.1836 7.08654 37.9441C6.75122 37.7114 6.1148 37.2324 5.68367 36.8766C5.25254 36.5275 4.51346 35.8501 4.04128 35.3779C3.56909 34.9057 2.91898 34.1803 2.59734 33.7697C2.26886 33.3591 1.8172 32.7227 1.58453 32.3668C1.34502 32.011 1.00285 31.4088 0.81124 31.0324C0.516978 30.4439 0.475919 30.307 0.510135 30.0743C0.537508 29.8827 0.633314 29.7185 0.804397 29.5337C0.948106 29.3831 1.88564 28.7193 2.88476 28.0624C3.89072 27.3986 5.2457 26.5226 7.09339 25.3524L7.71613 24.4286C8.05829 23.9222 8.36624 23.45 8.40046 23.3816C8.44152 23.2926 8.39361 23.1968 8.202 23.0052C8.06514 22.8683 7.77772 22.5056 7.55873 22.2045C7.34659 21.9034 7.02495 21.3491 6.84019 20.9727C6.66226 20.5964 6.45696 20.1036 6.38168 19.8778C6.30641 19.652 6.19007 19.2072 6.12164 18.8855C6.01215 18.4065 5.99162 18.0164 5.99162 16.6957C5.99162 15.3133 6.01215 14.9848 6.14901 14.3347C6.23113 13.9173 6.38853 13.2535 6.50486 12.8497C6.61436 12.4391 6.84019 11.8164 7.29184 10.8036L7.12076 10.6941C7.02495 10.6325 6.73069 10.3656 6.47065 10.0919C6.2106 9.81816 5.88897 9.42809 5.77263 9.22964C5.64945 9.02434 5.47153 8.67533 5.38256 8.4495C5.28676 8.22367 5.16358 7.75833 5.10199 7.42301C5.04724 7.08768 4.99934 6.62918 4.99934 6.41704C4.99934 6.19806 5.04724 5.78061 5.10199 5.4932C5.15673 5.19893 5.31413 4.72675 5.451 4.44617C5.63577 4.07663 5.84791 3.78921 6.22429 3.40599C6.61436 3.01592 6.8744 2.82431 7.25763 2.63954C7.5382 2.50267 7.98986 2.35897 8.24991 2.31106C8.61944 2.24947 8.84527 2.24947 9.24218 2.31791C9.52276 2.35897 9.92651 2.4753 10.1318 2.57111C10.3371 2.66691 10.6108 2.81747 10.734 2.91327C10.8504 3.00224 10.9667 3.07751 10.9872 3.07751C11.0078 3.07751 11.1378 2.97486 11.2746 2.85168C11.4184 2.72166 11.7674 2.46161 12.0479 2.27C12.3285 2.08523 12.8965 1.75675 13.3139 1.55146C13.7314 1.34616 14.3883 1.07243 14.7853 0.935559C15.1822 0.805537 15.8117 0.627611 16.1881 0.552335Z" fill="#0033A0" />
                                                <path d="M19.8151 0.251239C19.5482 0.264926 19.0897 0.264926 18.7886 0.251239C18.4875 0.244396 18.6996 0.230709 19.2676 0.230709C19.8356 0.230709 20.082 0.244396 19.8151 0.251239Z" fill="#F6BE00" />
                                                <path d="M18.3915 34.4883C18.453 34.3172 18.5762 34.0503 18.6652 33.8929L18.8363 33.5986H19.3769C19.8286 33.5986 19.9107 33.6192 19.8833 33.7013C19.8628 33.756 19.8765 33.8039 19.9175 33.8039C19.9586 33.8039 20.0338 33.934 20.0954 34.0982C20.157 34.2556 20.2802 34.6046 20.376 34.8646L20.376 34.8647C20.465 35.1315 20.5608 35.4189 20.5813 35.5148C20.595 35.6106 20.6361 35.7337 20.6703 35.7885C20.6976 35.8432 20.7456 36.0348 20.7661 36.2196C20.7866 36.3975 20.8345 36.5276 20.8756 36.507C20.9166 36.4865 20.9645 36.5139 20.9919 36.5618C21.033 36.6234 21.0193 36.6234 20.944 36.5755C20.8687 36.5207 20.855 36.5412 20.8893 36.6781C20.9166 36.7739 21.0056 37.1503 21.0946 37.513C21.1835 37.8825 21.2725 38.1836 21.3067 38.1836C21.3341 38.1836 21.3409 38.1015 21.2862 37.8073L21.382 37.9783C21.4367 38.0741 21.4504 38.1563 21.4162 38.17C21.382 38.1768 21.3751 38.2247 21.4025 38.2726C21.439 38.3273 21.4276 38.3388 21.3683 38.3068C21.3272 38.2726 21.2862 38.2726 21.2862 38.3068C21.2862 38.3342 21.3341 38.5874 21.3888 38.868C21.4436 39.1485 21.5531 39.7029 21.6283 40.0998C21.7036 40.4967 21.7652 40.9004 21.7652 41.0099C21.7652 41.1263 21.6831 41.2837 21.5462 41.4342C21.423 41.5642 21.3478 41.6806 21.3888 41.7011C21.4299 41.7148 21.2588 41.7353 21.0124 41.749C20.7661 41.7558 20.1228 41.7695 19.5753 41.7695C19.0279 41.7695 18.3299 41.7627 18.0219 41.7558C17.7003 41.749 17.4539 41.7148 17.4539 41.6737C17.4539 41.6395 17.4266 41.6053 17.3855 41.6053C17.3444 41.6053 17.2349 41.5232 17.1391 41.4205C17.0433 41.311 16.9475 41.1673 16.9338 41.092C16.9133 41.0168 16.9338 40.7704 16.9749 40.5446C17.0228 40.3187 17.0775 40.0245 17.0981 39.8945C17.1186 39.7644 17.1254 39.5044 17.1186 39.3128C17.1118 39.128 17.1254 38.7722 17.146 38.5258C17.1734 38.2293 17.2098 38.1038 17.2555 38.1494C17.3034 38.1973 17.2965 38.3547 17.2486 38.6285C17.2144 38.8543 17.1802 39.1006 17.187 39.1759C17.187 39.2512 17.276 38.8817 17.3923 38.3547C17.5018 37.8278 17.5908 37.3761 17.5908 37.3488C17.5908 37.3145 17.5634 37.3077 17.5224 37.3282C17.4881 37.3488 17.4334 37.5541 17.4129 37.7936C17.3786 38.0947 17.3513 38.1768 17.3171 38.081C17.2828 37.9989 17.3239 37.7115 17.4197 37.3282C17.5087 36.9929 17.6319 36.5139 17.7003 36.2675C17.7619 36.0212 17.8782 35.6106 17.9466 35.3437C18.0219 35.0836 18.0904 34.8783 18.1109 34.8989C18.1246 34.9194 18.0904 35.1042 18.0288 35.3095C17.974 35.5148 17.8851 35.9048 17.8303 36.1649C17.7756 36.4318 17.7413 36.6576 17.7619 36.6781C17.7756 36.6986 17.8235 36.5412 17.8645 36.3359C17.9056 36.1306 18.0219 35.6995 18.1177 35.3779C18.2135 35.0563 18.3367 34.6593 18.3915 34.4883Z" fill="#78BE20" />
                                                <path d="M17.2145 1.74995C17.5909 1.68836 17.9946 1.62677 18.1041 1.61308C18.2136 1.59939 18.85 1.59255 19.507 1.60624C20.3213 1.61992 20.9578 1.67467 21.5121 1.77048C21.95 1.8526 22.6891 2.03737 23.1476 2.19476C23.613 2.34531 24.2699 2.59852 24.6052 2.76276C24.9406 2.92015 25.5017 3.2281 25.837 3.44709C26.1724 3.66607 26.4666 3.85768 26.4871 3.87137C26.5077 3.88506 26.4187 3.98086 26.2887 4.08351C26.1587 4.18616 26.0081 4.31618 25.9602 4.36409C25.8918 4.43252 25.7207 4.38462 25.0843 4.13826C24.6531 3.96718 23.9209 3.7345 23.4624 3.62501C22.9971 3.50867 22.2511 3.36497 21.7995 3.30338C21.2178 3.22126 20.5266 3.18704 19.4043 3.18704C18.3026 3.18704 17.584 3.2281 17.0092 3.31022C16.5575 3.37181 15.8321 3.50183 15.401 3.59764C14.9699 3.70029 14.354 3.87137 14.0323 3.98086C13.7107 4.0972 13.3343 4.24775 13.1975 4.31618C13.0538 4.39146 12.91 4.44621 12.869 4.44621C12.8279 4.44621 12.6637 4.32987 12.4926 4.193C12.3215 4.0493 12.1847 3.91243 12.1847 3.88506C12.1847 3.85084 12.4105 3.67976 12.6774 3.49499C12.9511 3.31706 13.4096 3.05017 13.6902 2.90646C13.9708 2.76276 14.4635 2.54377 14.7851 2.41375C15.1067 2.28372 15.6268 2.1058 15.9485 2.01684C16.2701 1.92787 16.8381 1.81154 17.2145 1.74995Z" fill="#EBFFE8" />
                                                <path d="M31.6128 11.4127C31.4622 11.0021 31.4348 10.8515 31.4896 10.7763C31.5307 10.7215 31.5922 10.6736 31.6265 10.6736C31.6607 10.6736 31.7633 10.92 31.8591 11.2211C31.9549 11.5222 32.0302 11.8164 32.0302 11.8712C32.0302 11.9259 31.9823 11.967 31.9207 11.9601C31.8523 11.9465 31.736 11.7343 31.6128 11.4127Z" fill="#EBFFE8" />
                                                <path d="M32.1397 18.5297C32.1739 18.3449 32.2218 18.2697 32.3313 18.256C32.4066 18.2423 32.4819 18.2355 32.4887 18.2423C32.4956 18.256 32.475 18.4271 32.434 18.6255C32.3998 18.824 32.3039 19.1593 32.2218 19.3646C32.1397 19.5699 31.9481 19.9394 31.8044 20.1858C31.6538 20.4321 31.3254 20.8427 31.079 21.1028C30.8326 21.356 30.4426 21.7118 30.2167 21.8829C29.9909 22.0609 29.4503 22.403 29.0192 22.6562C28.588 22.9026 28.2253 23.1079 28.2117 23.101C28.2048 23.101 28.2596 22.9505 28.3348 22.7726C28.4443 22.5125 28.5333 22.4099 28.766 22.2935C28.9234 22.2183 29.2245 22.0403 29.4298 21.9103C29.6351 21.7803 30.0183 21.4997 30.2852 21.2876C30.5452 21.0754 30.9216 20.7059 31.1269 20.4595C31.3254 20.2132 31.6265 19.7341 31.7907 19.3988C31.9549 19.0635 32.1123 18.6666 32.1397 18.5297Z" fill="#EBFFE8" />
                                                <path d="M10.6449 26.2079C10.5628 25.9615 10.4054 25.5509 10.3027 25.284C10.2001 25.0035 10.159 24.8324 10.2138 24.8803C10.2617 24.9214 10.5354 25.1198 10.816 25.332C11.0966 25.5373 11.7741 26.0094 12.3215 26.379C12.869 26.7417 13.8065 27.337 14.4087 27.6997C15.0109 28.0556 16.0032 28.6099 16.6123 28.9247C17.2282 29.2395 17.7277 29.4995 17.7277 29.5132C17.7277 29.5201 17.2008 30.0196 16.5507 30.615C15.9006 31.2103 15.0862 31.9631 14.7509 32.2847C14.4087 32.6064 13.9776 33.0238 13.4301 33.5644L12.8827 32.1616C12.5816 31.3883 12.1025 30.1428 11.822 29.39C11.5414 28.6373 11.1924 27.7134 11.0555 27.337C10.9118 26.9607 10.727 26.4543 10.6449 26.2079Z" fill="#EBFFE8" />
                                                <path d="M26.7609 26.0094C27.2673 25.6536 27.8353 25.2498 28.02 25.1061C28.2048 24.9624 28.3622 24.8529 28.3622 24.8666C28.3691 24.8734 28.0132 25.8794 27.5752 27.0975C27.1373 28.3225 26.6377 29.6911 26.4666 30.1428C26.3024 30.5944 25.9397 31.5183 25.6659 32.1958C25.3991 32.8733 25.1595 33.4413 25.1459 33.4618C25.1322 33.4823 24.7421 33.1265 24.2836 32.668C23.8183 32.2095 23.0107 31.443 22.4838 30.9503C21.9569 30.4644 21.3889 29.9375 20.9099 29.5064L21.1494 29.4106C21.2794 29.3558 21.9295 29.0068 22.5865 28.6373C23.2434 28.2677 24.2494 27.6724 24.8105 27.3097C25.3785 26.9538 26.2545 26.3721 26.7609 26.0094Z" fill="#EBFFE8" />
                                                <path d="M13.9639 34.4541C14.0187 34.3993 14.6825 33.7903 15.4352 33.0923C16.188 32.3942 16.8176 31.8262 16.8313 31.8194C16.8449 31.8194 17.0229 32.1205 17.2213 32.49C17.4198 32.8527 17.6045 33.2017 17.6251 33.2565C17.6456 33.3112 17.5224 33.8245 17.3513 34.3856C17.1734 34.9536 16.8518 36.1512 16.6328 37.0545C16.4138 37.9578 16.1948 38.8817 16.1469 39.1075C16.0853 39.4155 16.058 39.4839 16.0169 39.3812C15.9895 39.306 15.6747 38.5943 15.3189 37.8073C14.9562 37.0203 14.484 35.9596 14.265 35.46C13.9092 34.6594 13.8749 34.543 13.9639 34.4541Z" fill="#EBFFE8" />
                                                <path d="M21.0057 33.3591L21.4368 32.5927C21.6695 32.1684 21.8816 31.8262 21.909 31.8399C21.9364 31.8468 22.3949 32.2711 22.9355 32.7843C23.4761 33.2907 24.1194 33.8929 24.7969 34.5225L23.7088 36.9861C23.1066 38.3411 22.6138 39.3881 22.6002 39.3128C22.5865 39.2375 22.4701 38.6832 22.3333 38.081C22.2032 37.4788 21.9432 36.4455 21.7516 35.7885C21.5668 35.1316 21.3205 34.3172 21.0057 33.3591Z" fill="#EBFFE8" />
                                                <path d="M17.1875 39.1759C17.1875 39.1007 17.2149 38.8406 17.2628 38.5943C17.3038 38.3479 17.3517 38.1973 17.3654 38.2521C17.3791 38.3068 17.3449 38.5669 17.2901 38.8338C17.2354 39.1007 17.1875 39.2512 17.1875 39.1759Z" fill="#0033A0" />
                                                <path d="M7.83935 3.9535C7.9899 3.87822 8.23626 3.78926 8.38681 3.76188C8.53737 3.73451 8.70161 3.70714 8.74951 3.70029C8.79057 3.69345 8.99587 3.72767 9.18748 3.76873C9.38594 3.80979 9.74863 3.9535 9.99499 4.09036C10.2413 4.22723 10.563 4.46674 10.7135 4.6173C10.8709 4.76785 11.1104 5.03474 11.2473 5.21266C11.3842 5.39743 11.5005 5.54798 11.5005 5.55483C11.5074 5.56851 11.3226 5.71907 10.6793 6.22547L10.3235 5.84225C10.1113 5.61642 9.78969 5.3769 9.55017 5.25372C9.19432 5.0758 9.07799 5.05527 8.68108 5.0758C8.29785 5.08948 8.18836 5.13054 7.97622 5.30163C7.83251 5.41796 7.62721 5.67801 7.51771 5.88331C7.37401 6.16388 7.31242 6.39655 7.2782 6.77293C7.25083 7.15616 7.27136 7.40252 7.36032 7.731C7.42875 7.97736 7.55193 8.31268 7.63405 8.48376C7.71617 8.65484 7.86672 8.89436 7.96937 9.01069C8.06518 9.13387 8.1473 9.25705 8.1473 9.28443C8.15414 9.31864 8.11308 9.38023 8.06518 9.42129C7.99675 9.48972 7.92831 9.46919 7.72301 9.31864C7.58615 9.21599 7.33295 8.96279 7.16871 8.75749C6.99762 8.55219 6.77864 8.1895 6.68283 7.94998C6.58703 7.71731 6.47069 7.3204 6.42279 7.0672C6.3612 6.71134 6.3612 6.47867 6.42279 6.0886C6.47069 5.77381 6.58703 5.39059 6.73074 5.09633C6.88129 4.80206 7.07974 4.51465 7.26451 4.35725C7.42875 4.21354 7.6888 4.02877 7.83935 3.9535Z" fill="#BED3FF" />
                                                <path d="M28.6088 4.11773C28.8551 3.98087 29.1289 3.85085 29.2247 3.82347C29.3205 3.7961 29.5942 3.76873 29.8406 3.76873C30.0869 3.76188 30.4222 3.80979 30.5933 3.86453C30.7644 3.92612 31.045 4.07667 31.2229 4.2067C31.4077 4.33672 31.6403 4.57624 31.7498 4.73363C31.8593 4.89787 32.0167 5.19898 32.0988 5.40427C32.1947 5.64379 32.2631 5.9928 32.2836 6.36234C32.311 6.82084 32.2905 7.05351 32.181 7.45726C32.1057 7.73784 31.9551 8.12106 31.8525 8.31268C31.7498 8.49745 31.4693 8.84645 31.2297 9.07913C30.9902 9.31864 30.7644 9.51025 30.7302 9.51025C30.696 9.51025 30.6275 9.44866 30.5933 9.37339C30.5386 9.2639 30.5796 9.1544 30.8191 8.81224C30.9834 8.57272 31.175 8.19634 31.2434 7.97051C31.3119 7.74468 31.3803 7.34093 31.4008 7.08088C31.4214 6.74556 31.4008 6.49236 31.3187 6.22547C31.2571 6.02017 31.1066 5.72591 30.9834 5.5822C30.8602 5.43849 30.6481 5.26057 30.5044 5.19213C30.3675 5.11686 30.1074 5.06211 29.9295 5.06211C29.7174 5.06211 29.4642 5.13054 29.2247 5.24004C29.0194 5.33584 28.643 5.61642 27.9244 6.2939L27.5138 5.93121C27.2812 5.7396 27.0964 5.55483 27.1032 5.52061C27.1032 5.49324 27.3428 5.21951 27.637 4.9184C27.9723 4.56255 28.3213 4.27513 28.6088 4.11773Z" fill="#BED3FF" />
                                                <path d="M17.1462 4.52149C17.4816 4.48043 17.8853 4.43253 18.0359 4.41884C18.1864 4.40515 18.9255 4.40515 19.6783 4.41884C20.431 4.43253 21.3549 4.48727 21.7312 4.54202C22.1076 4.59677 22.6962 4.70626 23.0315 4.78153C23.3668 4.85681 23.8595 4.99368 24.1264 5.08264C24.3933 5.1716 24.8655 5.3769 25.1871 5.54114C25.5087 5.69854 25.9809 5.97227 26.2478 6.15019C26.5079 6.32128 26.9527 6.68397 27.2333 6.94402C27.507 7.20406 27.9244 7.66941 28.1571 7.97051C28.3829 8.27162 28.7114 8.75065 28.8825 9.03122C29.0536 9.3118 29.3205 9.79083 29.4779 10.0919C29.6284 10.393 29.8748 10.9473 30.0116 11.3237C30.1485 11.7001 30.3675 12.3639 30.4907 12.795C30.6138 13.2262 30.7849 13.9995 30.8671 14.5059C30.9765 15.1628 31.0244 15.7377 31.0313 16.4904C31.0381 17.2979 31.0108 17.6538 30.915 17.9959C30.8534 18.2423 30.6754 18.6871 30.5317 18.9882C30.3538 19.3509 30.1074 19.7068 29.7927 20.0421C29.5326 20.3227 29.0809 20.7059 28.1982 21.2807L27.945 21.0823C27.8013 20.9796 27.6096 20.8496 27.5138 20.7949C27.418 20.747 27.1375 20.7059 26.8637 20.7059C26.5216 20.7059 26.2957 20.747 26.0767 20.8564C25.9057 20.9317 25.6593 21.1028 25.5293 21.226C25.3993 21.356 25.2282 21.575 25.1529 21.7255C25.0708 21.9035 25.0229 22.143 25.0229 22.4099C25.016 22.7247 25.0571 22.8957 25.1871 23.1216C25.2829 23.2927 25.5087 23.539 25.7004 23.669C26.0288 23.9086 26.0562 23.9154 26.6721 23.9154C27.0211 23.9154 27.3085 23.8949 27.3085 23.8675C27.3085 23.8333 27.4112 23.7648 27.7533 23.5869L27.6165 23.7375C27.5412 23.8127 27.4728 23.8743 27.4591 23.8675C27.4522 23.8538 27.3428 23.9359 27.2196 24.0454C27.0964 24.1549 26.8295 24.3534 26.6242 24.4971C26.4189 24.6339 25.7825 25.024 25.2213 25.3525C24.6602 25.681 23.5516 26.29 22.7577 26.6938C21.9639 27.0975 20.9853 27.5766 20.5679 27.7476C19.9451 28.0077 19.7398 28.0624 19.3703 28.0693C19.0213 28.0761 18.8023 28.0282 18.3438 27.8503C18.0222 27.7271 17.2215 27.3644 16.5646 27.0428C15.9076 26.728 15.0453 26.29 14.6484 26.071C14.2515 25.8521 13.8204 25.6194 13.6904 25.5509C13.5603 25.4757 13.0745 25.1883 12.6091 24.9077C12.1438 24.6271 11.4937 24.196 11.172 23.9496C10.8436 23.7033 10.3645 23.3063 10.1045 23.06C9.84444 22.8136 9.44752 22.362 9.21485 22.0609C8.98902 21.7529 8.66739 21.2739 8.50999 21.0002C8.34575 20.7196 8.12677 20.2337 8.01728 19.9121C7.90094 19.5904 7.75723 19.0977 7.69564 18.8171C7.63405 18.5366 7.57246 17.8591 7.55193 17.3116C7.5314 16.7368 7.54509 15.984 7.59299 15.5324C7.64089 15.1012 7.7367 14.4237 7.81198 14.0268C7.88725 13.6299 8.03781 13.014 8.14045 12.6582C8.24995 12.3023 8.48946 11.6043 8.68792 11.1184C8.87953 10.6257 9.22854 9.88664 9.46121 9.47604C9.70073 9.0586 10.0976 8.4427 10.3508 8.10738C10.604 7.76521 11.001 7.29987 11.2405 7.0672C11.48 6.83452 11.918 6.47183 12.2191 6.25969C12.5202 6.0407 13.0129 5.74644 13.314 5.59589C13.6151 5.44533 14.1694 5.21266 14.5458 5.08948C14.9222 4.9663 15.5244 4.80206 15.8802 4.72679C16.2361 4.65836 16.8109 4.56255 17.1462 4.52149Z" fill="#BED3FF" />
                                                <path d="M32.1946 13.7189C32.1399 13.452 32.0715 13.1577 32.0509 13.0551C32.003 12.8635 32.003 12.8635 32.3041 12.8977C32.4752 12.9182 32.7421 12.9524 32.8995 12.9661C33.0911 12.9867 33.2759 13.0688 33.4128 13.1919C33.5291 13.2946 33.666 13.4794 33.7207 13.6025C33.7823 13.7463 33.8097 14.1363 33.8097 15.7034L33.6044 15.9635C33.488 16.1072 33.3033 16.2441 33.1732 16.2783C33.0569 16.3125 32.8448 16.3604 32.4752 16.422L32.4547 16.0319C32.4479 15.8129 32.4068 15.3134 32.3657 14.9165C32.3315 14.5195 32.2494 13.9858 32.1946 13.7189Z" fill="#BED3FF" />
                                                <path d="M31.7909 29.6775L31.743 28.4046L31.6951 27.1317L31.8525 27.6792C31.9414 27.9803 32.1331 28.6167 32.2768 29.0958C32.4273 29.5748 32.53 29.9786 32.5094 29.9922C32.4889 30.0059 32.0715 30.2386 31.5856 30.5055C31.0997 30.7724 30.6754 30.9914 30.6412 30.9982C30.6138 30.9982 30.3538 30.8066 30.0595 30.5808C29.7721 30.3481 29.5258 30.1565 29.5189 30.1496C29.5121 30.1496 29.8679 30.0744 30.3059 29.9854C30.7439 29.8964 31.2571 29.7938 31.7909 29.6775Z" fill="#BED3FF" />
                                                <path d="M6.55281 28.8357C6.75127 28.1993 6.93603 27.5766 6.96341 27.4602C6.99078 27.337 7.03184 27.2481 7.05237 27.2686C7.06606 27.2823 7.03868 27.8161 6.98394 28.4593C6.92919 29.0958 6.89497 29.6364 6.9155 29.6569C6.93603 29.6706 7.44928 29.7938 8.05834 29.917C8.67423 30.0401 9.17379 30.1565 9.16695 30.177C9.16695 30.1975 8.98218 30.3481 8.75635 30.5192C8.53052 30.6903 8.27732 30.8682 8.1952 30.9161C8.05834 30.9982 7.96937 30.964 7.18924 30.526C6.71705 30.2591 6.29961 30.0265 6.26539 30.0128C6.22433 30.0059 6.35435 29.4858 6.55281 28.8357Z" fill="#BED3FF" />
                                                <path d="M29.2315 35.9254C29.2931 35.8296 29.7858 35.0084 30.3196 34.0982C31.2503 32.5243 31.3119 32.4421 31.4761 32.4764C31.5719 32.4969 31.6882 32.5243 31.7361 32.5448C31.7977 32.5653 31.7635 32.6748 31.6267 32.928C31.5172 33.1265 31.3666 33.4002 31.2982 33.5302C31.2229 33.6603 31.045 33.9819 30.9013 34.2488C30.7576 34.5088 30.4085 35.111 30.128 35.5832C29.8474 36.0554 29.4436 36.6987 29.2315 37.0203C29.0262 37.3419 28.6704 37.862 28.4445 38.1837C28.2187 38.5053 27.8902 38.9296 27.7191 39.1417C27.548 39.347 27.3359 39.5866 27.2401 39.6687C27.1443 39.7576 27.0074 39.8466 26.9322 39.8671C26.8569 39.8877 26.7884 39.8945 26.7816 39.8808C26.7748 39.8671 26.8706 39.7029 26.9937 39.5181C27.1169 39.3265 27.3291 39.0049 27.4591 38.7996C27.5891 38.5943 27.8628 38.1495 28.0681 37.821C28.2734 37.4925 28.5882 36.9656 28.7798 36.6576C28.9715 36.3497 29.1699 36.0212 29.2315 35.9254Z" fill="#BED3FF" />
                                                <path d="M7.16871 33.0512C7.03184 32.8048 6.93603 32.579 6.96341 32.5516C6.98394 32.5243 7.10712 32.5037 7.23714 32.5037C7.44928 32.5037 7.4835 32.538 7.84619 33.1675C8.05834 33.5371 8.62633 34.502 9.10536 35.3095C9.59123 36.117 10.2824 37.2598 10.6519 37.8415C11.0146 38.4232 11.4458 39.1212 11.61 39.3949C11.8358 39.7645 11.8837 39.8877 11.7948 39.874C11.7332 39.8671 11.6716 39.7987 11.6579 39.7234C11.6511 39.6481 11.6169 39.5729 11.5895 39.5523C11.5689 39.5318 11.5689 39.5729 11.5895 39.6345C11.6169 39.7029 11.6032 39.7576 11.5689 39.7576C11.5279 39.7576 11.3089 39.5181 11.0694 39.2307C10.8367 38.9433 10.4945 38.4916 10.3098 38.2247C10.1182 37.9578 9.78285 37.4583 9.55702 37.123C9.33119 36.7808 8.97534 36.2128 8.7632 35.857C8.55105 35.5011 8.16098 34.8236 7.8941 34.3514C7.63405 33.8792 7.30557 33.2976 7.16871 33.0512Z" fill="#BED3FF" />
                                                <path d="M19.678 1.55146C19.5275 1.56515 19.2537 1.56515 19.0621 1.55146C18.8705 1.53777 19.0005 1.53093 19.3358 1.53093C19.6712 1.53093 19.8286 1.53777 19.678 1.55146Z" fill="#F6BE00" />
                                                <path d="M17.844 30.8066C17.9467 30.6697 18.2067 30.3686 18.4257 30.1496L18.8295 29.7459L19.3906 29.7938C19.9312 29.8417 19.9586 29.8485 20.246 30.1291C20.4103 30.2865 20.6498 30.5807 21.0125 31.135L20.6566 31.8604C20.4582 32.2573 20.2529 32.62 20.1981 32.6611C20.1434 32.709 19.897 32.7569 19.6507 32.7706C19.4043 32.7843 19.0279 32.7774 18.4462 32.709L18.0904 32.0041C17.8988 31.6209 17.7209 31.2514 17.7003 31.183C17.6729 31.1145 17.7345 30.964 17.844 30.8066Z" fill="#78BE20" />
                                                <path d="M19.1785 32.9827C19.0895 32.9827 19.0416 32.9554 19.0621 32.9143C19.0827 32.8801 19.2195 32.8459 19.3701 32.8459C19.5206 32.8459 19.637 32.8801 19.637 32.9143C19.637 32.9554 19.5685 32.9827 19.4864 32.9827C19.3632 32.9827 19.3496 32.9964 19.4317 33.0512C19.5138 33.1059 19.4864 33.1196 19.329 33.1196C19.1716 33.1196 19.1511 33.1059 19.2264 33.0512C19.3085 32.9964 19.3017 32.9827 19.1785 32.9827Z" fill="#78BE20" />
                                                <path d="M19.986 3.19388C19.7055 3.20757 19.2264 3.20757 18.9253 3.19388C18.6242 3.18704 18.8569 3.17335 19.4386 3.17335C20.0203 3.17335 20.2666 3.18704 19.986 3.19388Z" fill="#7992A4" />
                                                <path d="M17.8307 13.0071C18.0565 12.925 18.426 12.8292 18.6518 12.795C18.8777 12.7608 19.3088 12.7539 19.6099 12.7744C19.911 12.795 20.3285 12.8566 20.5338 12.9045C20.7391 12.9592 21.0812 13.0892 21.2865 13.1919C21.5055 13.2945 21.8614 13.5751 22.1419 13.8557C22.4088 14.1157 22.8263 14.6427 23.0726 15.0191C23.3258 15.3954 23.6885 15.984 23.8801 16.3193C24.0717 16.6546 24.2976 17.1063 24.3728 17.3116C24.455 17.5169 24.5576 17.8864 24.6124 18.1328C24.6603 18.3791 24.7082 18.8034 24.7082 19.0771C24.7082 19.344 24.674 19.7341 24.6329 19.9257C24.5918 20.1242 24.496 20.4868 24.4207 20.7332C24.3386 20.9796 24.1812 21.3491 24.0717 21.5544C23.9554 21.7597 23.7022 22.1292 23.5106 22.3756C23.319 22.622 22.9905 22.9641 22.7852 23.142C22.5799 23.32 22.2035 23.5937 21.9366 23.7443C21.6697 23.8948 21.2455 24.0933 20.9786 24.1822C20.7117 24.278 20.219 24.3875 19.8836 24.4286C19.4183 24.4902 19.124 24.4833 18.6861 24.4217C18.3644 24.3807 17.858 24.2507 17.5569 24.1412C17.2558 24.0317 16.7973 23.8127 16.5304 23.6416C16.2635 23.4774 15.8324 23.1215 15.5655 22.8409C15.2986 22.5672 14.9496 22.1429 14.7922 21.8966C14.6348 21.6502 14.409 21.2191 14.2927 20.9385C14.1832 20.6579 14.0395 20.1789 13.9847 19.8778C13.9163 19.5288 13.8958 19.1319 13.9163 18.7829C13.9437 18.427 14.0326 18.0164 14.1695 17.6195C14.2858 17.2842 14.539 16.7093 14.7306 16.3535C14.9223 15.9976 15.2713 15.4228 15.5108 15.0875C15.7434 14.7522 16.113 14.2731 16.3388 14.0336C16.5578 13.7941 16.8863 13.493 17.0779 13.3767C17.2627 13.2535 17.6048 13.0892 17.8307 13.0071Z" fill="#EBFFE8" />
                                                <path d="M13.5192 10.1672C13.6697 10.0714 13.9161 9.94137 14.0666 9.88662C14.2172 9.83187 14.5388 9.79081 14.7852 9.78397C15.1137 9.78397 15.2916 9.81819 15.449 9.92084C15.6269 10.0303 15.6748 10.1056 15.6748 10.2835C15.6817 10.3999 15.6406 10.5367 15.5927 10.5778C15.5448 10.6189 15.2574 10.6736 14.9563 10.701C14.6552 10.7283 14.2719 10.7831 14.1009 10.8242C13.9298 10.8652 13.5876 11.0021 12.8691 11.3579L12.828 11.2074C12.8075 11.1184 12.8212 10.9747 12.8554 10.8789C12.8964 10.7831 12.9991 10.6257 13.0812 10.5299C13.1702 10.4272 13.3686 10.2698 13.5192 10.1672Z" fill="#0033A0" />
                                                <path d="M23.0793 10.0166C23.1682 9.93452 23.2846 9.8524 23.3393 9.83187C23.3941 9.81134 23.6267 9.79081 23.8526 9.79081C24.0784 9.78397 24.3863 9.81819 24.5369 9.85925C24.6874 9.90715 24.9612 10.0372 25.1528 10.1535C25.3376 10.2698 25.5771 10.4888 25.6797 10.6394C25.7892 10.7899 25.8782 10.9884 25.8782 11.0842C25.8782 11.18 25.8508 11.2758 25.8234 11.3032C25.7892 11.3306 25.5702 11.2484 25.3239 11.1253C25.0775 10.9952 24.7422 10.8652 24.5711 10.8242C24.4 10.7831 24.0031 10.7283 23.6883 10.6941C23.2298 10.6531 23.0998 10.612 23.0245 10.5025C22.9698 10.4272 22.9287 10.3177 22.9287 10.263C22.9287 10.2083 22.9971 10.0919 23.0793 10.0166Z" fill="#0033A0" />
                                                <path d="M14.2377 12.4665C14.3472 12.3639 14.5115 12.2612 14.5936 12.2339C14.6825 12.2065 14.8605 12.2065 14.9905 12.227C15.1205 12.2476 15.2847 12.2955 15.3532 12.3434C15.4216 12.3844 15.5448 12.5281 15.6201 12.6582C15.709 12.8019 15.7706 13.0208 15.7706 13.2056C15.7706 13.3767 15.7159 13.6436 15.6406 13.8078C15.5311 14.0405 15.4353 14.1363 15.1958 14.2458C14.9631 14.3484 14.8262 14.3758 14.6483 14.3348C14.5183 14.3074 14.313 14.1911 14.1967 14.0679C14.0324 13.9105 13.9708 13.7736 13.9366 13.5273C13.9161 13.3425 13.9298 13.0688 13.964 12.925C14.0051 12.7813 14.1214 12.576 14.2377 12.4665Z" fill="#0033A0" />
                                                <path d="M23.2435 12.4323C23.3188 12.3707 23.483 12.2886 23.613 12.2544C23.7431 12.2202 23.8662 12.1928 23.8868 12.186C23.9073 12.186 24.051 12.2407 24.2084 12.316C24.4274 12.4186 24.5369 12.5281 24.6395 12.7403C24.7148 12.9045 24.7764 13.1509 24.7764 13.2877C24.7764 13.4314 24.7285 13.6641 24.6738 13.801C24.6122 13.9447 24.4821 14.1226 24.3795 14.1979C24.2563 14.2891 24.0875 14.3348 23.8731 14.3348C23.6609 14.3348 23.4899 14.2869 23.3598 14.1911C23.2572 14.1158 23.1135 13.9447 23.0519 13.8147C22.9835 13.6846 22.9287 13.4383 22.9287 13.2535C22.9287 13.0756 22.9698 12.8498 23.0245 12.7403C23.0793 12.6376 23.1751 12.5008 23.2435 12.4323Z" fill="#0033A0" />
                                                <path d="M17.3172 15.416C17.4883 15.327 17.8236 15.2107 18.07 15.1628C18.3163 15.1081 18.8638 15.0602 19.2812 15.0602C19.7329 15.0533 20.253 15.0944 20.5336 15.156C20.8004 15.2107 21.1289 15.3134 21.2658 15.3886C21.4095 15.4571 21.608 15.6076 21.7106 15.7308C21.8201 15.8471 21.9227 16.0593 21.9433 16.1961C21.9707 16.3398 21.9707 16.6067 21.9433 16.7984C21.9227 16.9831 21.8201 17.2911 21.7243 17.4827C21.6285 17.6674 21.4369 17.9412 21.2932 18.0849C21.1563 18.2354 20.9236 18.4339 20.7731 18.5365C20.6225 18.646 20.3625 18.7761 19.8834 18.9335L19.8629 19.5562C19.8492 20.1584 19.8561 20.1926 20.034 20.3979C20.1435 20.5074 20.3351 20.6374 20.4651 20.6785C20.602 20.7196 20.8757 20.7332 21.0947 20.7059C21.3137 20.6853 21.6559 20.5827 21.8475 20.4869C22.0596 20.3842 22.4634 20.0558 22.8124 19.7136C23.3804 19.1524 23.4146 19.1319 23.5788 19.2072C23.6746 19.2551 23.7704 19.3372 23.791 19.3783C23.8115 19.4262 23.7841 19.6041 23.7225 19.7752C23.6609 19.9463 23.4625 20.2542 23.2846 20.4595C23.0998 20.6648 22.785 20.9591 22.5797 21.1096C22.3744 21.2602 22.0665 21.4518 21.8817 21.5339C21.7038 21.6229 21.3069 21.7597 20.9921 21.8419C20.5267 21.965 20.2393 21.9924 19.3018 21.9924C18.4053 21.9993 18.0768 21.9719 17.6936 21.8692C17.4267 21.8008 16.9614 21.6229 16.6466 21.4792C16.2291 21.2807 15.9622 21.0959 15.6132 20.7469C15.36 20.4937 15.0658 20.1242 14.9631 19.9257C14.8673 19.7341 14.7852 19.5288 14.7852 19.4809C14.7852 19.4399 14.8399 19.3441 14.9084 19.2756C14.97 19.2072 15.0658 19.1524 15.1068 19.1593C15.1547 19.1593 15.4353 19.3988 15.7227 19.6931C16.0923 20.0626 16.3934 20.3021 16.7013 20.4527C16.9819 20.5895 17.2967 20.6853 17.5567 20.7127C17.8852 20.7469 18.0289 20.7264 18.289 20.6032C18.4737 20.5279 18.6653 20.3911 18.7201 20.3021C18.7954 20.1926 18.8159 19.9942 18.7885 18.9335L18.5832 18.8719C18.4737 18.8377 18.2411 18.7418 18.07 18.6597C17.8989 18.5776 17.6252 18.3723 17.4472 18.2012C17.2761 18.0301 17.0503 17.7085 16.9408 17.4827C16.7834 17.1747 16.7287 16.9557 16.715 16.5931C16.7013 16.1961 16.7218 16.0661 16.8519 15.8471C16.9545 15.676 17.1188 15.5187 17.3172 15.416Z" fill="#0033A0" />
                                                <path d="M19.5412 15.0327C19.3906 15.0464 19.1579 15.0464 19.0279 15.0327C18.8979 15.0191 19.0211 15.0054 19.3016 15.0054C19.5822 15.0054 19.6917 15.0191 19.5412 15.0327Z" fill="#7992A4" />
                                            </svg>
                                        </div>
                                        <div className="NavButtonTextWaper">
                                            <div className="NavButtonMainText">Speak with an Agent</div>
                                            <div className="NavButtonSubText">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <circle opacity="0.32" cx="4.90881" cy="5.45999" r="4.776" fill="#5AA152" />
                                                    <circle cx="4.90753" cy="5.45999" r="2.388" fill="#5AA152" />
                                                </svg>
                                                10 agents Available
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            default:
                return (
                    <></>
                )
        }
    }
    return (
        MainContent()
    )
}
