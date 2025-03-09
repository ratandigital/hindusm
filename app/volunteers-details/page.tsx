
import Footer from '@/components/about/Footer'
import Form from '@/components/about/Form'
import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'

import MobileNavebar from '@/components/MobileNavebar'
import QuickViewe from '@/components/QuickViewe'

import VolunteersDetails from '@/components/volunteers/VolunteersDetails'
import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Volunteer Details" />
<VolunteersDetails/>
<Form/>

    <Footer/>
    </>
  )
}
