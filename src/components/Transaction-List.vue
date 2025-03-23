<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{ transaction.description }}
      <span
        >{{ transaction.amount > 0 ? "+" : "" }}{{ transaction.amount }}</span
      >
      <button class="delete-btn" @click="handleRemoveTransaction(transaction.id)">x</button>
    </li>

  </ul>
</template>

<script>
import { storeToRefs } from "pinia";
import { useTransactionStore } from "@/stores/TransactionStore";
export default {
  setup() {
    const transactionStore = useTransactionStore();
    const { removeTransaction } = transactionStore;
    const { transactions } = storeToRefs(transactionStore);

    const handleRemoveTransaction = (id) => {
        removeTransaction(id);
    };

    return {
      transactions,
    handleRemoveTransaction,
    };
  },
};
</script>
