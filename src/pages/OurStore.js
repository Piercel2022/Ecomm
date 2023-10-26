
import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta';
const OurStore = () => {
  return (
    <>
    <Meta title={"Our Store"} />
    <Header />
    <BreadCrumb title = "Our Store" />
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
        <div className='filter-card mb-3'>
          <h3 className="filter-title">
           Shop By Categories
           </h3>
           <div>
            <ul className='ps-0'>
              <li>Watch</li>
              <li>Tv</li>
              <li>Camera</li>
              <li>Laptop</li>
            </ul>
           </div>
        </div>
        <div className='filter-card mb-3'>
        <h3 className="filter-title">
        Filter By 
        <div>
          <h5 className="sub-title">
            
          </h5>
        </div>
        </h3>
        </div>
        <div className='filter-card mb-3'>
        <h3 className="filter-title">
        Products Tags
            </h3>
        </div>
        <div className='filter-card mb-3'>
        <h3 className="filter-title">
        Random Product
            </h3>
        </div>
        </div>
        <div className="col-9">

        </div>
      </div>

    </div>
    <Footer />
    </>
  )
}

export default OurStore