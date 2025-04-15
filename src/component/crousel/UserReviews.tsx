'use client';

import { Card } from '../card/card';
import './UserReviews.scss';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

const UserReviews = () => {
  const reviews = [
    {
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines.",
      author: "Maxin Will",
      role: " Manager"
    },
    {
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines.",
      author: "Maxin Will",
      role: "Product Manager"
    },
    {
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines.",
      author: "Maxin Will",
      role: "xmas Manager"
    }
  ];

  return (
    <div className="user-reviews">
      <div className='data-here'>
        <h1>What Users Say About Non Disclosure Agreement</h1>
        <p className="subtitle">Reviews from professional and business who have used this document template</p>
        <div className='know-why'>
          <p className="subtitle-2">Know Why Millions of Customers Believe in Us !</p>
        </div>  
        <div className="rating-overview">
          <span className="average-rating">4.5</span>
          <div className="stars">★★★★☆</div>
        </div>
      </div>

      <div className="reviews-grid">
        <Carousel reviews={reviews} />
      </div>
    </div>
  );
};

export default UserReviews;