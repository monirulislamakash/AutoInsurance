import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function () {
    return (
        <div className='PreviewYourSavings'>
            <div className='container'>
                <div className='PreviewYourSavingsWaper'>
                    <h1 className='PreviewYourSavingTitel'>
                        Preview Your Savings
                    </h1>
                    <p className='PreviewYourSavingText'>
                        Here’s how sample quotes look. Your personalized rates update instantly based on your answers.
                    </p>
                    <div className='PreviewYourSavingsTableWaper'>
                        <table className="table">
                            <thead>
                                <tr className='PreviewYourSavingsTableHeader'>
                                    <th scope="col">Insurer</th>
                                    <th scope="col">Monthly Rate</th>
                                    <th scope="col">Est. Savings</th>
                                    <th scope="col">Coverage</th>
                                    <th scope="col">Rating</th>
                                </tr>
                            </thead>
                            <tbody className='PreviewYourSavingsTableBody'>
                                <tr>
                                    <th>
                                        <Image
                                            className='PreviewYourSavingsTableBodyImage'
                                            src="/py1.webp"
                                            alt="Auto Insurance Logo"
                                            width={85}
                                            height={20}
                                            style={{ width: "100%", height: "auto" }} // responsive
                                        />
                                    </th>
                                    <td>$86/mo</td>
                                    <td>$31/mo</td>
                                    <td>Standard</td>
                                    <td>A </td>
                                </tr>
                                <tr>
                                    <th>
                                        <Image
                                            className='PreviewYourSavingsTableBodyImage'
                                            src="/py2.webp"
                                            alt="Auto Insurance Logo"
                                            width={85}
                                            height={20}
                                            style={{ width: "100%", height: "auto" }} // responsive
                                        />
                                    </th>
                                    <td>$94/mo</td>
                                    <td>$24/mo</td>
                                    <td>Plus</td>
                                    <td>A-</td>
                                </tr>
                                <tr>
                                    <th>
                                        <Image
                                            className='PreviewYourSavingsTableBodyImage'
                                            src="/py3.webp"
                                            alt="Auto Insurance Logo"
                                            width={85}
                                            height={20}
                                            style={{ width: "100%", height: "auto" }} // responsive
                                        />
                                    </th>
                                    <td>$102/mo</td>
                                    <td>$19/mo</td>
                                    <td>Basic</td>
                                    <td>B+</td>
                                </tr>
                                                                <tr>
                                    <th>
                                        <Image
                                            className='PreviewYourSavingsTableBodyImage'
                                            src="/py4.webp"
                                            alt="Auto Insurance Logo"
                                            width={85}
                                            height={20}
                                            style={{ width: "100%", height: "auto" }} // responsive
                                        />
                                    </th>
                                    <td>$102/mo</td>
                                    <td>$19/mo</td>
                                    <td>Basic</td>
                                    <td>B+</td>
                                </tr>
                                                                <tr>
                                    <th>
                                        <Image
                                            className='PreviewYourSavingsTableBodyImage'
                                            src="/py5.webp"
                                            alt="Auto Insurance Logo"
                                            width={85}
                                            height={20}
                                            style={{ width: "100%", height: "auto" }} // responsive
                                        />
                                    </th>
                                    <td>$102/mo</td>
                                    <td>$19/mo</td>
                                    <td>Basic</td>
                                    <td>B+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='PreviewYourSavingsButtonWaper'>
                            <Link href="forms" className='PreviewYourSavingsButton'>
                                See my Savings Now
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
