<script setup>
    defineProps({
        photoURL: String
    })
</script>

<template>
    <img class="rounded-xl shadow-md cursor-pointer w-60 transition-[0.8] hover:transform-gpu hover:scale-[1.1]" :src="photoURL" alt="photo"/>
</template>