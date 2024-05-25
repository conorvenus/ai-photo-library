<script setup>
defineProps({
    name: String,
    photoURL: String
})
</script>
<template>
    <div class="flex items-center gap-2 bg-gray-light rounded-xl px-8 py-4 shadow-xl justify-center">
        <img :src="photoURL" alt="Profile photo" class="h-8 w-8 object-contain rounded-full shadow-md" />
        <p class="font-medium text-gray-dark">{{ name }}</p>
    </div>
</template>