
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import Form from '@/components/donation/Form'

import MobileNavebar from '@/components/MobileNavebar'
import Holi from '@/components/others/Holi'

import QuickViewe from '@/components/QuickViewe'
import Clients from '@/components/services/Clients'
import Cta from '@/components/services/Cta'
import MainServices from '@/components/services/MainServices'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Donation" />
    <Form/>
   <Holi/>
    <Footer/>
    </>
  )
}
