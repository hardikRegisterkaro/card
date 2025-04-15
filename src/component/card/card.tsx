import './Card.scss';
import Image from 'next/image';

interface CardProps {
  rating: number;
  text: string;
  author: string;
  role: string;
}

export const Card = ({ rating, text, author, role }: CardProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="rating">
          {renderStars()}
          <span className="rating-text">{rating}/5</span>
        </div>
        <p className="review-text">{text}</p>
      </div>
      <div className="author-section">
        <div className="author-info">
          <div className="avatar">
            {author.charAt(0).toUpperCase()}
          </div>
          <div className="details">
            <h3>{author}</h3>
            <p>{role}</p>
          </div>
        </div>
        <Image 
          src="/vector.png"
          alt="background shape"
          className="vector-bg"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

