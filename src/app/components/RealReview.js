import React from 'react'
import Image from 'next/image'

export default function RealReview() {
    return (
        <div className='RealPeople'>
            <Image
                className="RealPeopleBG"
                src="/watermark.webp"
                alt="Auto Insurance Logo"
                width={257}
                height={48}
                style={{ width: "100%", height: "auto" }} // responsive
            />
            <div className='container'>
                <div className='RealPeopleWaper'>
                    <h1 className='RealPeopleTitel'>
                        Real people. Real savings.
                    </h1>
                    <p className='RealPeopleText'>
                        Over 2,000 shoppers rated PolicyBear 4.8/5 stars for transparency, speed, and savings.
                    </p>
                    <div className='RealPeopleCardWaper'>
                        <div className='RealPeopleCard'>
                            <div className='RealPeopleCardProfileWaper'>
                                <Image
                                    className="RealPeopleCardProfile"
                                    src="/ReviewProfile.webp"
                                    alt="Auto Insurance Logo"
                                    width={61}
                                    height={61}
                                    style={{ width: "41px", height: "auto" }} // responsive
                                />
                                <div className='RealPeopleCardProfileNameTitelWaper'>
                                    <h1 className='RealPeopleCardProfileName'>Ashlynn Lubin</h1>
                                    <p className='RealPeopleCardProfileTitel'>Small Business Owner</p>
                                </div>
                            </div>
                            <div className='RealPeopleCardStar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                5.0
                            </div>
                            <div className='RealPeopleCardText'>
                                “Loved comparing real options side by side. Ended up saving 28%.” 
                            </div>
                        </div>
                        <div className='RealPeopleCard'>
                            <div className='RealPeopleCardProfileWaper'>
                                <Image
                                    className="RealPeopleCardProfile"
                                    src="/ReviewProfile.webp"
                                    alt="Auto Insurance Logo"
                                    width={61}
                                    height={61}
                                    style={{ width: "41px", height: "auto" }} // responsive
                                />
                                <div className='RealPeopleCardProfileNameTitelWaper'>
                                    <h1 className='RealPeopleCardProfileName'>Ashlynn Lubin</h1>
                                    <p className='RealPeopleCardProfileTitel'>Small Business Owner</p>
                                </div>
                            </div>
                            <div className='RealPeopleCardStar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                5.0
                            </div>
                            <div className='RealPeopleCardText'>
                                “Loved comparing real options side by side. Ended up saving 28%.” 
                            </div>
                        </div>
                        <div className='RealPeopleCard'>
                            <div className='RealPeopleCardProfileWaper'>
                                <Image
                                    className="RealPeopleCardProfile"
                                    src="/ReviewProfile.webp"
                                    alt="Auto Insurance Logo"
                                    width={61}
                                    height={61}
                                    style={{ width: "41px", height: "auto" }} // responsive
                                />
                                <div className='RealPeopleCardProfileNameTitelWaper'>
                                    <h1 className='RealPeopleCardProfileName'>Ashlynn Lubin</h1>
                                    <p className='RealPeopleCardProfileTitel'>Small Business Owner</p>
                                </div>
                            </div>
                            <div className='RealPeopleCardStar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                5.0
                            </div>
                            <div className='RealPeopleCardText'>
                                “Loved comparing real options side by side. Ended up saving 28%.” 
                            </div>
                        </div>
                        <div className='RealPeopleCard'>
                            <div className='RealPeopleCardProfileWaper'>
                                <Image
                                    className="RealPeopleCardProfile"
                                    src="/ReviewProfile.webp"
                                    alt="Auto Insurance Logo"
                                    width={61}
                                    height={61}
                                    style={{ width: "41px", height: "auto" }} // responsive
                                />
                                <div className='RealPeopleCardProfileNameTitelWaper'>
                                    <h1 className='RealPeopleCardProfileName'>Ashlynn Lubin</h1>
                                    <p className='RealPeopleCardProfileTitel'>Small Business Owner</p>
                                </div>
                            </div>
                            <div className='RealPeopleCardStar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                5.0
                            </div>
                            <div className='RealPeopleCardText'>
                                “Loved comparing real options side by side. Ended up saving 28%.” 
                            </div>
                        </div>
                        <div className='RealPeopleCard'>
                            <div className='RealPeopleCardProfileWaper'>
                                <Image
                                    className="RealPeopleCardProfile"
                                    src="/ReviewProfile.webp"
                                    alt="Auto Insurance Logo"
                                    width={61}
                                    height={61}
                                    style={{ width: "41px", height: "auto" }} // responsive
                                />
                                <div className='RealPeopleCardProfileNameTitelWaper'>
                                    <h1 className='RealPeopleCardProfileName'>Ashlynn Lubin</h1>
                                    <p className='RealPeopleCardProfileTitel'>Small Business Owner</p>
                                </div>
                            </div>
                            <div className='RealPeopleCardStar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                5.0
                            </div>
                            <div className='RealPeopleCardText'>
                                “Loved comparing real options side by side. Ended up saving 28%.” 
                            </div>
                        </div>
                        <div className='RealPeopleCard'>
                            <div className='RealPeopleCardProfileWaper'>
                                <Image
                                    className="RealPeopleCardProfile"
                                    src="/ReviewProfile.webp"
                                    alt="Auto Insurance Logo"
                                    width={61}
                                    height={61}
                                    style={{ width: "41px", height: "auto" }} // responsive
                                />
                                <div className='RealPeopleCardProfileNameTitelWaper'>
                                    <h1 className='RealPeopleCardProfileName'>Ashlynn Lubin</h1>
                                    <p className='RealPeopleCardProfileTitel'>Small Business Owner</p>
                                </div>
                            </div>
                            <div className='RealPeopleCardStar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" fill="#FD9A00" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" fill="#FD9A00" />
                                    <path d="M10.1667 1.44629L12.9992 7.18462L19.3333 8.11046L14.75 12.5746L15.8317 18.8813L10.1667 15.9021L4.50167 18.8813L5.58333 12.5746L1 8.11046L7.33417 7.18462L10.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40.1667 1.44629L42.9992 7.18462L49.3333 8.11046L44.75 12.5746L45.8317 18.8813L40.1667 15.9021L34.5017 18.8813L35.5833 12.5746L31 8.11046L37.3342 7.18462L40.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M70.1667 1.44629L72.9992 7.18462L79.3333 8.11046L74.75 12.5746L75.8317 18.8813L70.1667 15.9021L64.5017 18.8813L65.5833 12.5746L61 8.11046L67.3342 7.18462L70.1667 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M100.167 1.44629L102.999 7.18462L109.333 8.11046L104.75 12.5746L105.832 18.8813L100.167 15.9021L94.5017 18.8813L95.5833 12.5746L91 8.11046L97.3342 7.18462L100.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M130.167 1.44629L132.999 7.18462L139.333 8.11046L134.75 12.5746L135.832 18.8813L130.167 15.9021L124.502 18.8813L125.583 12.5746L121 8.11046L127.334 7.18462L130.167 1.44629Z" stroke="#FD9A00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                5.0
                            </div>
                            <div className='RealPeopleCardText'>
                                “Loved comparing real options side by side. Ended up saving 28%.” 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
