import Price from '../../models/price';

export const stripPrice = (price: Price) => ({
    id: price.id,
    date: price.date,
    price: price.price,
});
