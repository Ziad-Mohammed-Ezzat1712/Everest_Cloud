import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import HomeCards from '../HomeCards/HomeCards'
import HomeSection3 from '../HomeSection3/HomeSection3'
import HomeSliderSection from '../HomeSliderSection/HomeSliderSection'
import HomeWhyUsSection from '../HomeWhyUsSection/HomeWhyUsSection'
import HomeOurproducts from '../HomeOurproducts/HomeOurproducts'
import GiftCardSection from '../HomeGiftCardSection/HomeGiftCardSection'
import HomeForbeginners from '../HomeForbeginners/HomeForbeginners'
import Testimonials from '../Testimonials/Testimonials'
import GetOffer from '../GetOffer/GetOffer'

export default function Home() {
  return (
   <>
   <HeroSection/>
   <HomeCards/>
   <HomeSection3/>
   <HomeSliderSection/>
   <HomeWhyUsSection/>
   <HomeOurproducts/>
   <GiftCardSection/>
   <HomeForbeginners/>
   <Testimonials/>
   <GetOffer/>
   </>
  )
}
