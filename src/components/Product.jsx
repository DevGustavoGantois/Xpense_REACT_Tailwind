import React from 'react';
//import data
import { product } from '../data';
//import components
import Cards from './Cards';


const Product = () => {

  //destructure product
  const {title, subtitle} = product;

  return <section className=''>
    <div className="container mx-auto">
      <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20'>
        <h2 className='section-title' data-aos='fade-up' data-aos-offset='400' data-aos-delay='300'>{title}</h2>
        <p className='lead lg:max-w-[350px]' data-aos='fade-up' data-aos-offset='400' data-aos-delay='300'>{subtitle}</p>
      </div>
      <Cards/>
    </div>
  </section>
}

export default Product
