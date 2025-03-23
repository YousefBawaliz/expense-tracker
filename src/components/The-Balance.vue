<template>
    <div>
        <h4>Your Balance</h4>
        <h1 id="balance">{{balance}}$</h1>
    </div>
</template>
<script>
import { useTransactionStore } from '@/stores/TransactionStore';
import { storeToRefs } from "pinia";


export default {
    setup() {
        const TransactionStore = useTransactionStore()
        const { balance} = storeToRefs(TransactionStore)
        return {balance}
    }
}
</script>
