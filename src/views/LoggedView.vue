<template>
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">

        <label for="message" class="block mb-2 font-medium text-gray-900 text-2xl">Escribe tu mensaje</label>
        <textarea v-model="textArea" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tu mensaje..."></textarea>
        <button @click="postNote(textArea)" class="bg-blue-500 my-7 p-3 rounded-xl text-gray-300">Guardar nota</button>

    </div>
    <div  class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article v-for="(nota,index) in store.notas" :key="nota.id" class="flex max-w-xl flex-col items-center justify-between">
        <div class="group relative">
          <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span class="absolute inset-0"></span>
              Nota {{ index + 1}}
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ nota.content }}</p>
        </div>
      </article>

      <!-- More posts... -->
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted } from 'vue';
import { useNotes } from '@/store/store';
const textArea = ref("")
const store = useNotes()

const postNote = async (content:string) => {
  await store.postNote(content)
  alert(store.message)
  textArea.value = ""
}

onMounted(async ()=>{
  await store.getNotes()
})



</script>

<style scoped>
</style>