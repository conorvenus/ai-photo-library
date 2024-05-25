<script setup>
import SidebarLink from './SidebarLink.vue'
defineProps({
    title: String,
    links: Array
})
</script>
<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-dark-gray font-bold text-2xl">{{ title }}</h2>
        <ul class="flex flex-col gap-1">
            <li v-for="link in links" :key="link.to">
                <SidebarLink :icon="link.icon" :text="link.title" :to="link.to" />
            </li>
        </ul>
    </div>
</template>