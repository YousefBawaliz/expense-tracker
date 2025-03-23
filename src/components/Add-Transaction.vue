<template>
    <div>
        <h3>Add new transaction</h3>
        <form id="form" @submit="handleSubmit">
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" placeholder="Enter text..." />
            </div>
            <div class="form-control">
                <label for="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" id="amount" placeholder="Enter amount..." />
            </div>
            <button class="btn" type="submit">Add transaction</button>
        </form>
    </div>
</template>


<script>
import { useTransactionStore } from "@/stores/TransactionStore";
export default {
  setup() {
    const transactionStore = useTransactionStore();
    const { addTransaction } = transactionStore;
    const handleSubmit = (e) => {
      e.preventDefault();
      const text = e.target[0].value;
      const amount = e.target[1].value;
      if (text && amount) {
        addTransaction({ description: text, amount: +amount });
        e.target.reset();
      }
    };
    return {
      handleSubmit,
    };
  },
};
</script>