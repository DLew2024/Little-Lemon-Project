import { CardProps } from '../Pages/_PageData';
import deliveryLogo from '../Images/icons/delivery.svg';

const Card = ({ title, price, imgUrl, description }: CardProps) => {
  return (
    <div className="card">
      <div className="card_image_container">
        <img src={imgUrl} alt="Picture of food" />
      </div>
      <div className="card_content">
        <div className="heading">
          <p id="title">{title}</p>
          <p>${price}</p>
        </div>
        <div className="details">{description}</div>
        <div className="delivery_wrapper">
          <div>Order a delivery</div>
          <div>
            <img src={deliveryLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
