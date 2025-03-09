import React from 'react'
import PostMeta from './PostMeta'
import MainContent from './MainContent'
import RelatedPost from './RelatedPost'
import AboutAuthor from './AboutAuthor'
import CommentsSection from './CommentsSection'
import Sidebar from './Sidebar'

export default function BlogDetails() {
  return (
    <>
  {/* Post Content Start */}
  <div className="section sigma_post-single">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-detail-wrapper">
        <MainContent/>
            {/* Post Meta Start */}
         <PostMeta/>
            {/* Post Meta End */}
            {/* Post Pagination Start */}
            <div className="section"></div>
            {/* Post Pagination End */}
            {/* Related Posts Start */}
      <RelatedPost/>
            {/* Related Posts End */}
            {/* About Author Start */}
    <AboutAuthor/>
            {/* About Author End */}
            {/* Comments Start */}
       <CommentsSection/>
            {/* Comments End */}
          </div>
        </div>
        {/* Sidebar Start */}
    <Sidebar/>
        {/* Sidebar End */}
      </div>
    </div>
  </div>
  {/* Post Content End */}
</>

  )
}
