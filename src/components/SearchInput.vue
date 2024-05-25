<script setup>
    defineProps({
        label: String
    })
</script>

<template>
    <div class="p-2 rounded-2xl flex flex-row bg-gray-light justify-center">
        <input type="text" class="w-full pl-3 rounded-2xl bg-gray-light focus:outline-none" :placeholder="label"/>
        <div class="pr-1 ml-1">
            <v-icon name="hi-solid-search" class="text-[#b9c1d8]" />
        </div>
        
    </div>
    
</template>