<template>
<<<<<<< HEAD
    <div class="w-11/12 lg:w-2/4 h-80 mt-24 sm:mt-4 md:mt-8 lg:mt-32 rounded-t-xl rounded-b-md shadow-2xl bg-white bg-opacity-90">
        <div class="w-full h-12 text-2xl text-white text-center pt-2 rounded-t-xl bg-blue-500 shadow-xl">
            <div :class=[textColor] class="text-center shadow-lg">{{header}}</div>
=======
    <div class="w-11/12 lg:w-2/4 h-80 mt-12 sm:mt-4 md:mt-8 lg:mt-32 rounded-t-xl rounded-b-md shadow-2xl bg-white bg-opacity-90">
        <div class="w-full h-12 text-2xl text-white text-center pt-2 rounded-t-xl bg-blue-500 shadow-xl">
            <div class="text-center shadow-lg">{{header}}</div>
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
<<<<<<< HEAD
        header: String,
        textColor: String
=======
        header: String
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
    }
}
</script>
