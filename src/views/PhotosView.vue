<script setup>
import PhotoGrid from '../components/PhotoGrid.vue'
</script>
<template>
    <div class="flex flex-col gap-8">
        <header>
            <h1 class="text-3xl font-bold text-primary">Photos</h1>
            <p class="text-dark-gray font-medium text-sm">
                June 27, 2022
                <span class="text-primary">•</span>
                27 Photos
            </p>
        </header>
    </div>
    <PhotoGrid />
</template>