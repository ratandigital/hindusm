
import Footer from '@/components/about/Footer'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import MobileNavebar from '@/components/MobileNavebar'
import AdditionalInformation from '@/components/product_details/AdditionalInformation'
import Product_contect from '@/components/product_details/Product_contect'
import QuickViewe from '@/components/QuickViewe'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Product Details" />
    <Product_contect/>
    <AdditionalInformation/>
    <Footer/>
    </>
  )
}
