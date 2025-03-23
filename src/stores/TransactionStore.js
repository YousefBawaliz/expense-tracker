import { defineStore } from 'pinia';

class Transaction {
    constructor(id, description, amount) {
        this.id = id;
        this.description = description;
        this.amount = amount;
    }
}



export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        transactions: [
            // { id: 1, description: 'Groceries', amount: -50 },
            // { id: 2, description: 'Salary', amount: 1000 },
            // { id: 3, description: 'Utilities', amount: -150 },
            // { id: 4, description: 'Dining Out', amount: -75 },
            // { id: 5, description: 'Freelance Work', amount: 300 }
        ]
    }),
    actions: {
        addTransaction(description, amount) {
            this.transactions.push(new Transaction(Date.now(), description, amount));
        },
        removeTransaction(id) {
            this.transactions = this.transactions.filter(transaction => transaction.id !== id);
            // this.transactions.splice(this.transactions.findIndex(transaction => transaction.id === id), 1);

        }
    },
    getters: {
        balance: (state) => {
            return state.transactions.reduce((total, transaction) => total + transaction.amount, 0);
        },
        allTransactions: (state) => {
            return state.transactions;
        },
        incomeAmount: (state) => {
            return state.transactions.filter(transaction => transaction.amount > 0).reduce((total, transaction) => total + transaction.amount, 0);
        },
        expenseAmount: (state) => {
            return state.transactions.filter(transaction => transaction.amount < 0).reduce((total, transaction) => total + transaction.amount, 0);
        }
    }
});