<template>
  <div id="app">
    <TheHeader />
    <TheBalance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
      </div>
</template>

<script>
import TheHeader from './components/The-Header.vue'
import TheBalance from './components/The-Balance.vue'
import IncomeExpenses from './components/Income-Expenses.vue'
import TransactionList from './components/Transaction-List.vue'
import AddTransaction from './components/Add-Transaction.vue'
import { useTransactionStore } from './stores/TransactionStore'

export default {
    components: {
      TheHeader,
      TheBalance,
      IncomeExpenses,
      TransactionList,
      AddTransaction
    },

    setup() {
      const transactionStore = useTransactionStore()
      
      return {
        transactionStore
      }
      
    }
  }
</script>