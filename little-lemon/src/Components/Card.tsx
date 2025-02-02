import { CardProps } from '../Pages/_PageData';
import '../dist/css/Card.css';

const Card = ({ title, price, imgUrl }: CardProps) => {
  return (
    <div className="card">
      <div className='card_image_container'>
        <img src={imgUrl} alt="" />
      </div>
      <div className="card_content">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
