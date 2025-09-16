import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, User, OfferCoordinates, CityName, HouseType, Facility } from '../../index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([
        name,
        description,
        createdDate,
        city,
        previewImage,
        photoHouse,
        premium,
        favorites,
        rating,
        typeHouse,
        counterRoom,
        counterGuest,
        priceRental,
        facilities,
        userName,
        userEmail,
        userAvatar,
        userPassword,
        userType,
        counterComments,
        latitude,
        longitude
      ]) => {

        const user: User = {
          name: userName,
          email: userEmail,
          avatar: userAvatar,
          password: userPassword,
          type: userType as 'обычный' | 'pro'
        };

        const offerCoordinates: OfferCoordinates = {
          latitude: Number.parseFloat(latitude),
          longitude: Number.parseFloat(longitude)
        };

        return {
          name,
          description,
          postDate: new Date(createdDate),
          city: city as CityName,
          previewImage,
          photoHouse: photoHouse.split(';').map((photo) => photo.trim()),
          premium: premium === 'true',
          favorites: favorites === 'true',
          rating: Number.parseFloat(rating),
          typeHouse: typeHouse as HouseType, // Приводим к enum
          counterRoom: Number.parseInt(counterRoom, 10),
          counterGuest: Number.parseInt(counterGuest, 10),
          priceRental: Number.parseInt(priceRental, 10),
          facilities: facilities.split(';').map((facility) => facility as Facility),
          user,
          counterComments: Number.parseInt(counterComments, 10),
          offerCoordinates
        };
      });
  }
}
