<template>
    <div class="w-11/12 lg:w-1/3 h-80 mt-24 sm:mt-4 md:mt-8 lg:mt-32 rounded-t-xl rounded-b-md shadow-2xl bg-white bg-opacity-90">
        <div class="w-full h-12 text-2xl text-white text-center pt-2 rounded-t-xl bg-blue-500 shadow-xl">
            <div :class=[textColor] class="text-center shadow-lg">{{header}}</div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        header: String,
        textColor: String
    }
}
</script>
