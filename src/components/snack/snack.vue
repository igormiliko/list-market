<template>
    <div :class="bgColor" class="absolute flex flex-wrap shadow-2xl text-center justify-center content-center top-16 lg:top-16 px-4 py-4 text-2xl font-semibold rounded-md text-white">
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
