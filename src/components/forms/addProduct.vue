<template>
    <form @submit.prevent="saveProduct">
        <div class="w-full p-6 flex flex-col">
           <Input :label="productName" :placeholder="exampleItem" />
           <Input :label="productPrice" :placeholder="currency+currency+currency" />
        </div>

        <div class="w-full flex justify-around">
            <router-link to="/">
                <BtnSave />
            </router-link>
          
            <router-link to="/">
                <BtnCancel />
            </router-link>

        </div>
    </form>
</template>
<script>
import { mapState } from 'vuex'
import Input from './input.vue'
import BtnSave from '../buttons/btnSave.vue'
import BtnCancel from '../buttons/btnCancel.vue'

export default {
    name: 'ProductAddForm',
    components: {
        Input,
        BtnSave,
        BtnCancel
    },
    data: () => ({
        productPrice: 'Product price',
        productName: 'Product Name',
        exampleItem: '1kg of Banana',
        currency: '$',
    }),
    methods: {
        putLanguage() {
            this.TRANSLATE.translating.addProductForm(this)
        }
    },
    watch: {
        LANGUAGE(){
            this.putLanguage()
        }
    },
    mounted() {
        this.putLanguage()
    },
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE'])
    }

}
</script>
