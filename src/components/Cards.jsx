import React, {useState} from 'react';
//import data
import { product } from '../data';
//import images
import ArrowImg from '../assets/img/product/cards/arrow.svg';

const Cards = () => {

  const [index, setIndex] = useState(1);
  //destructure product data 
  const { cards } = product;
  return <>
   <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] lg:mb-32' id='Sobrenos'>
    {cards.map((card, cardIndex) => {
      //destructure card
      const {icon, title, subtitle, delay} = card;
      return <div key={cardIndex} data-aos='zoom-out' data-aos-offset='300' data-aos-delay='delay'>
         <div onClick={() => setIndex(cardIndex)} className={`${index === cardIndex && 'bg-white shadow-2xl'} w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}>
            <div className='mb-6'>
              <img src={icon} alt="" />
            </div>
            <div className='mb-3 text-[30px] font-medium'>{title}</div>
            <p className='mb-6 text-light'>{subtitle}</p>
            {index === cardIndex && <img src={ArrowImg} alt="" />}
         </div>
      </div>
    })}
   </div>
  </>
  
}

export default Cards
