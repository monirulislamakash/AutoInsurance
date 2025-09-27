import React from 'react'
import Image from 'next/image'
import Form from 'next/form'


export default function FindYourLowestAutoRate() {
    return (
        <div className='FindYourLowestAutoRate'>
            <Image
                className='FindYourLowestAutoRateBG'
                src="/watermark.webp"
                width={1990}
                height={700}
                style={{ width: "100%", height: "auto" }}
            />
            <div className='container'>
                <div className='FindYourLowestAutoRateWAper'>
                    <div className='FindYourLowestAutoRateTestWaper'>
                        <h1 className='FindYourLowestAutoRateTitel'>
                            Find your lowest auto rate in 90 seconds—start saving
                        </h1>
                        <p className='FindYourLowestAutoRateText'>
                            Don’t miss out. Rates change quickly, and locking in your quote today could save you hundreds this year.
                        </p>
                    </div>
                    <div className='FindYourLowestAutoRateFromWaper'>
                        <Form className='FindYourLowestAutoRateFrom'>
                            <input className='FindYourLowestAutoRateFromInput' type='text' placeholder='Zip code' />
                            <button className='FindYourLowestAutoRateFromButton'>
                                See My Free Quotes
                            </button>
                        </Form>
                        <p className='FindYourLowestAutoRateFromSecure'>
                            Secure & Encrypted · No Credit Impact · Free Quotes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
