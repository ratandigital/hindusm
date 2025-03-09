
import Footer from '@/components/about/Footer'
import Form from '@/components/about/Form'

import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import BlogSection from '@/components/BlogSection'

import MobileNavebar from '@/components/MobileNavebar'
import MainPuja from '@/components/puja/MainPuja'

import QuickViewe from '@/components/QuickViewe'

import React from 'react'

export default function page() {
  return (
    <>
    <QuickViewe/>
    <MobileNavebar/>
    <Header/>
    <SubHeader title="Puja" />
   <MainPuja/>
   <Form/>
   <BlogSection/>
    <Footer/>
    </>
  )
}
