<template>
     <div class="flex flex-col mb-4">
        <label>{{label}}</label>
            <input class="mt-2 border-b-2 border-r-2 rounded-md border-gray-400 w-full px-2 py-1 shadow-sm focus:outline-none focus:border-yellow-400" 
                    :type="type" 
                    :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        placeholder: String
    }
}
</script>
