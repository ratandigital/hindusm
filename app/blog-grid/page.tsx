import Footer from '@/components/about/Footer'
import Header from '@/components/about/Header'
import SubHeader from '@/components/about/SubHeader'
import GridBlog from '@/components/blog/GridBlog'
import MobileNavebar from '@/components/MobileNavebar'
import QuickViewe from '@/components/QuickViewe'
import React from 'react'

export default function Page() {
  return (
    <>
      <QuickViewe />
      <MobileNavebar />
      <Header />
      <SubHeader title="Blog" />
      <GridBlog />
      <Footer />
    </>
  )
}
