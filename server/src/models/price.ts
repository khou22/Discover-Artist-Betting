import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import Artist from './artist';

@Table({
    name: {
        singular: 'Price',
        plural: 'Prices',
    },
    freezeTableName: true,
})
class Price extends Model<Price> {
    @Column
    date: Date;

    @Column
    price: number;

    @ForeignKey(() => Artist)
    @Column
    artistId: number;

    @BelongsTo(() => Artist)
    artist: Artist;
}

export default Price;
