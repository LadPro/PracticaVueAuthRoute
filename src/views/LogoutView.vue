<template>
    <div>
        <h1>usted se esta deslogueando</h1>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useNotes } from '@/store/store';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useNotes()

onMounted(()=>{
    store.logout()
    setTimeout(()=>{router.push("login")}, 1500)
    
})

</script>

<style scoped>
</style>