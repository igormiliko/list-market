<template>
    <thead class="w-full bg-blue-400 text-white">
        <tr class="h-12">
            <th></th>
            <th class="w-1/2 border-none">{{marketNameTXT}}</th>
            <th class="w-1/2 border-none">{{priceCol}}</th>
            <th></th>
        </tr>
    </thead>
</template>
<script>
export default {
    name: 'TableHeadMarket',
    data: () => ({
        marketNameTXT: 'Market',
        priceCol: 'Price',
    })
}
</script>