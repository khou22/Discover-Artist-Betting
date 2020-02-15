import { AllowNull, Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'User' })
class User extends Model<User> {
    @AllowNull(false)
    @Column
    username: string;

    @AllowNull(false)
    @Column
    password: string;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    createdBy: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default User;
