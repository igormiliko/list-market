<template>
    <table class="w-full h-auto border-collapse tracking-widest">
        <TableHead />
        <TableBody />
    </table>
</template>
<script>
import TableHead from './tableHead.vue'
import TableBody from './tableBody.vue'

export default {
    name: 'MarketTable',
    components: {
        TableHead,
        TableBody,
    }
}
</script>