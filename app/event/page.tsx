
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'

import MobileNavebar from '@/components/MobileNavebar'

import QuickViewe from '@/components/QuickViewe'



import React from 'react'

import MainEvent from '@/components/Event/MainEvent'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Event" />
   <MainEvent/>
    <Footer/>
    </>
  )
}
