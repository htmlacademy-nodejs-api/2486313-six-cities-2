import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer } from '../../index.js';

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
      .map(([name, description, createdDate, city, previewImage,
        photoHouse, premium, favorites, rating, typeHouse,
        counterRoom, counterGuest, priceRental, facilities,
        user, counterComments, offerCoordinates]) => ({
        name,
        description,
        postDate: new Date(createdDate),
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
        user,
        counterComments,
        offerCoordinates
      }));
  }
}
