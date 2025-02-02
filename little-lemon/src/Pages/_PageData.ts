export interface CardProps {
  title: string;
  price: string;
  imgUrl: string;
}

export const homeContent = {
  title: 'Little Lemon',
  subtitle: 'Chicago',
  subcontent:
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
  buttonTitle: 'Reserve a Table',
  thisWeekTitle: 'This weeks a special!',
  thisWeekButton: 'Online Menu',
};

export const specials = [
  {
    title: 'Greek Salad',
    price: '12.99',
    imgUrl: '',
  },
  {
    title: 'Bruchetta',
    price: '5.99',
    imgUrl: '',
  },
  {
    title: 'Lemon Dessert',
    price: '5.00',
    imgUrl: '',
  },
];

export const reservationContent = {
  title: 'Reservation',
  labelOne: 'Indoor seating',
  labelTwo: 'Outdoor seating',
};
