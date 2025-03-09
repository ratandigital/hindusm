
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import ContactForm from '@/components/contact/ContactForm'
import Map from '@/components/contact/Map'
import MobileNavebar from '@/components/MobileNavebar'

import QuickViewe from '@/components/QuickViewe'



import React from 'react'
import Icon from '@/components/contact/Icon'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Contact Us" />
    <Map/>
    <ContactForm/>
    <Icon/>
    <Footer/>
    </>
  )
}
