// components/reviews/reviews.ts (or data/reviews.ts)

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
}

export const ReviewsData: Review[] = [
  {
    id: 1,
    name: "Annette Patterson",
    date: "November 15, 2024",
    rating: 5,
    text: "Absolutely the best Syrian coffee! Coffee with a little bit of cardamom serve with a little sweet on the side. Meant to be had while sitting…never to go. Absolutely the most pleasant atmosphere with soothing Arabic music in the background. But while this coffee was great, they are full service coffee shop with all of the coffee offerings that you would want. So happy that I happened upon this place and will be back again.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWBt1YpAZL5j-yS7IvpxUlgDxt8ugXp3bqLdcMZUqxK3EoCwWKwKA=w45-h45-p-rp-mo-ba5-br100",
  },
  {
    id: 2,
    name: "Myssan Laycy",
    date: "March 28, 2025",
    rating: 5,
    text: "The smell of coffee is enough to attract you to this place ! We love the coffee there , and the special Arabic flavor pastries are another level ! Would visit any time we are in PITT",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWMGSOdIM3GbNZKZEDA3SoHT-f6T0DoYRSvxeNbB8t181Q5APcp=w45-h45-p-rp-mo-ba3-br100",
  },
  {
    id: 3,
    name: "Gabriael Buzon-Loment",
    date: "January 2, 2025",
    rating: 5,
    text: "Novaria Coffee Co. offers a truly unique coffee experience in Pittsburgh that transports you to another world. This gem of a café introduces you to the rich and aromatic flavors of Syrian coffee culture, making it a must-visit for anyone looking to try something different from the typical coffee shop offerings.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWPOkPgf9yRApikpOGvz6MWtsMB9ivAcGHteT677QVl-ojJgVAWgQ=w45-h45-p-rp-mo-ba6-br100",
  },
  {
    id: 4,
    name: "Neil Rischl",
    date: "October 20, 2024",
    rating: 5,
    text: "I have not been back to this city in about 10 years and I couldn't have had a better experience than at this amazing spot. The owner was very warm and knowledgeable. The rose and date latte were both amazing! The espresso was incredible as well. This is probably one of if not the best coffee shop in Pittsburgh. I look forward to visiting this fine establishment the next time I'm in town.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXuU2HUJzTsWfKJCgnnrXMWifc4QAgBfFlRL7PcLv5hDodkbHZ_=w45-h45-p-rp-mo-ba5-br100",
  },
];
