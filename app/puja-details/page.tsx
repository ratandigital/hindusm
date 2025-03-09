
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'

import MobileNavebar from '@/components/MobileNavebar'
import PujaDetails from '@/components/puja/PujaDetails'


import QuickViewe from '@/components/QuickViewe'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Puja Details" />
   <PujaDetails/>
    <Footer/>
    </>
  )
}
