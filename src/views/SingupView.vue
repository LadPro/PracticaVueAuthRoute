<template>
    <div class="bg-slate-400 rounded-lg py-2">    
        <div class="container flex flex-col mx-auto bg-white rounded-lg my-5">
           <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div class="flex items-center justify-center w-full lg:p-12">
                <div class="flex items-center xl:p-10">
                <form class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                    <h3 class="mb-3 text-4xl font-extrabold text-gray-700">Sign up</h3>
                    <p class="mb-4 text-grey-700">Ingresa tu nombre email y password</p>
                    
                    
                    <label for="email" class="mb-2 text-sm text-start text-gray-900">Nombre*</label>
                    <input id="email" type="email" placeholder="Pedro Perez" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"/>
                    <label for="email" class="mb-2 text-sm text-start text-gray-900">Email*</label>
                    <input id="email" type="email" placeholder="mail@loopple.com" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"/>
                    <label for="password" class="mb-2 text-sm text-start text-gray-900">Password*</label>
                    <input id="password" type="password" placeholder="Enter a password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"/>
                    <label for="password" class="mb-2 text-sm text-start text-gray-900">Reppite el password*</label>
                    <input id="password" type="password" placeholder="Enter a password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"/>
                    <div class="flex items-center mb-3">
                        <hr class="h-0 border-b border-solid border-gray-500 grow">
                        <p class="mx-4 text-gray-600">or</p>
                        <hr class="h-0 border-b border-solid border-gray-500 grow">
                    </div>
                    <GoogleButton/>
                    <button class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-blue-100 bg-blue-600">Registrarse</button>
                    <p class="text-sm leading-relaxed text-gray-900">Ya tienes una cuenta? <router-link :to="{name:'login'}" class="font-bold text-grey-700">Ingresa</router-link></p>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import GoogleButton from '@/components/GoogleButton.vue';
</script>

<style scoped>
</style>