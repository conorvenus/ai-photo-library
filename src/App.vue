<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <Sidebar />
    <main class="flex-1">
        <RouterView />
    </main>
</template>