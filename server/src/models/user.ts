import {
    AllowNull,
    Column,
    CreatedAt,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import Transaction from './transaction';

@Table({ tableName: 'User' })
class User extends Model<User> {
    @AllowNull(false)
    @Column
    username: string;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @HasMany(() => Transaction)
    transactions: Transaction[];

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default User;
