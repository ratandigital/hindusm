
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import MobileNavebar from '@/components/MobileNavebar'
import QuickViewe from '@/components/QuickViewe'
import MainShop from '@/components/shop/MainShop'
import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="SHOP" />
    <MainShop/>
    <Footer/>
    </>
  )
}
