import { Facility } from './facility.type.js';
import { User } from './user.type.js';
import { OfferCoordinates } from './offer-coordinates.type.js';
import { CityName } from './city-name.type.js';
import { HouseType } from './house.type.js';

export type Offer = {
  name: string;
  description: string;
  postDate: Date;
  city: CityName;
  previewImage: string;
  photoHouse: string[];
  premium: boolean;
  favorites: boolean;
  rating: number;
  typeHouse: HouseType;
  counterRoom: number;
  counterGuest: number;
  priceRental: number;
  facilities: Facility[];
  user: User;
  counterComments: number;
  offerCoordinates: OfferCoordinates;
}
