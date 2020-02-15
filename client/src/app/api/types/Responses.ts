import * as Models from '../../models';

export type ExampleResponse = {
    success: boolean;
    error?: string;
};

export type GetArtistResponse = {
    success: boolean;
    artist: Models.Artist;
};
