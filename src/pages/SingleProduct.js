import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
const SingleProduct = () => {
  const{orderedProduct, setorderedProduct} = useState(0)
  return (
    <>
    <Meta title={"single product"} />
    <Header />
    <BreadCrumb title = "Single Product" />
    <div className="main-product-wrapper  py-5 home-wrapper-2">
     <div className="container-xxl">
        <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6">
                
            </div>
        </div>

        <div className="description-wrapper py-5 home-wrapper-2">
           <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4 className=''>Description</h4>
                <div className="bg-white p-3">
                   <p>text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
            </div>
           </div>
        </div>
        
        <section className="review-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                <div className="col-12">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4>Customer Reviews</h4>
                      <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                       count={5}
                       onChange={ratingChanged}
                       size={24}
                       value={3}
                       edit="false"               
                      activeColor="#ffd700"
                     />
                     <p className='mb-0'>Based on 2 reviews</p>
                     </div>
                    </div>
                    <div>
                      <a href="http://">Write a Review</a>
                    </div>
                  </div>

                </div>
                </div>
            </div>
        </section>
    <section className="popular-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            You may like
          </h3>
        </div>
        <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </div>
    </div>
    </section>
     </div>
    </div>

    <Footer />
    </>
  )
}

export default SingleProduct