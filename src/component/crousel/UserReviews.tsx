import { Card } from '../card/card';
import './UserReviews.scss';

const UserReviews = () => {
  const reviews = [
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
      role: "Product Manager"
    },
  ];

  return (
    <div className="user-reviews">
      <div className='data-here'>
        <h1>What Users Say About Non Disclosure Agreement</h1>
        <p className="subtitle">Reviews from professional and business who have used this document template</p>
        <p className="subtitle-2">Know Why Millions of Customers Believe in Us !</p>
        <div className="trust-banner">
          <div className="rating-overview">
            <span className="average-rating">4.5</span>
            <div className="stars">★★★★☆</div>
          </div>
        </div>
      </div>


      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <Card
            key={index}
            rating={review.rating}
            text={review.text}
            author={review.author}
            role={review.role}
          />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;