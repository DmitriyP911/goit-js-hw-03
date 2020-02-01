`use strict`

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function ( allProdcuts, productName ) {
    let result = 0;
    for( let object of allProdcuts ) {
        for( let key in object ) {
            key = object[key];
            if( key === productName ) {
                result = object.price * object.quantity;
            }
        }
    }
    return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log( calculateTotalPrice( products, 'Радар' ) ); // 5200

console.log( calculateTotalPrice( products, 'Дроид' ) ); // 2800