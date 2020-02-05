`use strict`

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    // Начальный Id
    startId: 0,

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction ( amount, type ) {
        return {
            amount,
            type,
            id: this.transactions.length + 1,
        };
    },


    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit ( amount ) {
        this.balance += amount;
        this.transactions.push( this.createTransaction( amount, 'deposit' ) );
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw ( amount ) {
        this.createTransaction();
        if( amount > this.balance ) {
            return console.log( `Снятие такой суммы не возможно, недостаточно средств.` );
        }
        this.balance -= amount;
        this.transactions.push( this.createTransaction( amount, 'withdraw' ) );
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance () {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails ( id ) {
        for( let transaction of this.transactions ) {
            if( transaction.id === id ) {
                return transaction;
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal ( type ) {
        let total = 0;

        for( const transaction of this.transactions ) {
            if( transaction.type === type ) {
                total += transaction.amount;
            }
        }

        return total;
    },
};