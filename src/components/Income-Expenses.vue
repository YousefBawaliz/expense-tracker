<template>
 <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">{{ incomeAmount }}$</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">{{ expenseAmount }}$</p>
        </div>
      </div>
</template>
<script>
import { useTransactionStore } from '@/stores/TransactionStore';
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const TransactionStore = useTransactionStore()
        const { incomeAmount, expenseAmount} = storeToRefs(TransactionStore)
        return {incomeAmount, expenseAmount}
    }
}
</script>
