import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { Route } from 'react-router-dom'
import Search from './layout/Search'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)


const Home = ({match}) => { 
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState([1, 1000])
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState(0)

  const categories = [
    'Plants',
    'Devices',
    'Pots',
    'Fertilizers'
    ]
  const alert = useAlert();  
  const dispatch = useDispatch();

  const  { loading, products, error, productsCount, resPerPage, filterdProductsCount } = useSelector(state => state.products)

  const keyword = match.params.keyword

  useEffect(() => {  
    if(error){
     
      return alert.error(error)
      }

    dispatch(getProducts(keyword, currentPage, price, category, rating));


  },[dispatch, alert, error, keyword, currentPage, price, category, rating])

  function setCurrentPageNo(pageNumber){
    setCurrentPage(pageNumber)
  }

  let count = productsCount;
  if(keyword) {
    count = filterdProductsCount
  }


  return (
    <Fragment>
      {loading? <Loader/>: (
        <Fragment>
            <MetaData title={'Buy Best Products Online'}/>
            <div className="flex justify-center py-10">
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                    <h1 className="pt-3 text-3xl font-bold mx-4 md:text-6xl md:pt-1">OUR PRODUCTS</h1>
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                </div>
            
      <section id="products" className="container mt-5">
      <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>
        <div className="row">

          {keyword ? (
              <Fragment>
                <div className="col-12 col-md-3 mt-5 mb-5">
                    <div className="px-5">
                      <Range
                          marks={{
                            1 : `Php 1` ,
                            1000: `Php 1000`
                          }}
                          min={1}
                          max={1000}
                          defaultValue={[1, 1000]}
                          tipFormatter={value => `Php${value}`}
                          tipProps={{
                            placement: "top", 
                            visible: true
                          }}
                          value={price}
                          onChange={price => setPrice(price)}
                      />
                       <hr className="my-5" />

<div className="mt-5">
    <h4 className="mb-3">
        Categories
    </h4>

    <ul className="pl-0">
        {categories.map(category => (
            <li
                style={{
                    cursor: 'pointer',
                    listStyleType: 'none'
                }}
                key={category}
                onClick={() => setCategory(category)}
            >
                {category}
            </li>
        ))}
    </ul>
</div>

<hr className="my-3" />

<div className="mt-5">
    <h4 className="mb-3">
        Ratings
    </h4>

    <ul className="pl-0">
        {[5, 4, 3, 2, 1].map(star => (
            <li
                style={{
                    cursor: 'pointer',
                    listStyleType: 'none'
                }}
                key={star}
                onClick={() => setRating(star)}
            >
                <div className="rating-outer">
                    <div className="rating-inner"
                        style={{
                            width: `${star * 20}%`
                        }}
                    >
                    </div>
                </div>
                        </li>
                    ))}
                </ul>
            </div>

            </div>
            </div>
                                
                <div className="col-12 col-md-9">
                   <div className="row">
                          {products.map(product => (
                              <Product key={product._id} product={product} col={3}/>
                          ))}
                    </div>    
                  </div>          
              </Fragment>
          ):(
            products.map(product => (
                <Product key={product._id} product={product} col={3}/>
              ))
          )}

      </div>
    </section>

            {resPerPage <= count && (
                <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount= {productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={'Next'}
                  previousPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass="page-item"
                  linkClass="page-link"
                />
                </div>
            )}  
           

        </Fragment>
      )}
      
    </Fragment>
  )
}

export default Home
