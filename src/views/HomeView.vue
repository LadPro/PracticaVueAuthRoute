<template>
  <div class="home">
    <h1 class>Bienvenido porfavor ingrese o cree una cuenta</h1>
    <div class="flex justify-center gap-3 mt-5">
      <router-link :to="{name:'login'}">
          <button class="bg-blue-500 p-3 rounded-xl">Ingresar</button>
      </router-link>
      <router-link :to="{name:'singup'}">
          <button class="bg-green-400 p-3 rounded-xl">Crear cuenta</button>
      </router-link>

    </div>
  </div>
  <router-view/>
</template>

<script lang="ts" setup>
</script>
