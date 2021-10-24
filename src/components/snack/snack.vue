<template>
<<<<<<< HEAD
    <div :class="bgColor" class="absolute flex flex-wrap shadow-2xl text-center justify-center content-center top-16 lg:top-16 px-4 py-4 text-2xl font-semibold rounded-md text-white">
=======
    <div :class="bgColor" class="absolute flex flex-wrap shadow-2xl justify-center content-center top-16 w-72 h-16 text-xl rounded-md text-white">
>>>>>>> 3897a93a919b1f5f2959873860fbfdee8c7b944a
        {{emoji}} {{text}} {{emoji}}
    </div>
</template>
<script>
export default {
    name: 'SnackSuccess',
    props: {
        text: String,
        bgColor: String,
        emoji: String
    }
}
</script>
