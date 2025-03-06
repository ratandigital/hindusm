import About from '@/components/about/About'
import About2 from '@/components/about/About2'
import Footer from '@/components/about/Footer'
import Form from '@/components/about/Form'
import Header from '@/components/about/Header'
import History from '@/components/about/History'
import SubHeader from '@/components/about/SubHeader'
import BlogSection from '@/components/BlogSection'
import MobileNavebar from '@/components/MobileNavebar'
import QuickViewe from '@/components/QuickViewe'
import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="About Us" />
    <About/>
    <History/>
    <About2/>
    <Form/>
    <BlogSection/>
    <Footer/>
    </>
  )
}
