<template>
        <div class="flex justify-center gap-4 m-3">
            <router-link :to="{name:props.linkA}">
                <button class="bg-blue-500 p-3 rounded-xl"><strong>{{props.textA}}</strong></button>
            </router-link>
            <router-link :to="{name:props.linkB}">
                <button  class="bg-green-400 p-3 rounded-xl" ><strong>{{props.textB}}</strong></button>
            </router-link>
        </div>
        <router-view/>        
</template>

<script lang="js" setup>
import { ref, defineProps, toRefs } from 'vue';
import { onMounted } from 'vue';

const props = defineProps({
    textA:{
            type: String,
            required: false,
            default: "Ingresa"

    },
    textB:{
            type: String,
            required: false,
            default: "Registrarte"

    },
    linkA:{
            type: String,
            required: false,
            default: "login"

    },
    linkB:{
            type: String,
            required: false,
            default: "singup"

    },
    customClick: {
        type: Function,
        required: false,
        default: ()=>{return}
    }
})

</script>

<style scoped>
</style>