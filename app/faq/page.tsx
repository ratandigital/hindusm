
import Footer from '@/components/about/Footer'
import Form from '@/components/about/Form'
import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'

import MobileNavebar from '@/components/MobileNavebar'
import Faq from '@/components/others/Faq'
import QuickViewe from '@/components/QuickViewe'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="FAQ" />
<Faq/>
<Form/>

    <Footer/>
    </>
  )
}
