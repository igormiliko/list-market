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
            if(this.LANGUAGE == 'en-US') {
                this.productName = this.TRANSLATE.productName.EN
                this.productPrice = this.TRANSLATE.productPrice.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.productName = this.TRANSLATE.productName.PT
                this.productPrice = this.TRANSLATE.productPrice.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.productName = this.TRANSLATE.productName.ES
                this.productPrice = this.TRANSLATE.productPrice.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.productName = this.TRANSLATE.productName.RU
                this.productPrice = this.TRANSLATE.productPrice.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.productName = this.TRANSLATE.productName.CH
                this.productPrice = this.TRANSLATE.productPrice.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.productName = this.TRANSLATE.productName.KO
                this.productPrice = this.TRANSLATE.productPrice.KO
            }
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
        ...mapState(['LANGUAGE', 'TRANSLATE', 'toShowAddProductPage'])
    }

}
</script>
