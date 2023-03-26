export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Platinum',
    price: 299,
    description:
      "The ultimate 1-month gym membership plan for fitness enthusiasts who want access to all the gym's premium features, including unlimited group classes, personal training sessions, and full access to all facilities. With the Platinum plan, you can enjoy exclusive perks like early access to equipment and priority booking for classes.",
  },
  {
    id: 2,
    name: 'Gold',
    price: 199,
    description:
      "The Gold membership plan offers a 1-month well-rounded gym experience with access to all the gym's equipment, cardio machines, and group classes. You'll also get a free personal training session to help jumpstart your fitness journey and exclusive discounts on select amenities.",
  },
  {
    id: 3,
    name: 'Silver',
    price: 149,
    description:
      "The Silver membership plan provides a 1-month great value for those who want access to the gym's basic amenities, including cardio machines, strength training equipment, and limited group classes. With this plan, you can also receive discounts on personal training and other select amenities.",
  },
  {
    id: 4,
    name: 'Bronze',
    price: 99.0,
    description:
      "The Bronze membership 1-month plan is perfect for those who are just starting their fitness journey and want access to the gym's basic facilities, including cardio machines and strength training equipment. Although it offers fewer perks than other plans, it provides a great way to start working towards your fitness goals without breaking the bank.",
  },
];
