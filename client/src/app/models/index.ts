import { EXAMPLE_UPLOAD_STATE } from '../constants/States';

export interface User {
    username: string;
    firstName: string;
    lastName: string;
    transactions: Transaction[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ExampleModel {
    id?: number;
    fileState: EXAMPLE_UPLOAD_STATE;
}

export type Artist = {
    id: number;
    name: string;
    spotifyUrl: string;
    monthlyListens: number;
    followers: number;
    bio?: string;
    foundedYear?: number;
    image: string;
    spotifyId: string;
    popularity: number;
    genre: string;
    prices: Price[];
    tracks: Track[];
    createdAt: Date;
    updatedAt: Date;
};

export type Price = {
    id?: number;
    date: Date;
    price: number;
};

export type Track = {
    id: number;
    trackSpotifyId: string;
    name: string;
    durationMs: number;
    url: string;
    albumName: string;
    thumbnail: string;
    releaseDate: string;
    artistId: number;
};

export type Transaction = {
    date: Date;
    userId: number;
    user: User;
    artistId: number;
    artist: Artist;
    priceId: number;
    price: Price;
};
