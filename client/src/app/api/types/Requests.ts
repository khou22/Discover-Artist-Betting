export type ExampleRequest = {
    id: string;
};

export type GetArtistRequest = {
    id: string;
};

export type EmptyRequest = {};

export type CreateTransactionsRequest = {
    artistId: number;
    priceId: number;
};
