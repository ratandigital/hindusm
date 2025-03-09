
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import MobileNavebar from '@/components/MobileNavebar'

import QuickViewe from '@/components/QuickViewe'

import CheckOut from '@/components/shop/CheckOut'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Checkout" />
    <CheckOut/>
    <Footer/>
    </>
  )
}
