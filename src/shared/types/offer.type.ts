import { Facilities } from './facilities.type.js';
import { User } from './user.type.js';
import { OfferCoordinates } from './offer-coordinates.type.js';

export type Offer = {
  name: string;
  description: string;
  postDate: Date;
  city: string;
  previewImage: string;
  photoHouse: string[];
  premium: boolean;
  favorites: boolean;
  rating: number;
  typeHouse: string;
  counterRoom: number;
  counterGuest: number;
  priceRental: number;
  facilities: Facilities[];
  user: User;
  counterComments: number;
  offerCoordinates: OfferCoordinates;
}
