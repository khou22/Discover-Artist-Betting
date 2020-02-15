import { EXAMPLE_UPLOAD_STATE } from '../constants/States';

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
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
