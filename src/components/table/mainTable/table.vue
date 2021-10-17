<template>
    <table class="w-full border-collapse border border-gray-300 tracking-widest">
        <TableHead />
        <TableEmpty v-if="marketList.length == 0" key="noItemsToShow" />
        <TableBody v-else/>

    </table>
</template>
<script>
import { mapState } from 'vuex'

import TableHead from './tableHead.vue'
import TableEmpty from './tableEmpty.vue'
import TableBody from './tableBody.vue'

export default {
    name: 'TableProducts',
    components: {
        TableHead,
        TableEmpty,
        TableBody
    },

    computed: {
        ...mapState(['marketList'])
    }
}
</script>