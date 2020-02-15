import { Column, CreatedAt, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import Price from './price';
import Track from './track';
import Transaction from './transaction';

@Table({
    modelName: 'Artist',
    tableName: 'Artist',
    name: {
        singular: 'Artist',
        plural: 'Artists',
    },
    freezeTableName: true,
})
class Artist extends Model<Artist> {
    @Column
    name: string;

    @Column
    spotifyUrl: string;

    @Column
    monthlyListens: number;

    @Column
    followers: number;

    @Column
    bio: string;

    @Column
    foundedYear: number;

    @HasMany(() => Price)
    prices: Price[];

    @HasMany(() => Transaction)
    transactions: Transaction[];

    @HasMany(() => Track)
    tracks: Track[];

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default Artist;
