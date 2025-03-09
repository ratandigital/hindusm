import Image from "next/image";
import styles from "./page.module.css";
import BannerSlider from "@/components/BannerSlider";
import HeaderSection from "@/components/HeaderSection";
import DonationSection from "@/components/DonationComponent";
import VolunteerSection from "@/components/VolunteerSection";
import BackToTop from "@/components/BackToTop";
import FooterSection from "@/components/FooterSection";
import AboutSection from "@/components/AboutSection";
import HoliSection from "@/components/HoliSection";
import ProgressSection from "@/components/ProgressSection";
import PujaSection from "@/components/PujaSection";
import TesttimonialSection from "@/components/TesttimonialSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import SearchPage from "@/components/SearchPage";
import QuickViewe from "@/components/QuickViewe";
import SideNavebar from "@/components/SideNavebar";
import MobileNavebar from "@/components/MobileNavebar";



export default function Home() {
  return (
    <>
    {/* Preloader Start */}
    {/* <div className="sigma_preloader">
      <img src="assets/img/om.svg" alt="preloader" />
    </div> */}
    {/* Preloader End */}
    {/* Search Start */}
<SearchPage/>
    {/* Search End */}
    {/* partial:partial/__quickview.html */}
<QuickViewe/>
    {/* partial */}
    {/* partial:partia/__sidenav.html */}
 <SideNavebar/>
  
  {/* partial:partia/__mobile-nav.html */}
 <MobileNavebar/>
  <div className="sigma_aside-overlay aside-trigger-left" />
  {/* partial */}


    <div className="sigma_aside-overlay aside-trigger-right" />
    {/* partial */}
    {/* partial:partia/__mobile-nav.html */}

    {/* partial */}
    {/* partial:partia/__header.html */}
<HeaderSection/>
    {/* partial */}
    {/* Banner Start */}
      <BannerSlider/>
    {/* Banner End */}
    {/* About Start */}
<AboutSection/>
    {/* About End */}
    {/* holi Start */}
<HoliSection/>
    {/* holi End */}
    {/* Progress bar Start */}
 <ProgressSection/>
    {/* Progress bar End */}
    {/* Donation Start */}
  <DonationSection/>
    {/* Donation End */}
    {/* volunteers Start */}
 <VolunteerSection/>
    {/* volunteers End */}
    {/* Puja Start */}
   <PujaSection/>
    {/* Puja End */}
    {/* Testimonials Start */}
<TesttimonialSection/>
    {/* Testimonials End */}
    {/* CTA Start */}
 <CtaSection/>
    {/* CTA End */}
    {/* Form Start */}
<ContactSection/>
    {/* Form End */}
    {/* Blog Start */}
<BlogSection/>
    {/* Blog End */}
    {/* Back To Top Start */}
   <BackToTop/>
    {/* Back To Top End */}
    {/* Audio Box Start */}
    {/* <div class="sigma_audio-box">
      <div id="audio-btn">
  <i class="fa fa-play"> </i>
  <i class="fa fa-music"></i>
      </div>
    </div> */}
    {/* Audio Box End */}
    {/* partial:partia/__footer.html */}
<FooterSection/>
    {/* partial */}
  </>
  
  );
}
