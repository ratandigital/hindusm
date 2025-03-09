
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import MainHoli from '@/components/holi/MainHoli'
import MobileNavebar from '@/components/MobileNavebar'

import QuickViewe from '@/components/QuickViewe'
import Clients from '@/components/services/Clients'


import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Holi" />
    <MainHoli/>
  <Clients/>
    <Footer/>
    </>
  )
}
