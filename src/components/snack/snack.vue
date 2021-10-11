<template>
    <div :class="bgColor" class="absolute flex flex-wrap shadow-2xl justify-center content-center top-16 w-72 h-16 text-xl rounded-md text-white">
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
