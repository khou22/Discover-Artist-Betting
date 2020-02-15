import { Column, CreatedAt, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import Price from './price';

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

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default Artist;
