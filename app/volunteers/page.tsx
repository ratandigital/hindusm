
import Footer from '@/components/about/Footer'
import Form from '@/components/about/Form'
import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'

import BlogSection from '@/components/BlogSection'
import Broadcast from '@/components/boardcast/Broadcast'
import MobileNavebar from '@/components/MobileNavebar'
import QuickViewe from '@/components/QuickViewe'
import MainVolunteers from '@/components/volunteers/MainVolunteers'
import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Volunteers" />
<MainVolunteers/>
<Form/>
<BlogSection/>
    <Footer/>
    </>
  )
}
