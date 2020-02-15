import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import Artist from './artist';
import Transaction from './transaction';

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

    @HasMany(() => Transaction)
    transactions: Transaction[];
}

export default Price;
