import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function PayLessStress() {
    return (
        <div className='PayLessStress'>
            <div className='container'>
                <div className='PayLessStressWaper'>
                    <div className='PayLessStressLeft'>
                        <Image
                            src="/PayLessStressLeft.webp"
                            alt="Auto Insurance Logo"
                            width={528}
                            height={527}
                            style={{ width: "100%", height: "auto" }} // responsive
                        />
                    </div>
                    <div className='PayLessStressRight'>
                        <h1 className='PayLessStressTitel'>
                            Pay Less. Stress Less. Get More From Your Insurance.
                        </h1>
                        <p className='PayLessStressText'>
                            Shopping for insurance shouldn’t be complicated. With PolicyBear, you:
                        </p>
                        <ul className='PayLessStressList'>
                            <li>
                                Compare trusted insurers instantly
                            </li>
                            <li>
                                See real-time quotes tailored to your ZIP code
                            </li>
                            <li>
                                Get guidance every step of the way
                            </li>
                            <li>
                                Choose the right policy for your budget — online or with an agent
                            </li>
                        </ul>
                        <div className='PayLessStressButtonWaper'>
                            <Link href="forms" className='PayLessStressButtonOne'>
                                Start Saving Today
                            </Link>
                            <Link href="forms" className='PayLessStressButtonTow'>
                                Takes ~90 seconds
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
