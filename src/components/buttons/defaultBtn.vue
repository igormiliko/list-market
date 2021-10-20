<template>
    <button :class=[colorConcat]
            class="w-1/3 h-8 border rounded-md text-center hover:text-white">
        {{text}}
    </button>
</template>
<script>

export default {
    name: 'BtnSave',
    props: {
        color: String,
        text: String
    },
    computed: {
        colorConcat(){
            return `border-${this.color}-400 text-${this.color}-400 hover:bg-${this.color}-400`
        }
    }
}
</script>
