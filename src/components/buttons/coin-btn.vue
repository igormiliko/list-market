<template>
    <button id="coin-spin" class="text-white w-16 h-16 ml-2 bg-yellow-400 rounded-full text-3xl cursor-pointer hover:w-20 hover:h-20 border-r-4 border-b-2 border-t border-yellow-500">
    {{currency}}
    </button> 
</template>
<script>
export default {
    name: 'Coin'
}
</script>
<style>
#coin-spin:hover {
    animation: spin 4s infinite;
}

@keyframes spin {
    0%{transform: rotateY(0deg);}
    25%{transform: rotateY(180deg);}
    50%{transform: rotateY(0deg);}
    75%{transform: rotateY(0deg);}
    100%{transform: rotateY(360deg);}
}
</style>