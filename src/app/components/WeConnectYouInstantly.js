import React from 'react'
import Image from 'next/image'


export default function WeConnectYouInstantly() {
    return (
        <div className='WeConnectYouInstantly'>
            <div className='container'>
                <div className='WeConnectYouInstantlyWaper'>
                    <h1 className='WeConnectYouInstantlyTitel'>We connect you instantly with top insurers that match your profile.</h1>
                    <div className='WeConnectYouInstantlyCardWaper'>
                        <div className='WeConnectYouInstantlyCard'>
                            <Image
                                className="NavLogo"
                                src="/wc1.webp"
                                alt="Auto Insurance Logo"
                                width={245}
                                height={100}
                                style={{ width: "100%", height: "auto" }} // responsive
                            />
                        </div>
                        <div className='WeConnectYouInstantlyCard'>
                            <Image
                                className="NavLogo"
                                src="/wc2.webp"
                                alt="Auto Insurance Logo"
                                width={245}
                                height={100}
                                style={{ width: "100%", height: "auto" }} // responsive
                            />
                        </div>
                        <div className='WeConnectYouInstantlyCard'>
                            <Image
                                className="NavLogo"
                                src="/wc3.webp"
                                alt="Auto Insurance Logo"
                                width={245}
                                height={100}
                                style={{ width: "100%", height: "auto" }} // responsive
                            />
                        </div>
                        <div className='WeConnectYouInstantlyCard'>
                            <Image
                                className="NavLogo"
                                src="/wc4.webp"
                                alt="Auto Insurance Logo"
                                width={245}
                                height={100}
                                style={{ width: "100%", height: "auto" }} // responsive
                            />
                        </div>
                        <div className='WeConnectYouInstantlyCard'>
                            <Image
                                className="NavLogo"
                                src="/wc5.webp"
                                alt="Auto Insurance Logo"
                                width={245}
                                height={100}
                                style={{ width: "100%", height: "auto" }} // responsive
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
