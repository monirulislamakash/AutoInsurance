import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NeedQuoteFast() {
  return (
    <div className='NeedQuoteFast'>
      <Image
        className='FindYourLowestAutoRateBG'
        src="/watermark.webp"
        width={1990}
        height={700}
        style={{ width: "100%", height: "auto" }}
      />
      <div className='container'>
        <div className='NeedQuoteFastWaper'>
          <h1 className='NeedQuoteFastTitel'>
            Need a Quote Fast? Skip the Form and Call Now!
          </h1>
          <p className='NeedQuoteFastText'>
            Skip the form and get your quote in seconds. No waiting, no obligation.
          </p>
          <Link href="#" className='NeedQuoteFastButton'>
            Call Now for Instant Help!
          </Link>
        </div>
      </div>

    </div>
  )
}
