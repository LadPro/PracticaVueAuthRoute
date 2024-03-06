<template>
    <div>
        <h1 class="text-2xl"><strong>Ingresa o crea una cuenta porfavor</strong></h1>
        <div class="flex justify-center gap-4 m-3">
            <router-link :to="{name:'login'}">
                <button class="bg-blue-500 p-3 rounded-xl"><strong>Ingresar</strong></button>
            </router-link>
            <router-link :to="{name:'singup'}">
                <button class="bg-green-400 p-3 rounded-xl"><strong>Crear cuenta</strong></button>
            </router-link>
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>