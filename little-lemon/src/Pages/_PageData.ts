import greekSalad from '../Images/greek_salad.jpg';
import bruschetta from '../Images/bruchetta.svg';
import lemonDessert from '../Images/lemon_dessert.jpg';

export interface CardProps {
  title: string;
  price: string;
  imgUrl: string;
  description: string;
}

export const homeContent = {
  title: 'Little Lemon',
  subtitle: 'Chicago',
  subcontent:
    'We are a family owned Mediterranean restaurant,' +
    ' focused on traditional' +
    ' recipes served with a modern twist.',
  buttonTitle: 'Reserve a Table',
  thisWeekTitle: 'This weeks specials!',
  thisWeekButton: 'Online Menu',
};

export const specials = [
  {
    title: 'Greek Salad',
    price: '12.99',
    imgUrl: greekSalad,
    description:
      'The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    title: 'Bruchetta',
    price: '5.99',
    imgUrl: bruschetta,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    title: 'Lemon Dessert',
    price: '5.00',
    imgUrl: lemonDessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined.",
  },
];

export const reservationContent = {
  title: 'Reservation',
  labelOne: 'Indoor seating',
  labelTwo: 'Outdoor seating',
};
