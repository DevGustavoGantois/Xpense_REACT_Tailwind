import React from 'react';
//import data
import { overview } from '../data';

const Overview = () => {
  //deestructure data overview
  const {productImg} = overview;

  return <section className='lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
    <div className="container mx-auto flex justify-end">
      <img src={productImg} alt="" data-aos='fade-up' data-aos-offset='300'/>
    </div>
  </section>
  
}

export default Overview
