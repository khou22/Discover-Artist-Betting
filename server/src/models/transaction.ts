import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import Artist from './artist';
import Price from './price';
import User from './user';

@Table({
    name: {
        singular: 'Transaction',
        plural: 'Transactions',
    },
    freezeTableName: true,
})
class Transaction extends Model<Transaction> {
    @Column
    date: Date;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Artist)
    @Column
    artistId: number;

    @BelongsTo(() => Artist)
    artist: Artist;

    @ForeignKey(() => Price)
    @Column
    priceId: number;

    @BelongsTo(() => Price)
    price: Price;
}

export default Transaction;
