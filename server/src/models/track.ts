import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import Artist from './artist';

@Table({
    name: {
        singular: 'Track',
        plural: 'Tracks',
    },
    freezeTableName: true,
})
class Track extends Model<Track> {
    @Column
    trackSpotifyId: string;

    @Column
    name: string;

    @Column
    durationMs: number;

    @Column
    url: string;

    @Column
    albumName: string;

    @Column
    thumbnail: string;

    @Column
    releaseDate: string;

    @ForeignKey(() => Artist)
    @Column
    artistId: number;

    @BelongsTo(() => Artist)
    artist: Artist;
}

export default Track;
