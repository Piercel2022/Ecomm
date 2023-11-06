import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import BreadCrumb from './BreadCrumb'
import ProductCard from './ProductCard'
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import  Color from './Color'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'


const ratingChanged = (newRating) => {
  console.log(newRating);
};
const SingleProduct = () => {
  const [orderedProduct] = useState(true);
  const props = {width: 400, height: 500, zoomWidth: 500, img: "https://www.watches-of-switzerland.co.uk/medias/Carrera-3-hands.png?context=bWFzdGVyfHJvb3R8MTIwNDE4N3xpbWFnZS9wbmd8aDM5L2g5Zi85MTE3NjA5MzYxNDM4LnBuZ3w5ZWJjMDBiZWVkNDdiOGM4MzI5MDRiZWJiN2JjNGQ2NDM0ZjVkNWJjZTk5ZjYwZmE3ZmM5OWY5NGRmMTg5N2I0&imwidth=1920"};
  return (
    <>
    <Meta title={"single product"} />
    <Header />
    <BreadCrumb title = "Single Product" />
    <div className="main-product-wrapper  py-5 home-wrapper-2">
     <div className="container-xxl">
        <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                    <div>
                    <ReactImageZoom {...props} />
                    </div>
                  
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                      <div>
                        <img src="https://www.watches-of-switzerland.co.uk/medias/Carrera-3-hands.png?context=bWFzdGVyfHJvb3R8MTIwNDE4N3xpbWFnZS9wbmd8aDM5L2g5Zi85MTE3NjA5MzYxNDM4LnBuZ3w5ZWJjMDBiZWVkNDdiOGM4MzI5MDRiZWJiN2JjNGQ2NDM0ZjVkNWJjZTk5ZjYwZmE3ZmM5OWY5NGRmMTg5N2I0&imwidth=1920" className='img-fluid' alt="" />
                      </div>
                      <div>
                      <img src="https://www.watches-of-switzerland.co.uk/medias/Carrera-3-hands.png?context=bWFzdGVyfHJvb3R8MTIwNDE4N3xpbWFnZS9wbmd8aDM5L2g5Zi85MTE3NjA5MzYxNDM4LnBuZ3w5ZWJjMDBiZWVkNDdiOGM4MzI5MDRiZWJiN2JjNGQ2NDM0ZjVkNWJjZTk5ZjYwZmE3ZmM5OWY5NGRmMTg5N2I0&imwidth=1920" className='img-fluid' alt="" />
                      </div>
                      <div>
                      <img src="https://www.watches-of-switzerland.co.uk/medias/Carrera-3-hands.png?context=bWFzdGVyfHJvb3R8MTIwNDE4N3xpbWFnZS9wbmd8aDM5L2g5Zi85MTE3NjA5MzYxNDM4LnBuZ3w5ZWJjMDBiZWVkNDdiOGM4MzI5MDRiZWJiN2JjNGQ2NDM0ZjVkNWJjZTk5ZjYwZmE3ZmM5OWY5NGRmMTg5N2I0&imwidth=1920" className='img-fluid' alt="" />
                      </div>
                      <div>
                      <img src="https://www.watches-of-switzerland.co.uk/medias/Carrera-3-hands.png?context=bWFzdGVyfHJvb3R8MTIwNDE4N3xpbWFnZS9wbmd8aDM5L2g5Zi85MTE3NjA5MzYxNDM4LnBuZ3w5ZWJjMDBiZWVkNDdiOGM4MzI5MDRiZWJiN2JjNGQ2NDM0ZjVkNWJjZTk5ZjYwZmE3ZmM5OWY5NGRmMTg5N2I0&imwidth=1920" className='img-fluid' alt="" />
                      </div>
                
                  </div>
              </div>
            <div className="col-6">
                <div className="main-product-details">
                  <div className='border-bottom title'>
                    <h3>Day Date and calendar watches, calibre, watches of Switzerland UK</h3>
                  </div>
                  <div>
                    <p className="price border-bottom py-3">$ 100,00</p>
                    <div className='d-flex align-items-center'>
                    <ReactStars
                     count={5}
                     onChange={ratingChanged}
                     size={24}
                     value={3}
                      edit="true"               
                      activeColor="#ffd700"
                     />
                     <p className='mb-0 t-review'>( 2 reviews ) </p>
                    </div>
                    <a className='review-btn' href="#review">Write a review</a>
                  </div>
                  <div className='border-bottom py-2'></div>
                  <div className=' py-3'>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'> Type: </h3><p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'> Brand: </h3><p className='product-data'>Ecom world</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'> Category: </h3><p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'> Tags: </h3><p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'> Avalaibility: </h3><p className='product-data'>In Stock</p>
                    </div>
                    <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                    <h3 className='product-heading'> Size: </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                    </div>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2 mt-2 mb-3'>
                    <h3 className='product-heading'> Color: </h3>
                    <Color />
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2 mt-2 mb-3'>
                    <h3 className='product-heading'> Quantity: </h3>
                    <div className=''>
                      <input 
                      type="number" 
                      name="" 
                      className='form-control'
                      style={{width: "60px"}}
                      min={1}
                      max={10}
                      />
                    </div>
                    <div className='d-flex align-items-center gap-30'>
                       <button className='button border-0' type='submit'>Add To Cart

                       </button>
                       <button className='button signup'>Buy it now</button>
                    </div>
                    </div>
                    <div  className='d-flex align-items-center gap-15'>
                      <div>
                        <a href=""> <TbGitCompare />Add To Compare</a>
                      </div>
                      <div>
                        <a href=""><AiOutlineHeart />Add To Wishlist</a>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
            </div>
          </div>
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
        
  <section className="reviews-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                <div className="col-12">
                  <h4 id='review' >Reviews</h4>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4>Customer Reviews</h4>
                      <div id='review' className='d-flex align-items-center gap-10'>
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
                      {orderedProduct &&(
                      <div>
                      <a className='text-dark text-decoration-underline' href="http:">{" "}Write a Review</a>
                    </div> )}
                    </div>
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                <div>
                <div>
                <ReactStars
                 count={5}
                 onChange={ratingChanged}
                 size={24}
                 value={3}
                 edit="true"               
                activeColor="#ffd700"
                />
                </div>
                
                <div>
                <textarea name="" className="w-100 form-control" placeholder="Message" id="" cols="30" rows="10" />
                </div>
                <div className='d-flex justify-content-end py-3'>
                  <button className="button border-0">Submit a Review</button>
                </div>
                </div>
              </form>
                  </div>
                  <div className='reviews mt-3'>
                    <div className="review">
                    <div className='d-flex align-items-center gap-10'>
                    <h6 className='mb-0'>Navdeep</h6>
                    <ReactStars
                     count={5}
                     onChange={ratingChanged}
                     size={24}
                     value={3}
                     edit="true"               
                     activeColor="#ffd700"
                    />
                    </div>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
                    </div>
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

    <Footer />
    </>
  )
}

export default SingleProduct