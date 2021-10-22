<template>
    <button :class=[colorConcat]
            class="w-2/3 h-12 border rounded-md text-center hover:text-white">
        {{text}}
        <slot></slot>
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
