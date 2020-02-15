import Price from '../../models/price';

export const stripPrice = (price: Price) => ({
    date: price.date,
    price: price.price,
});
