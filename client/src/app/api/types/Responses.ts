import * as Models from '../../models';

export type ExampleResponse = {
    success: boolean;
    error?: string;
};

export type GetUsersResponse = {
    success: boolean;
    users: Models.User[];
};

export type GetArtistResponse = {
    success: boolean;
    artist: Models.Artist;
};

export type GetArtistsResponse = {
    success: boolean;
    artists: Models.Artist[];
};
