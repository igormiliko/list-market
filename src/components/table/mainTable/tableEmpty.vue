<template>
    <tbody >
        <tr class="border-b text-center text-2xl text-gray-300 h-12">
            <td></td>
            <td>{{noItems}}</td>
            <td>{{noItems}}</td>
            <td></td>
        </tr>
        </tbody>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'EmptyTable',
    data: () => ({
        noItems: 'No Items!',
    }),
    watch: {
        LANGUAGE(){
            if(this.LANGUAGE == 'en-US') {
                this.noItems = this.TRANSLATE.table.noItems.EN
            }
            else if(this.LANGUAGE == 'pt-BR') {
                this.noItems = this.TRANSLATE.table.noItems.PT
            }
             else if(this.LANGUAGE == 'es-ES') {
                this.noItems = this.TRANSLATE.table.noItems.ES
            }
             else if(this.LANGUAGE == 'ru') {
                this.noItems = this.TRANSLATE.table.noItems.RU
            }
             else if(this.LANGUAGE == 'ch') {
                this.noItems = this.TRANSLATE.table.noItems.CH
            }
             else if(this.LANGUAGE == 'ko') {
                this.noItems = this.TRANSLATE.table.noItems.KO
            }
        }
    },
    computed: {
        ...mapState(['LANGUAGE', 'TRANSLATE']),
    }

}
</script>
