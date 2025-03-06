
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import MobileNavebar from '@/components/MobileNavebar'

import QuickViewe from '@/components/QuickViewe'

import Wishlist from '@/components/shop/Wishlist'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Wishlist" />
    <Wishlist/>
    <Footer/>
    </>
  )
}
