import React from 'react'
import Image from "next/image"
export default function HeroSection() {
    return (
        <div className="HerroSection">
            <Image
                src="/herosection.webp"
                className='HerroSectionBG'
                alt="HerroSectionBg"
                fill
            />
            <div className='HerroSectionContent'>
                <div className='container'>
                    <div className='HerroSectionContentWaper'>
                        <div className='HerroSectionTextAndForm'>
                            <h1 className='HerroSectionContentTitel'>
                                Best auto insurance rate in 90 seconds—save now!
                            </h1>
                            <div className='HerroSectionContentFrom'>
                                <svg className='HerroSectionContentFromWaterIcon' xmlns="http://www.w3.org/2000/svg" width="81" height="78" viewBox="0 0 81 78" fill="none">
                                    <g opacity="0.3" clipPath="url(#clip0_180_4300)">
                                        <path d="M54.5154 77.9936C53.1728 77.9936 51.8302 77.7163 50.5606 77.1764L50.5314 77.2347C50.1228 77.0158 49.7141 76.7823 49.3055 76.5489C47.204 75.4252 43.2492 73.0902 38.696 69.2083C36.3611 67.2966 33.9969 64.9324 31.7641 62.2472C29.2394 59.5912 26.7002 56.6579 24.1317 53.4473C6.26924 30.6376 1.67228 5.44922 0.533986 -7.52442L0.285899 -9.53833C-0.0643454 -11.9317 -0.983749 -18.2215 4.40126 -20.8629C23.4166 -31.0492 65.5627 -38.3459 100.091 -22.7309L100.397 -22.5849C100.821 -22.366 101.404 -22.1179 102.017 -21.8699C104.527 -20.8337 109.752 -18.6593 110 -12.8657V-12.6176V-12.3695C109.65 -3.7009 106.833 26.6244 85.6434 53.2722C76.61 64.4362 67.9123 72.1562 59.0394 76.9137L58.5432 77.1472C57.2298 77.7017 55.858 77.979 54.5008 77.979L54.5154 77.9936ZM40.4764 54.1478C45.2485 59.168 49.9039 63.0207 54.53 65.808C61.6079 61.751 68.7733 55.1985 76.3619 45.8295C93.7574 23.9392 97.2744 -0.796814 97.9749 -10.6328C97.7852 -10.7058 97.6101 -10.7934 97.4496 -10.8517C96.7199 -11.1582 95.888 -11.4939 95.0562 -11.9317C63.2569 -26.2333 26.5396 -18.0609 12.0629 -11.3625C12.0629 -11.3333 12.0629 -11.2895 12.0775 -11.2604L12.3109 -9.58211L12.3985 -8.54596C12.9969 -1.84754 14.6021 8.48467 18.9072 19.926C20.673 8.57223 26.131 -0.636286 35.179 -7.55361C44.0227 -14.5147 57.4487 -16.2076 68.5252 -11.7274C78.0256 -7.88927 84.2278 -0.198479 85.5412 9.38947C86.9276 20.9183 82.1847 31.0754 72.8741 36.6794C63.1694 42.5168 51.013 41.8892 41.1769 35.0449L47.9775 25.2526C53.9171 29.3826 61.1117 29.8496 66.7448 26.4639C71.9985 23.3117 74.5377 17.6348 73.7351 10.9072C72.7573 3.84394 67.2702 0.618767 64.0742 -0.680056C56.938 -3.56957 48.0505 -2.51883 42.4904 1.85923C33.9386 8.39712 29.9399 17.4597 30.2172 29.6161C30.3923 37.2193 34.5807 46.851 40.5056 54.1478H40.4764Z" fill="#0033A0" />
                                        <path d="M57.6968 6.14977L59.1708 10.1484C59.2584 10.3965 59.4627 10.6008 59.7108 10.6884L63.7094 12.1623C64.5121 12.4542 64.5121 13.5925 63.7094 13.899L59.7108 15.3729C59.4627 15.4604 59.2584 15.6648 59.1708 15.9128L57.6968 19.9115C57.405 20.7141 56.2667 20.7141 55.9603 19.9115L54.4863 15.9128C54.3987 15.6648 54.1944 15.4604 53.9463 15.3729L49.9477 13.899C49.145 13.6071 49.145 12.4688 49.9477 12.1623L53.9463 10.6884C54.1944 10.6008 54.3987 10.3965 54.4863 10.1484L55.9603 6.14977C56.2521 5.34713 57.3904 5.34713 57.6968 6.14977Z" fill="#0033A0" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_180_4300">
                                            <rect width="81" height="78" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 className='HerroSectionContentFromTitel'>
                                    Enter your ZIP code to check your potential savings.
                                </h1>
                                <input className='HerroSectionContentFromInput' type='text' placeholder='Zip code' />
                                <button className='HerroSectionContentFromButton'>
                                    See My Free Quotes
                                </button>
                            </div>
                        </div>
                        <div className='HeroImages'>
                            <Image
                                className='HeroImagesOrg'
                                src="/Heroimage.webp"
                                alt="Auto Insurance Logo"
                                width={528}
                                height={527}
                                style={{ width: "100%", height: "auto" }} // responsive
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
